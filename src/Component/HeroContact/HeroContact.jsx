import React from "react";
import styles from "./HeroContact.module.css";
import { assests } from "../../assets/assests.js";

const HeroContact = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.description}>
          We are delighted to assist you by answering your <br />
          questions and providing all the support you need.
        </p>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.cardText}>Contact Information</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardText}>
              Apply to Become Part of the world of malfam
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardText}>
              Apply for the training program of maflam
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContact;
