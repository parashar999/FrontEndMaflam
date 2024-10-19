import React from "react";
import styles from "./ContactInformation.module.css";

const ContactInformation = () => {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.heading}>Contact Information</h2>

      <div className={styles.contactSection}>
        <h3>Email</h3>
        <p>
          For inquiries related to Maflam services{" "}
          <a href="#">Info@maflam.com</a>
        </p>
        <p>
          For technical support for the platform{" "}
          <a href="mailto:support@maflam.com">support@maflam.com</a>
        </p>
      </div>

      <div className={styles.contactSection}>
        <h3>Contact Number</h3>
        <p>+966505685495</p>
      </div>

      <div className={styles.contactSection}>
        <h3>Location</h3>
        <p>
          <span className={styles.blueText}>
            Olaya Tower, AlMuhammadiyah District, Jeddah, Saudi Arabia
          </span>
        </p>
      </div>
    </div>
  );
};

export default ContactInformation;
