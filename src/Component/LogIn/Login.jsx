import React, { useState } from "react";
import styles from "./Login.module.css";
import auth from "../../Auth/Auth.js";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Ensure axios is imported

const Login = () => {
  // State management for phone (or email) and password
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://prominenttrades.in/maflam/sign-in",
        {
          phone,
          password,
        }
      );

      const data = response.data;
      console.log("API Response:", data);

      if (data) {
        auth.login(data);
        alert("Login Successfully");
        setPopupMessage("Login Successfully");
        setPhone("");
        setPassword("");
        navigate("/");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.Subcontainer}>
        <div className={styles.loginBox}>
          <h1 className={styles.title}>Together to make your first movie</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Phone or Email"
              className={styles.input}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.rememberMeContainer}>
              <input
                type="checkbox"
                id="rememberMe"
                className={styles.checkbox}
              />
              <label htmlFor="rememberMe" className={styles.checkboxLabel}>
                Remember me
              </label>
            </div>
            <button type="submit" className={styles.loginButton}>
              Log in
            </button>
          </form>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <a href="#" className={styles.forgotPassword}>
            Forgot password?
          </a>
          <div className={styles.divider}>
            <span>or</span>
          </div>
          <div className={styles.socialLogin}>
            <button className={styles.socialButton}>
              Continue with Google
            </button>
            <button className={styles.socialButton}>Continue with Apple</button>
            <button className={styles.socialButton}>
              Continue with Facebook
            </button>
          </div>
          <a href="#" className={styles.createAccount}>
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
