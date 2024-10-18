import React from 'react';
import styles from './SignUp.module.css';

const SignUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.logo}>FilmLogo</h2>
        <h3 className={styles.welcome}>Welcome</h3>
        <p className={styles.subtitle}>Start your journey now and learn filmmaking.</p>

        <form className={styles.form}>
          <input type="text" placeholder="Full name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <input type="password" placeholder="Password" className={styles.input} />
          <input type="password" placeholder="Confirm Password" className={styles.input} />

          <div className={styles.dobWrapper}>
            <label>Date of birth</label>
            <div className={styles.dobInputs}>
              <select className={styles.select}><option>Year</option></select>
              <select className={styles.select}><option>Month</option></select>
              <select className={styles.select}><option>Day</option></select>
            </div>
          </div>

          <button className={styles.continueButton}>Continue</button>
        </form>

        <div className={styles.orDivider}>Or</div>

        <div className={styles.socialButtons}>
          <button className={styles.socialButton}>Continue with Google</button>
          <button className={styles.socialButton}>Continue with Apple</button>
          <button className={styles.socialButton}>Continue with Facebook</button>
        </div>

        <p className={styles.signInLink}>Already have an account? <a href="#">Sign in</a></p>
      </div>
    </div>
  );
};

export default SignUp;
