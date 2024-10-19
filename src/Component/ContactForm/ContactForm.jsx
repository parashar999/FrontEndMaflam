import { useRef, useState } from "react";
import styles from "./ContactForm.module.css";
import { assests } from "../../assets/assests";

const ContactForm = () => {
  const handleFileUpload = (e, setter) => {
    setter(e.target.files[0]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Apply to Become Part of a Movie World.</h2>
        <form className={styles.contactForm}>
          {/* Full Name */}
          <div className={styles.inputGroup}>
            <label htmlFor="name">
              Full Name <span>*</span>
            </label>
            <input type="text" id="name" placeholder="Full Name" />
          </div>

          {/* Email */}
          <div className={styles.inputGroup}>
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input type="email" id="email" placeholder="adi.abed@gmail.com" />
          </div>

          {/* Phone Number */}
          <div className={styles.inputGroup}>
            <label htmlFor="phone">
              Phone Number <span>*</span>
            </label>
            <input type="text" id="phone" placeholder="966-354-2011" />
          </div>

          {/* Job Role Options */}
          <div className={styles.inputGroup}>
            <label>
              I Would Like to Join the World of Maflam as: <span>*</span>
            </label>
            <div className={styles.radioGroup}>
              <button type="button" className={styles.radioButton}>
                Workshop and course trainer
              </button>
              <button type="button" className={styles.radioButton}>
                Employee
              </button>
              <button type="button" className={styles.radioButton}>
                Maflam show guest
              </button>
            </div>
          </div>

          {/* Current Job Title */}
          <div className={styles.inputGroup}>
            <label htmlFor="jobTitle">
              Current Job Title <span>*</span>
            </label>
            <input type="text" id="jobTitle" placeholder="Answer" />
          </div>

          {/* Years of Experience */}
          <div className={styles.inputGroup}>
            <label>Years of Experience</label>
            <div className={styles.radioGroup}>
              <button type="button" className={styles.radioButton}>
                0 to 2
              </button>
              <button type="button" className={styles.radioButton}>
                3 to 5
              </button>
              <button type="button" className={styles.radioButton}>
                6 to 10
              </button>
              <button type="button" className={styles.radioButton}>
                Over 10
              </button>
            </div>
          </div>

          {/* Cover Letter */}
          <div className={styles.inputGroup}>
            <label htmlFor="coverLetter">
              Cover Letter <span>*</span>
            </label>
            <textarea id="coverLetter" placeholder="Write..." />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="resume">
              Resume <span>*</span>
            </label>
            <input
              type="file"
              id="resume"
              onChange={(e) => handleFileUpload(e, setResume)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="portfolio">Portfolio</label>
            <input
              type="file"
              id="portfolio"
              onChange={(e) => handleFileUpload(e, setPortfolio)}
            />
          </div>

          {/* Submit Button */}
          <button className={styles.submitButton} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
