import React from "react";
import styles from "./instructions.module.scss";
import regWrapper from "../../../src/assets/Register/regWrapper.png";

export default function Instructions() {
  return (
    <>
      <div
        className={styles.mainWrapper}
        style={{
          background: `url(${regWrapper})`,
          boxShadow: "-12px -12px 15.34px 0px rgba(0, 0, 0, 0.32)",
        }}
      >
        <h2>REGISTRATION</h2>

        <div className={styles.instructionContainer}>
          <div className={styles.heading}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.00138028 9.24916C0.0464493 7.5746 0.735987 6.10288 1.41878 4.62214C1.55399 4.3314 1.55851 3.90769 1.46161 3.59667C1.21824 2.8101 1.65991 2.32553 2.13539 1.87027C3.30493 0.74563 4.82602 0.418832 6.3426 0.121333C7.98311 -0.200958 9.56953 0.0987946 10.7323 1.26175C11.7238 2.25341 12.4968 3.49976 13.1953 4.73257C13.619 5.47858 13.7722 6.39812 13.9525 7.25906C14.268 8.76008 13.5221 9.95008 12.6252 11.0184C10.4506 13.6125 7.45578 14.0722 4.32123 14.0249C3.09761 14.0069 2.02723 13.4367 1.15064 12.6005C0.377701 11.8658 -0.0256633 10.5383 -0.000875372 9.25141L0.00138028 9.24916ZM7.33184 1.48938C6.35159 1.89055 5.29923 2.06184 4.60742 2.65459C2.69875 4.29083 1.6464 6.48151 1.32416 8.97194C1.0605 11.0071 2.37878 12.5938 4.40012 12.8079C6.72118 13.0535 8.87998 12.4563 10.7391 11.1468C12.2489 10.0831 13.0624 8.52569 12.65 6.54236C12.3007 4.85879 11.4219 3.46369 10.2613 2.26919C9.48614 1.47135 8.47886 0.98904 7.23947 1.0837C7.2913 1.30682 7.33184 1.49614 7.33184 1.48938Z"
                fill="#3E2D10"
              />
              <path
                d="M12.5973 7.07899C12.5973 10.1995 10.0677 12.7292 6.94714 12.7292C3.82662 12.7292 1.29694 10.1995 1.29694 7.07899C1.29694 3.95847 3.82662 1.42879 6.94714 1.42879C10.0677 1.42879 12.5973 3.95847 12.5973 7.07899Z"
                fill="#3E2D10"
              />
              <path
                d="M4.73902 9.54689L0.972219 7.20887L0.647495 10.586L2.33606 13.0539H7.79143L4.73902 9.54689Z"
                fill="#3E2D10"
              />
              <path
                d="M9.15527 0.714393L6.36264 0.909227L7.14198 2.85757L12.0778 3.89669L9.15527 0.714393Z"
                fill="#3E2D10"
              />
              <path
                d="M9.54494 8.57272L12.4675 5.6502L13.2468 8.57272L11.1686 11.755L9.54494 8.57272Z"
                fill="#3E2D10"
              />
            </svg>
            <h3>INSTRUCTIONS</h3>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.00138028 9.24916C0.0464493 7.5746 0.735987 6.10288 1.41878 4.62214C1.55399 4.3314 1.55851 3.90769 1.46161 3.59667C1.21824 2.8101 1.65991 2.32553 2.13539 1.87027C3.30493 0.74563 4.82602 0.418832 6.3426 0.121333C7.98311 -0.200958 9.56953 0.0987946 10.7323 1.26175C11.7238 2.25341 12.4968 3.49976 13.1953 4.73257C13.619 5.47858 13.7722 6.39812 13.9525 7.25906C14.268 8.76008 13.5221 9.95008 12.6252 11.0184C10.4506 13.6125 7.45578 14.0722 4.32123 14.0249C3.09761 14.0069 2.02723 13.4367 1.15064 12.6005C0.377701 11.8658 -0.0256633 10.5383 -0.000875372 9.25141L0.00138028 9.24916ZM7.33184 1.48938C6.35159 1.89055 5.29923 2.06184 4.60742 2.65459C2.69875 4.29083 1.6464 6.48151 1.32416 8.97194C1.0605 11.0071 2.37878 12.5938 4.40012 12.8079C6.72118 13.0535 8.87998 12.4563 10.7391 11.1468C12.2489 10.0831 13.0624 8.52569 12.65 6.54236C12.3007 4.85879 11.4219 3.46369 10.2613 2.26919C9.48614 1.47135 8.47886 0.98904 7.23947 1.0837C7.2913 1.30682 7.33184 1.49614 7.33184 1.48938Z"
                fill="#3E2D10"
              />
              <path
                d="M12.5973 7.07899C12.5973 10.1995 10.0677 12.7292 6.94714 12.7292C3.82662 12.7292 1.29694 10.1995 1.29694 7.07899C1.29694 3.95847 3.82662 1.42879 6.94714 1.42879C10.0677 1.42879 12.5973 3.95847 12.5973 7.07899Z"
                fill="#3E2D10"
              />
              <path
                d="M4.73902 9.54689L0.972219 7.20887L0.647495 10.586L2.33606 13.0539H7.79143L4.73902 9.54689Z"
                fill="#3E2D10"
              />
              <path
                d="M9.15527 0.714393L6.36264 0.909227L7.14198 2.85757L12.0778 3.89669L9.15527 0.714393Z"
                fill="#3E2D10"
              />
              <path
                d="M9.54494 8.57272L12.4675 5.6502L13.2468 8.57272L11.1686 11.755L9.54494 8.57272Z"
                fill="#3E2D10"
              />
            </svg>
          </div>
          <div className={styles.content}>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.00850232 29.0106C0.149864 23.7582 2.31264 19.1421 4.45428 14.4977C4.87836 13.5857 4.89254 12.2567 4.58862 11.2812C3.82526 8.81405 5.2106 7.29418 6.70197 5.86622C10.3703 2.33872 15.1413 1.31369 19.8981 0.380569C25.0437 -0.630318 30.0196 0.309876 33.6668 3.95755C36.7767 7.06797 39.2011 10.9772 41.3922 14.844C42.721 17.1839 43.2016 20.0681 43.767 22.7685C44.7566 27.4766 42.4171 31.2091 39.604 34.5598C32.7833 42.6964 23.3897 44.1385 13.558 43.9901C9.72002 43.9335 6.36271 42.1451 3.61322 39.5224C1.18886 37.2179 -0.0763218 33.0541 0.00142732 29.0176L0.00850232 29.0106ZM23.001 4.67154C19.9263 5.92985 16.6256 6.4671 14.4557 8.32628C8.46898 13.4585 5.16821 20.3297 4.15747 28.1411C3.33051 34.5245 7.46536 39.5012 13.8054 40.1727C21.0856 40.9433 27.8568 39.07 33.688 34.9628C38.4236 31.6262 40.9752 26.7414 39.6817 20.5205C38.5862 15.2399 35.8296 10.8641 32.1895 7.11746C29.7581 4.61498 26.5987 3.10219 22.7112 3.39909C22.8738 4.09894 23.001 4.69275 23.001 4.67154Z"
                fill="#443415"
              />
              <path
                d="M25.8074 12.9986C25.0903 13.8949 22.1475 19.2032 21.9981 20.7717C21.1019 19.1285 17.6063 14.3879 16.1722 13.6708C14.7381 12.9538 13.0352 16.1357 13.0352 17.4801L19.0852 22.8232C17.8901 23.4954 13.9315 28.3253 13.9315 28.6838C13.9315 29.132 16.3963 31.5968 17.5166 31.5968C18.4129 31.5968 21.3259 26.3684 21.9981 24.8746C22.4463 26.0696 27.0622 30.78 27.6 30.9593C28.2722 31.1833 31.1852 30.0283 30.9611 28.9079C30.7819 28.0116 25.5833 22.9326 24.2389 21.9616C25.1352 20.8412 29.4374 16.3396 29.6166 15.0847C29.8407 13.5162 26.7037 11.8782 25.8074 12.9986Z"
                fill="#443415"
              />
            </svg>
            <p>Sign in with your Google account to securely access the registration page and begin the setup process.</p>
          </div>
          <div className={styles.content}>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.00850232 29.0106C0.149864 23.7582 2.31264 19.1421 4.45428 14.4977C4.87836 13.5857 4.89254 12.2567 4.58862 11.2812C3.82526 8.81405 5.2106 7.29418 6.70197 5.86622C10.3703 2.33872 15.1413 1.31369 19.8981 0.380569C25.0437 -0.630318 30.0196 0.309876 33.6668 3.95755C36.7767 7.06797 39.2011 10.9772 41.3922 14.844C42.721 17.1839 43.2016 20.0681 43.767 22.7685C44.7566 27.4766 42.4171 31.2091 39.604 34.5598C32.7833 42.6964 23.3897 44.1385 13.558 43.9901C9.72002 43.9335 6.36271 42.1451 3.61322 39.5224C1.18886 37.2179 -0.0763218 33.0541 0.00142732 29.0176L0.00850232 29.0106ZM23.001 4.67154C19.9263 5.92985 16.6256 6.4671 14.4557 8.32628C8.46898 13.4585 5.16821 20.3297 4.15747 28.1411C3.33051 34.5245 7.46536 39.5012 13.8054 40.1727C21.0856 40.9433 27.8568 39.07 33.688 34.9628C38.4236 31.6262 40.9752 26.7414 39.6817 20.5205C38.5862 15.2399 35.8296 10.8641 32.1895 7.11746C29.7581 4.61498 26.5987 3.10219 22.7112 3.39909C22.8738 4.09894 23.001 4.69275 23.001 4.67154Z"
                fill="#443415"
              />
              <path
                d="M25.8074 12.9986C25.0903 13.8949 22.1475 19.2032 21.9981 20.7717C21.1019 19.1285 17.6063 14.3879 16.1722 13.6708C14.7381 12.9538 13.0352 16.1357 13.0352 17.4801L19.0852 22.8232C17.8901 23.4954 13.9315 28.3253 13.9315 28.6838C13.9315 29.132 16.3963 31.5968 17.5166 31.5968C18.4129 31.5968 21.3259 26.3684 21.9981 24.8746C22.4463 26.0696 27.0622 30.78 27.6 30.9593C28.2722 31.1833 31.1852 30.0283 30.9611 28.9079C30.7819 28.0116 25.5833 22.9326 24.2389 21.9616C25.1352 20.8412 29.4374 16.3396 29.6166 15.0847C29.8407 13.5162 26.7037 11.8782 25.8074 12.9986Z"
                fill="#443415"
              />
            </svg>
            <p>Provide your college information along with  other required details to complete your registration.</p>
          </div>
          <div className={styles.content}>
            <svg
              width="59"
              height="59"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.00850232 29.0106C0.149864 23.7582 2.31264 19.1421 4.45428 14.4977C4.87836 13.5857 4.89254 12.2567 4.58862 11.2812C3.82526 8.81405 5.2106 7.29418 6.70197 5.86622C10.3703 2.33872 15.1413 1.31369 19.8981 0.380569C25.0437 -0.630318 30.0196 0.309876 33.6668 3.95755C36.7767 7.06797 39.2011 10.9772 41.3922 14.844C42.721 17.1839 43.2016 20.0681 43.767 22.7685C44.7566 27.4766 42.4171 31.2091 39.604 34.5598C32.7833 42.6964 23.3897 44.1385 13.558 43.9901C9.72002 43.9335 6.36271 42.1451 3.61322 39.5224C1.18886 37.2179 -0.0763218 33.0541 0.00142732 29.0176L0.00850232 29.0106ZM23.001 4.67154C19.9263 5.92985 16.6256 6.4671 14.4557 8.32628C8.46898 13.4585 5.16821 20.3297 4.15747 28.1411C3.33051 34.5245 7.46536 39.5012 13.8054 40.1727C21.0856 40.9433 27.8568 39.07 33.688 34.9628C38.4236 31.6262 40.9752 26.7414 39.6817 20.5205C38.5862 15.2399 35.8296 10.8641 32.1895 7.11746C29.7581 4.61498 26.5987 3.10219 22.7112 3.39909C22.8738 4.09894 23.001 4.69275 23.001 4.67154Z"
                fill="#443415"
              />
              <path
                d="M25.8074 12.9986C25.0903 13.8949 22.1475 19.2032 21.9981 20.7717C21.1019 19.1285 17.6063 14.3879 16.1722 13.6708C14.7381 12.9538 13.0352 16.1357 13.0352 17.4801L19.0852 22.8232C17.8901 23.4954 13.9315 28.3253 13.9315 28.6838C13.9315 29.132 16.3963 31.5968 17.5166 31.5968C18.4129 31.5968 21.3259 26.3684 21.9981 24.8746C22.4463 26.0696 27.0622 30.78 27.6 30.9593C28.2722 31.1833 31.1852 30.0283 30.9611 28.9079C30.7819 28.0116 25.5833 22.9326 24.2389 21.9616C25.1352 20.8412 29.4374 16.3396 29.6166 15.0847C29.8407 13.5162 26.7037 11.8782 25.8074 12.9986Z"
                fill="#443415"
              />
            </svg>
            <p>Complete the registration form with all required details. You'll be able to login through your registered email id when required.</p>
          </div>
          <div className={styles.content}>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.00850232 29.0106C0.149864 23.7582 2.31264 19.1421 4.45428 14.4977C4.87836 13.5857 4.89254 12.2567 4.58862 11.2812C3.82526 8.81405 5.2106 7.29418 6.70197 5.86622C10.3703 2.33872 15.1413 1.31369 19.8981 0.380569C25.0437 -0.630318 30.0196 0.309876 33.6668 3.95755C36.7767 7.06797 39.2011 10.9772 41.3922 14.844C42.721 17.1839 43.2016 20.0681 43.767 22.7685C44.7566 27.4766 42.4171 31.2091 39.604 34.5598C32.7833 42.6964 23.3897 44.1385 13.558 43.9901C9.72002 43.9335 6.36271 42.1451 3.61322 39.5224C1.18886 37.2179 -0.0763218 33.0541 0.00142732 29.0176L0.00850232 29.0106ZM23.001 4.67154C19.9263 5.92985 16.6256 6.4671 14.4557 8.32628C8.46898 13.4585 5.16821 20.3297 4.15747 28.1411C3.33051 34.5245 7.46536 39.5012 13.8054 40.1727C21.0856 40.9433 27.8568 39.07 33.688 34.9628C38.4236 31.6262 40.9752 26.7414 39.6817 20.5205C38.5862 15.2399 35.8296 10.8641 32.1895 7.11746C29.7581 4.61498 26.5987 3.10219 22.7112 3.39909C22.8738 4.09894 23.001 4.69275 23.001 4.67154Z"
                fill="#443415"
              />
              <path
                d="M25.8074 12.9986C25.0903 13.8949 22.1475 19.2032 21.9981 20.7717C21.1019 19.1285 17.6063 14.3879 16.1722 13.6708C14.7381 12.9538 13.0352 16.1357 13.0352 17.4801L19.0852 22.8232C17.8901 23.4954 13.9315 28.3253 13.9315 28.6838C13.9315 29.132 16.3963 31.5968 17.5166 31.5968C18.4129 31.5968 21.3259 26.3684 21.9981 24.8746C22.4463 26.0696 27.0622 30.78 27.6 30.9593C28.2722 31.1833 31.1852 30.0283 30.9611 28.9079C30.7819 28.0116 25.5833 22.9326 24.2389 21.9616C25.1352 20.8412 29.4374 16.3396 29.6166 15.0847C29.8407 13.5162 26.7037 11.8782 25.8074 12.9986Z"
                fill="#443415"
              />
            </svg>
            <p>Sign in with your Google account to securely access the registration page and begin the setup process.</p>
          </div>
          <div className={styles.content}>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.00850232 29.0106C0.149864 23.7582 2.31264 19.1421 4.45428 14.4977C4.87836 13.5857 4.89254 12.2567 4.58862 11.2812C3.82526 8.81405 5.2106 7.29418 6.70197 5.86622C10.3703 2.33872 15.1413 1.31369 19.8981 0.380569C25.0437 -0.630318 30.0196 0.309876 33.6668 3.95755C36.7767 7.06797 39.2011 10.9772 41.3922 14.844C42.721 17.1839 43.2016 20.0681 43.767 22.7685C44.7566 27.4766 42.4171 31.2091 39.604 34.5598C32.7833 42.6964 23.3897 44.1385 13.558 43.9901C9.72002 43.9335 6.36271 42.1451 3.61322 39.5224C1.18886 37.2179 -0.0763218 33.0541 0.00142732 29.0176L0.00850232 29.0106ZM23.001 4.67154C19.9263 5.92985 16.6256 6.4671 14.4557 8.32628C8.46898 13.4585 5.16821 20.3297 4.15747 28.1411C3.33051 34.5245 7.46536 39.5012 13.8054 40.1727C21.0856 40.9433 27.8568 39.07 33.688 34.9628C38.4236 31.6262 40.9752 26.7414 39.6817 20.5205C38.5862 15.2399 35.8296 10.8641 32.1895 7.11746C29.7581 4.61498 26.5987 3.10219 22.7112 3.39909C22.8738 4.09894 23.001 4.69275 23.001 4.67154Z"
                fill="#443415"
              />
              <path
                d="M25.8074 12.9986C25.0903 13.8949 22.1475 19.2032 21.9981 20.7717C21.1019 19.1285 17.6063 14.3879 16.1722 13.6708C14.7381 12.9538 13.0352 16.1357 13.0352 17.4801L19.0852 22.8232C17.8901 23.4954 13.9315 28.3253 13.9315 28.6838C13.9315 29.132 16.3963 31.5968 17.5166 31.5968C18.4129 31.5968 21.3259 26.3684 21.9981 24.8746C22.4463 26.0696 27.0622 30.78 27.6 30.9593C28.2722 31.1833 31.1852 30.0283 30.9611 28.9079C30.7819 28.0116 25.5833 22.9326 24.2389 21.9616C25.1352 20.8412 29.4374 16.3396 29.6166 15.0847C29.8407 13.5162 26.7037 11.8782 25.8074 12.9986Z"
                fill="#443415"
              />
            </svg>
            <p>Sign in with your Google account to securely access the registration page and begin the setup process.</p>
          </div>
          <div className={styles.content}>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.00850232 29.0106C0.149864 23.7582 2.31264 19.1421 4.45428 14.4977C4.87836 13.5857 4.89254 12.2567 4.58862 11.2812C3.82526 8.81405 5.2106 7.29418 6.70197 5.86622C10.3703 2.33872 15.1413 1.31369 19.8981 0.380569C25.0437 -0.630318 30.0196 0.309876 33.6668 3.95755C36.7767 7.06797 39.2011 10.9772 41.3922 14.844C42.721 17.1839 43.2016 20.0681 43.767 22.7685C44.7566 27.4766 42.4171 31.2091 39.604 34.5598C32.7833 42.6964 23.3897 44.1385 13.558 43.9901C9.72002 43.9335 6.36271 42.1451 3.61322 39.5224C1.18886 37.2179 -0.0763218 33.0541 0.00142732 29.0176L0.00850232 29.0106ZM23.001 4.67154C19.9263 5.92985 16.6256 6.4671 14.4557 8.32628C8.46898 13.4585 5.16821 20.3297 4.15747 28.1411C3.33051 34.5245 7.46536 39.5012 13.8054 40.1727C21.0856 40.9433 27.8568 39.07 33.688 34.9628C38.4236 31.6262 40.9752 26.7414 39.6817 20.5205C38.5862 15.2399 35.8296 10.8641 32.1895 7.11746C29.7581 4.61498 26.5987 3.10219 22.7112 3.39909C22.8738 4.09894 23.001 4.69275 23.001 4.67154Z"
                fill="#443415"
              />
              <path
                d="M25.8074 12.9986C25.0903 13.8949 22.1475 19.2032 21.9981 20.7717C21.1019 19.1285 17.6063 14.3879 16.1722 13.6708C14.7381 12.9538 13.0352 16.1357 13.0352 17.4801L19.0852 22.8232C17.8901 23.4954 13.9315 28.3253 13.9315 28.6838C13.9315 29.132 16.3963 31.5968 17.5166 31.5968C18.4129 31.5968 21.3259 26.3684 21.9981 24.8746C22.4463 26.0696 27.0622 30.78 27.6 30.9593C28.2722 31.1833 31.1852 30.0283 30.9611 28.9079C30.7819 28.0116 25.5833 22.9326 24.2389 21.9616C25.1352 20.8412 29.4374 16.3396 29.6166 15.0847C29.8407 13.5162 26.7037 11.8782 25.8074 12.9986Z"
                fill="#443415"
              />
            </svg>
            <p>Sign in with your Google account to securely access the registration page and begin the setup process.</p>
          </div>
        </div>
      </div>
    </>
  );
}
