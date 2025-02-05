// RegistrationModal.jsx
import React, { useEffect } from "react";
import styles from "./modal.module.scss";

const RegistrationModal = ({ message, isOpen, onClose, type }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClick = () => {
    window.location.href =
      "https://merge.bits-apogee.org/2025/main/registrations/";
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {type === "Success" ? (
          ""
        ) : (
          <span className={styles.modalClose} onClick={onClose}>
            &times;
          </span>
        )}
        <p className={styles.message}>
          {type === "Success" ? message : `Registration Failed: ${message}`}
        </p>
        {type === "Success" ? (
          <button
            className={styles.dashboardButton}
            onClick={() => handleClick()}
          >
            DashBoard
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
