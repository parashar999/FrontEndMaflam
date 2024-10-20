import React, { useState } from "react";
import styles from "./Login.module.css";
import auth from "../../Auth/Auth.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { assests } from "../../assets/assests.js";

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState(""); // To handle both email and phone
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the input is an email or phone number
    const isEmail = emailOrPhone.includes("@");

    try {
      const response = await axios.post(
        "https://prominenttrades.in/maflam/sign-in",
        {
          phone: isEmail ? "" : emailOrPhone,
          emailId: isEmail ? emailOrPhone : "",
          password,
        }
      );

      const data = response.data;
      console.log("API Response:", data);

      if (data) {
        auth.login(data);
        setPopupMessage("Login Successfully");
        setEmailOrPhone("");
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

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={styles.container}>
      <div className={styles.Subcontainer}>
        <div className={styles.loginBox}>
          <img
            src={assests.logo1}
            alt="resetlogo"
            className={styles.resetlogo}
          />
          <h1 className={styles.title}>Together to make your first movie</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="emailOrPhone">Email or Phone</label>
            <input
              type="text"
              placeholder="Email or Phone"
              className={styles.input}
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)} // Single field for both
            />
            <label htmlFor="password">Password</label>
            <div className={styles.passwordContainer}>
              <input
                type={isPasswordVisible ? "text" : "password"} // Toggle visibility
                placeholder="Password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className={styles.eyeIcon}
                onClick={togglePasswordVisibility}
                role="button"
                aria-label="Toggle password visibility"
              />
            </div>
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
            <hr className={styles.hrLine} />
            <span>or</span>
            <hr className={styles.hrLine} />
          </div>
          <div className={styles.socialLogin}>
            <button className={styles.socialButton}>
              <img
                src={assests.googlelogin}
                alt="Google"
                className={styles.socialIconImage}
              />
              <span>&nbsp;Continue with Google</span>
            </button>
            <button className={styles.socialButton}>
              <img
                src={assests.applelogin}
                alt="Apple"
                className={styles.socialIconImage}
                id={styles.applelogo}
              />
              <span>&nbsp;&nbsp;&nbsp;&nbsp;Continue with Apple</span>
            </button>
            <button className={styles.socialButton}>
              <img
                src={assests.Facebooklogin}
                alt="Facebook"
                className={styles.socialIconImage}
              />
              <span>Continue with Facebook</span>
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
