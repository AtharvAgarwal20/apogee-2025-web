import React, { useState, useEffect } from "react";
import styles from "./form.module.scss";
import regWrapper from "../../../src/assets/Register/regWrapper.png";
import regButton from "../../../src/assets/Register/regButton.png";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import axios from "axios";
import statesData from "./states.json";
import citiesData from "./states.json";

export default function RegForm({email}) {
  // const [interestOptions, setInterestOptions] = useState([""]);
  // const [eventsOptions, setEventsOptions] = useState([""]);
  // const [collegeOptions, setCollegeOptions] = useState([""]);
  const [stateOptions, setStateOptions] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cityOptions, setCityOptions] = useState([]);

  const initialValues = {
    name: "",
    email_id: email,
    phone: "",
    gender: "",
    interests: [],
    events: [],
    college_id: "",
    year: "",
    city: "",
    state: "",
    referral: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("*Name is required"),
    // email_id: Yup.string()
    //   .email("*Please enter a valid email")
    //   .required("*Please enter your email"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "*Phone number must be exactly 10 digits")
      .required("*Phone number is required"),
    gender: Yup.string().required("*Gender is required"),
    college_id: Yup.string().required("*College is required"),
    year: Yup.string().required("*Please select your year of study"),
    state: Yup.string().required("*State is required"),
    city: Yup.string().required("*City is required"),
  });

  function handleNumericInput(event) {
    // check for phone number input
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, "");
    event.target.value = inputValue;
  }

  const interestOptions = {
    data: [
      { id: "sports", name: "Sports" },
      { id: "music", name: "Music" },
      { id: "art", name: "Art" },
      { id: "technology", name: "Technology" },
      { id: "literature", name: "Literature" },
    ],
  };

  const eventsOptions = {
    data: [
      { id: "workshop", name: "Workshop" },
      { id: "seminar", name: "Seminar" },
      { id: "concert", name: "Concert" },
      { id: "competition", name: "Competition" },
      { id: "webinar", name: "Webinar" },
    ],
  };

  const collegeOptions = {
    data: [
      { id: "college1", name: "College 1" },
      { id: "college2", name: "College 2" },
    ],
  };

  const genderOptions = [
    { value: "M", label: "MALE", label1: "Male" },
    { value: "F", label: "FEMALE", label1: "Female" },
    { value: "O", label: "OTHER", label1: "Other" },
  ];

  const yearOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];

  useEffect(() => {
    const allStates = statesData.map((state) => ({
      value: state.name,
      label: state.name,
    }));
    setStateOptions(allStates);
  }, []);

  useEffect(() => {
    const selectedStateCities =
      citiesData
        .find((state) => state.name === selectedState)
        ?.cities.map((city) => ({
          value: city.name,
          label: city.name,
        })) || [];
    setCityOptions(selectedStateCities);
  }, [selectedState]);

  const calculateFontSize = () => {
    if (window.innerWidth < 500) {
      return 20;
    } else if (window.innerWidth < 885) {
      return 24;
    } else {
      return 28;
    }
  };
  
  const fontsize = calculateFontSize();

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "none",
      borderBottom: "2px solid #483312",
      borderRadius: "0",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#483312",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#8F7C56", // Transparent background for options menu
      maxHeight: "200px", // Optional: Limit the menu height
      overflow: "hidden", // Hide overflow
      scrollbarWidth: "none", // For Firefox: Disable scrollbar
      "::-webkit-scrollbar": {
        display: "none", // For Chrome, Safari, and Edge: Disable scrollbar
      },
      border: "3px solid #483312",
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "200px", // Restrict menu list height
      // overflow: "hidden", // Prevent scrollable overflow
      scrollbarWidth: "none", // For Firefox: Disable scrollbar
      "::-webkit-scrollbar": {
        display: "none", // For Chrome, Safari, and Edge: Disable scrollbar
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#473618" : "#8F7C56", // Optional: Light blue background on hover
      color: state.isFocused ? "#DDBC80" : "#2B1B03", // Text color
      textAlign: "center",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: state.isFocused ? "#473618" : "#8F7C56",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#2B1B03", // Placeholder text color
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#2B1B03", // Selected value text color
      fontWeight: "700",
      fontSize: fontsize,
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      width: "0",
      transform: "translateX(-30px)",
      "& svg": {
        width: "30px",
        height: "30px",
      },
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "#3E2D10",
      height: "20px",
      padding: "5px",
      "&:hover": {
        color: "#3E2D10",
      },
      cursor: "pointer",
    }),
  };

  const customStyles1 = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "none",
      borderBottom: "2px solid #483312",
      borderRadius: "0",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#483312",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#8F7C56", // Transparent background for options menu
      maxHeight: "200px", // Optional: Limit the menu height
      overflow: "hidden", // Hide overflow
      scrollbarWidth: "none", // For Firefox: Disable scrollbar
      "::-webkit-scrollbar": {
        display: "none", // For Chrome, Safari, and Edge: Disable scrollbar
      },
      border: "3px solid #483312",
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "200px", // Restrict menu list height
      // overflow: "hidden", // Prevent scrollable overflow
      scrollbarWidth: "none", // For Firefox: Disable scrollbar
      "::-webkit-scrollbar": {
        display: "none", // For Chrome, Safari, and Edge: Disable scrollbar
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#473618" : "#8F7C56", // Optional: Light blue background on hover
      color: state.isFocused ? "#DDBC80" : "#2B1B03", // Text color
      textAlign: "center",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: state.isFocused ? "#473618" : "#8F7C56",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#2B1B03", // Placeholder text color
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "transparent", // Transparent background for selected options
      border: "2px solid #483312", // Optional: Add border around the selected tag
      borderRadius: "5px",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#2B1B03", // Text color for selected options
      fontSize: fontsize,
      fontWeight: "700",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "#2B1B03", // Color for the remove icon
      "&:hover": {
        backgroundColor: "transparent", // No hover effect for remove icon
        color: "#483312", // Hover color for the remove icon
      },
      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#2B1B03", // Selected value text color
      fontWeight: "700",
      fontSize: fontsize,
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "#3E2D10",
      height: "20px",
      padding: "5px",
      "&:hover": {
        color: "#3E2D10",
      },
      cursor: "pointer",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      width: "0",
      transform: "translateX(-30px)",
      "& svg": {
        width: "30px",
        height: "30px",
      },
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: "#483312",
      "&:hover": {
        color: "#2B1B03",
      },
      cursor: "pointer",
    }),
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.dummyWrapper}
        style={{
          background: `radial-gradient(40.9% 58.96% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.38) 100%), url(${regWrapper})`,
          boxShadow: "-12px -12px 15.34px 0px rgba(0, 0, 0, 0.32)",
        }}
      ></div>
      <div className={styles.overflowWrapper}></div>
      <div
        className={styles.mainWrapper}
        style={{
          background: `url(${regWrapper})`,
          boxShadow: "12px 12px 15.34px 10px rgba(0, 0, 0, 0.42)",
        }}
      >
        <h2>REGISTRATION</h2>

        <div className={styles.formContainer}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log("Form data", values);
              setSubmitting(false);
            }}
          >
            {({ values, setFieldValue, isSubmitting }) => (
              <Form className={styles.form}>
                <div className={styles.input}>
                  <label htmlFor="name">Name</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className={styles.inputField}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.input}>
                  <label htmlFor="email_id">Email ID</label>
                  <Field
                    type="email"
                    id="email_id"
                    name="email_id"
                    placeholder="Your Email"
                    // value={email_id}
                    disabled
                    className={styles.inputField}
                  />
                  {/* <ErrorMessage
                    name="email_id"
                    component="div"
                    className={styles.errorMessage}
                  /> */}
                </div>

                <div className={styles.input}>
                  <label htmlFor="phone">Phone Number</label>
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    maxLength="10"
                    placeholder="Your Phone No"
                    onInput={(e) => handleNumericInput(e)}
                    className={styles.inputField}
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.input}>
                  <label htmlFor="gender">Gender</label>
                  <div className={styles.checkboxContainer}>
                    {genderOptions.map((option) => (
                      <div key={option.value} className={styles.checkboxItem}>
                        <div
                          className={`${styles.customCheckbox} ${
                            values.gender === option.value ? styles.checked : ""
                          }`}
                          onClick={() => {
                            setFieldValue("gender", option.value);
                          }}
                        ></div>
                        <label
                          className={styles.checkboxLabel}
                          htmlFor={`gender-${option.value}`}
                          onClick={() => {
                            setFieldValue("gender", option.value);
                          }}
                        >
                          {window.innerWidth > 1200
                            ? option.label
                            : option.label1}
                        </label>
                      </div>
                    ))}
                  </div>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.input}>
                  <label htmlFor="interests">Interests</label>
                  <Select
                    id="interests"
                    name="interests"
                    options={(Array.isArray(interestOptions.data)
                      ? interestOptions.data
                      : []
                    ).map((item) => ({
                      value: item.id,
                      label: item.name,
                    }))}
                    isMulti
                    value={values.interests || []} // Updated
                    onChange={(selectedOptions) => {
                      setFieldValue("interests", selectedOptions || []);
                    }}
                    styles={customStyles1}
                    placeholder="Choose Interests"
                  />
                  <ErrorMessage
                    name="interests"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.input}>
                  <label htmlFor="events">Events</label>
                  <Select
                    id="events"
                    name="events"
                    options={(Array.isArray(eventsOptions.data)
                      ? eventsOptions.data
                      : []
                    ).map((item) => ({
                      value: item.id,
                      label: item.name,
                    }))}
                    isMulti
                    value={values.events || []} // Updated
                    onChange={(selectedOptions) => {
                      setFieldValue("events", selectedOptions || []);
                    }}
                    styles={customStyles1}
                    placeholder="Choose Events"
                  />
                  <ErrorMessage
                    name="events"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.input}>
                  <label htmlFor="college_id">College</label>
                  <Select
                    id="college_id"
                    name="college_id"
                    options={(Array.isArray(collegeOptions.data)
                      ? collegeOptions.data
                      : []
                    ).map((item) => ({
                      value: item.id,
                      label: item.name,
                    }))}
                    value={(Array.isArray(collegeOptions)
                      ? collegeOptions
                      : []
                    ).find((option) => option.value === values.college)}
                    onChange={(selectedOption) => {
                      setFieldValue(
                        "college_id",
                        selectedOption ? selectedOption.value : ""
                      );
                    }}
                    className={styles.collegeWrapper}
                    styles={customStyles}
                    placeholder="Choose Your College"
                  />
                  <ErrorMessage
                    name="college_id"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.input}>
                  <label htmlFor="year">Year of study</label>
                  <div className={styles.checkboxContainer}>
                    {yearOptions.map((option) => (
                      <div key={option.value} className={styles.checkboxItem}>
                        <div
                          className={`${styles.customCheckbox} ${
                            values.year === option.value ? styles.checked : ""
                          }`}
                          onClick={() => {
                            setFieldValue("year", option.value);
                          }}
                        ></div>
                        <label
                          className={styles.checkboxLabel}
                          htmlFor={`year-${option.value}`}
                          onClick={() => {
                            setFieldValue("year", option.value);
                          }}
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  <ErrorMessage
                    name="year"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.input}>
                  <label htmlFor="state">State</label>
                  <Select
                    id="state"
                    name="state"
                    options={stateOptions}
                    value={stateOptions.find(
                      (option) => option.value === values.state
                    )}
                    onChange={(selectedOption) => {
                      setFieldValue(
                        "state",
                        selectedOption ? selectedOption.value : ""
                      );
                      setFieldValue("city", ""); // Clear the city when the state changes
                      setSelectedState(
                        selectedOption ? selectedOption.value : ""
                      );
                    }}
                    className={styles.stateWrapper}
                    styles={customStyles}
                    placeholder="Your State"
                  />
                  <ErrorMessage
                    name="state"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.input}>
                  <label htmlFor="city">City</label>
                  <Select
                    id="city"
                    name="city"
                    options={cityOptions}
                    value={cityOptions.find(
                      (option) => option.value === values.city
                    )}
                    onChange={(selectedOption) => {
                      setFieldValue(
                        "city",
                        selectedOption ? selectedOption.value : ""
                      );
                    }}
                    isDisabled={!selectedState} // Disable city selection if no state is selected
                    className={styles.cityWrapper}
                    styles={customStyles}
                    placeholder="Your City"
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className={styles.errorMessage}
                  />
                </div>

                <div className={styles.input}>
                  <label htmlFor="referral">Referral Code</label>
                  <Field
                    type="text"
                    id="referral"
                    name="referral"
                    placeholder="Enter referral code"
                    className={styles.inputField}
                  />
                </div>

                <button
                  className={styles.regButton}
                  style={{ background: `url(${regButton})` }}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Register
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
