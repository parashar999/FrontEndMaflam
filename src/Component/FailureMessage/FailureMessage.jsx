
import React from 'react';
import styles from './FailureMessage.module.css';

function FailureMessage() {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.secondcontainer}> 
        <header className={styles.header}>
          <h1> <b>i </b> </h1>
        </header>
        <form className={styles.form}>
            <h2>Sorry, it seems there was an error processing your request.</h2>
            <p>Please check the information you entered and try the payment again. If the issue persists, feel free to reach out to the Maflam's support team.</p>
        </form>
      </div>
    </div>
  );
}

export default FailureMessage;

