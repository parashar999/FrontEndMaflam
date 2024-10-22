
import React from 'react';
import styles from './SuccessMessage.module.css';
import successtickmark from "../../assets/successtickmark.png";


function SuccessMessage() {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.secondcontainer}> 
        <header className={styles.header}>
        <img src={successtickmark} alt="successmark" className={styles.resetlogo} />
        </header>
        <form className={styles.form}>
            <h2>You have successfully enrolled in the course.</h2>
            <p>Welcome to the Maflam’s family!</p>
            <p>Get ready to learn and grow with top experts in the film industry.</p>
            <p>Together, we will turn your passion for films into reality.</p>
        </form>
      </div>
    </div>
  );
}

export default SuccessMessage;

