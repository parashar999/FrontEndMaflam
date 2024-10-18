import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Ensure axios is imported
import styles from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();

  // State management for the form fields
  const [username, setUsername] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dateofBirth, setDateofBirth] = useState("");

  const [error, setError] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://prominenttrades.in/maflam/sign-up?lang=1",
        {
          username,
          emailId,
          password,
          confirmPassword,
          phone,
          dateofBirth,
        }
      );

      const data = response.data;
      console.log("API Response:", data);

      if (data) {
        alert("Sign Up Successfully");
        setPopupMessage("Sign Up Successfully");
        setUsername("");
        setEmailId("");
        setPassword("");
        setConfirmPassword("");
        setPhone("");
        setDateofBirth("");
        navigate("/login");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      console.error("Sign Up Error:", err);
      setError("Sign Up failed. Please check your details.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.logo}>FilmLogo</h2>
        <h3 className={styles.welcome}>Welcome</h3>
        <p className={styles.subtitle}>
          Start your journey now and learn filmmaking.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full name"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className={styles.input}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone"
            className={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div className={styles.dobWrapper}>
            <label>Date of birth</label>
            <input
              type="date"
              className={styles.input}
              value={dateofBirth}
              onChange={(e) => setDateofBirth(e.target.value)}
            />
          </div>

          <button type="submit" className={styles.continueButton}>
            Continue
          </button>
        </form>

        {error && <p className={styles.errorMessage}>{error}</p>}

        <div className={styles.orDivider}>Or</div>

        <div className={styles.socialButtons}>
          <button className={styles.socialButton}>Continue with Google</button>
          <button className={styles.socialButton}>Continue with Apple</button>
          <button className={styles.socialButton}>
            Continue with Facebook
          </button>
        </div>

        <p className={styles.signInLink}>
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
