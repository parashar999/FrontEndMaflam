import React, { useState, useEffect } from 'react';
import styles from './PopUp.module.css';

const PopUp = ({
  titleEN,
  titleAR,
  descriptionEN,
  descriptionAR,
  buttonText1EN,
  buttonText1AR,
  buttonText2EN,
  buttonText2AR,
  linkText1EN,
  linkText1AR,
  linkText2EN,
  linkText2AR,
  direction = 'ltr', // Optional: Direction for text alignment
}) => {
  const [isVisible, setIsVisible] = useState(true); // Internal state to control visibility

  // Optional: Re-show popup if component is re-rendered (ensures fresh state)
  useEffect(() => {
    setIsVisible(true); // Reset visibility on re-render
  }, []);

  // Function to handle close button (reload the page)
  const handleClose = () => {
    window.location.reload(); // Reload the page
  };

  // If not visible, unmount the component
  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        {/* Close Button */}
        {
          titleEN !== "Welcome Back!" ? (
            <button className={styles.closeButton} onClick={handleClose}>
              ×
            </button>
          ) : null
        }

        {/* Title */}
        <h1 className={styles.title}>
          {direction === 'ltr' ? titleEN : titleAR}
        </h1>

        {/* Description */}
        <p style={{ maxWidth: '100%' }} className={styles.description}>
          {direction === 'ltr' ? descriptionEN : descriptionAR}
        </p>

        {/* Buttons */}
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <a
              style={{ textDecoration: 'none', color: 'black' }}
              href={linkText1EN}
            >
              {direction === 'ltr' ? buttonText1EN : buttonText1AR}
            </a>
          </button>

          {titleEN !== 'Sign Up Successful!' ? (
  <button className={styles.button}>
    <a
      style={{ textDecoration: 'none', color: 'black' }}
      href={linkText2EN}
    >
      {direction === 'ltr' ? buttonText2EN : buttonText2AR}
    </a>
  </button>
) : null}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
