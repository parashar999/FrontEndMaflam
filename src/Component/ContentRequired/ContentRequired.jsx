import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ContentRequired.module.css';

const ContentRequired = () => {
  const navigate = useNavigate();

  // Function to handle the "Go Back" button
  const goBackHandler = () => {
    navigate(-1); // This will take the user back to the previous page
  };

  // Function to handle the "Contact Support" button
  const contactSupportHandler = () => {
    navigate('/contact'); // Directs to the contact page (assuming it exists)
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Content Required</h1>
        <p className={styles.description}>
          We are sorry, but the content you are looking for is currently unavailable or missing.
          Please check the link or try again later. If you need help, feel free to contact our support team.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={goBackHandler}>Go Back</button>
          <button className={styles.button} onClick={contactSupportHandler}>Contact Support</button>
        </div>
      </div>
    </div>
  );
};

export default ContentRequired;
