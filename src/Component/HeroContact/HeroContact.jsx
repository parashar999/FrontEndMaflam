import React from "react";
import styles from "./HeroContact.module.css";
import { assests } from "../../assets/assests.js";

const HeroContact = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.description}>
          We are happy to hear from you to answer your <br /> inquiries and
          provide any support you may need.
        </p>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <img src={assests.Google} alt="" />
            </div>
            <div className={styles.cardText}>
              Application for the training program at Maflam.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <img src={assests.LinkedIn} alt="" />
            </div>
            <div className={styles.cardText}>
              Application for the employment program at Maflam.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <img src={assests.Email} alt="" />
            </div>
            <div className={styles.cardText}>
              Contact us at Services@maflam.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContact;
