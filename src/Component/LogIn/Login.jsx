import React from 'react';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Subcontainer}>
        <div className={styles.loginBox}>
          <h1 className={styles.title}>Together to make your first movie</h1>
          <form className={styles.form}>
            <input type="email" placeholder="Email" className={styles.input} />
            <input type="password" placeholder="Password" className={styles.input} />
            <div className={styles.rememberMeContainer}>
              <input type="checkbox" id="rememberMe" className={styles.checkbox} />
              <label htmlFor="rememberMe" className={styles.checkboxLabel}>Remember me</label>
            </div>
            <button type="submit" className={styles.loginButton}>Log in</button>
          </form>
          <a href="#" className={styles.forgotPassword}>Forgot password?</a>
          <div className={styles.divider}>
            <span>or</span>
          </div>
          <div className={styles.socialLogin}>
            <button className={styles.socialButton}>Continue with Google</button>
            <button className={styles.socialButton}>Continue with Apple</button>
            <button className={styles.socialButton}>Continue with Facebook</button>
          </div>
          <a href="#" className={styles.createAccount}>Create an account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
