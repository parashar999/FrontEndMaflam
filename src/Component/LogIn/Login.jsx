import React, { useState, useContext } from "react";
import styles from "./Login.module.css";
import auth from "../../Auth/Auth.js";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Ensure axios is imported
import { assests } from "../../assets/assests.js";
import { LoginPageContext } from "../../store/LoginPageContext.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState(""); // Handle both email and phone
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const {
    loginPageContexttDetails,
    loading,
    error: apiError,
  } = useContext(LoginPageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (apiError) return <p>Error loading data</p>; // Handle error state

  // Extract relevant data from the context API
  const loginData = loginPageContexttDetails?.loginData || [];

  const title = loginData[0]?.title || "Together to make your first movie";
  const emailLabel = loginData[1]?.title || "Email or Phone";
  const passwordLabel = loginData[2]?.title || "Password";
  const rememberMeLabel = loginData[3]?.title || "Remember me";
  const loginButtonLabel = loginData[4]?.title || "Log in";
  const forgotPasswordText = loginData[5]?.title || "Forgot password?";
  const orText = loginData[6]?.title || "or";
  const googleLoginText = loginData[7]?.title || "Continue with Google";
  const appleLoginText = loginData[8]?.title || "Continue with Apple";
  const facebookLoginText = loginData[9]?.title || "Continue with Facebook";
  const createAccountText = loginData[10]?.title || "Create an account";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Determine if the input is an email or a phone number
    const isEmail = emailOrPhone.includes("@");

    try {
      const response = await axios.post(
        "https://backend.maflam.com/maflam/sign-in",
        {
          phone: isEmail ? "" : emailOrPhone, 
          emailId: isEmail ? emailOrPhone : "", 
          password, 
        }
      );
      toast.success(response.data.message);
      const data = response.data;
     
      if (data) {
        auth.login(data);
        setPopupMessage("Login Successfully");
        toast.success(data.message || "Sign Up Successful!");

        setEmailOrPhone("");
        setPassword("");
        navigate("/");
      } else {
        throw new Error("Invalid response from server");
      }
      
    } catch (err) {
      console.error("Login Error:", err);
      const errorMessage = err.response?.data?.message || err.message;
      toast.error(`Error: ${errorMessage}`);
      // setError("Login failed. Please check your credentials.");
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
          <h1 className={styles.title}>{title}</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="email">{emailLabel}</label>
            <input
              type="text"
              placeholder={emailLabel}
              className={styles.input}
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
            />
            <label htmlFor="password">{passwordLabel}</label>
            <div className={styles.passwordContainer}>
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder={passwordLabel}
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
                {rememberMeLabel}
              </label>
            </div>
            <button type="submit" className={styles.loginButton}>
              {loginButtonLabel}
            </button>
          </form>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <a href="#" className={styles.forgotPassword}>
            {forgotPasswordText}
          </a>
          <div className={styles.divider}>
            <hr className={styles.hrLine} />
            <span>{orText}</span>
            <hr className={styles.hrLine} />
          </div>
          <div className={styles.socialLogin}>
            <button className={styles.socialButton}>
              <img
                src={assests.googlelogin}
                alt="Google"
                className={styles.socialIconImage}
              />
              <span>&nbsp;{googleLoginText}</span>
            </button>
            <button className={styles.socialButton}>
              <img
                src={assests.applelogin}
                alt="Apple"
                className={styles.socialIconImage}
                id={styles.applelogo}
              />
              <span>&nbsp;&nbsp;&nbsp;&nbsp;{appleLoginText}</span>
            </button>
            <button className={styles.socialButton}>
              <img
                src={assests.Facebooklogin}
                alt="Facebook"
                className={styles.socialIconImage}
              />
              <span>{facebookLoginText}</span>
            </button>
          </div>
          <a href="#" className={styles.createAccount}>
            {createAccountText}
          </a>
        </div>
      </div>
          <ToastContainer />
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import styles from "./Login.module.css";
// import auth from "../../Auth/Auth.js";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Ensure axios is imported
// import { assests } from "../../assets/assests.js";

// const Login = () => {
//   // State management for phone (or email) and password
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [popupMessage, setPopupMessage] = useState("");
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "https://prominenttrades.in/maflam/sign-in",
//         {
//           phone,
//           password,
//         }
//       );

//       const data = response.data;
//       console.log("API Response:", data);

//       if (data) {
//         auth.login(data);
//         alert("Login Successfully");
//         setPopupMessage("Login Successfully");
//         setPhone("");
//         setPassword("");
//         navigate("/");
//       } else {
//         throw new Error("Invalid response from server");
//       }
//     } catch (err) {
//       console.error("Login Error:", err);
//       setError("Login failed. Please check your credentials.");
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.Subcontainer}>
//         <div className={styles.loginBox}>
//           <img src={assests.logo1} alt="resetlogo" className={styles.resetlogo} />
//           <h1 className={styles.title}>Together to make your first movie</h1>
//           <form className={styles.form} onSubmit={handleSubmit}>
//             <label htmlFor="email">Email</label>
//             <input
//               type="text"
//               placeholder="Email"
//               className={styles.input}
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             <label htmlFor="password">Password</label>
//             <div className={styles.passwordContainer}> {/* Wrap password input and eye icon */}
//               <input
//                 type={isPasswordVisible ? "text" : "password"} // Toggle visibility
//                 placeholder="Password"
//                 className={styles.input}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <div
//                 className={styles.eyeIcon}
//                 onClick={togglePasswordVisibility}
//                 role="button"
//                 aria-label="Toggle password visibility"
//               />
//             </div>
//             <div className={styles.rememberMeContainer}>
//               <input
//                 type="checkbox"
//                 id="rememberMe"
//                 className={styles.checkbox}
//               />
//               <label htmlFor="rememberMe" className={styles.checkboxLabel}>
//                 Remember me
//               </label>
//             </div>
//             <button type="submit" className={styles.loginButton}>
//               Log in
//             </button>
//           </form>
//           {error && <p className={styles.errorMessage}>{error}</p>}
//           <a href="#" className={styles.forgotPassword}>
//             Forgot password?
//           </a>
//           <div className={styles.divider}>
//             <hr className={styles.hrLine} />
//             <span>or</span>
//             <hr className={styles.hrLine} />
//           </div>
//           <div className={styles.socialLogin}>
//             <button className={styles.socialButton}>
//               <img src={assests.googlelogin} alt="Google" className={styles.socialIconImage} />
//               <span>&nbsp;Continue with Google</span>
//             </button>
//             <button className={styles.socialButton}>
//               <img src={assests.applelogin} alt="Apple" className={styles.socialIconImage} id={styles.applelogo} />
//               <span>&nbsp;&nbsp;&nbsp;&nbsp;Continue with Apple</span>
//             </button>
//             <button className={styles.socialButton}>
//               <img src={assests.Facebooklogin} alt="Facebook" className={styles.socialIconImage} />
//               <span>Continue with Facebook</span>
//             </button>
//           </div>
//           <a href="#" className={styles.createAccount}>
//             Create an account
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import styles from "./Login.module.css";
// import auth from "../../Auth/Auth.js";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Ensure axios is imported
// import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
// import { assests } from "../../assets/assests.js";

// const Login = () => {
//   // State management for phone (or email) and password
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [popupMessage, setPopupMessage] = useState("");
//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "https://prominenttrades.in/maflam/sign-in",
//         {
//           phone,
//           password,
//         }
//       );

//       const data = response.data;
//       console.log("API Response:", data);

//       if (data) {
//         auth.login(data);
//         alert("Login Successfully");
//         setPopupMessage("Login Successfully");
//         setPhone("");
//         setPassword("");
//         navigate("/");
//       } else {
//         throw new Error("Invalid response from server");
//       }
//     } catch (err) {
//       console.error("Login Error:", err);
//       setError("Login failed. Please check your credentials.");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.Subcontainer}>
//         <div className={styles.loginBox}>
//         <img src={assests.logo1} alt="resetlogo" className={styles.resetlogo} />

//           <h1 className={styles.title}>Together to make your first movie</h1>
//           <form className={styles.form} onSubmit={handleSubmit}>
//           <label htmlFor="email">Email</label>

//             <input
//               type="text"
//               placeholder="Email"
//               className={styles.input}
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//              <label htmlFor="password">Password</label>

//             <input
//               type="password"
//               placeholder="Password"
//               className={styles.input}
//               value={password}

//              id={styles.eyesymbol}

//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <div className={styles.rememberMeContainer}>
//               <input
//                 type="checkbox"
//                 id="rememberMe"
//                 className={styles.checkbox}
//               />
//               <label htmlFor="rememberMe" className={styles.checkboxLabel}>
//                 Remember me
//               </label>
//             </div>
//             <button type="submit" className={styles.loginButton}>
//               Log in
//             </button>
//           </form>
//           {error && <p className={styles.errorMessage}>{error}</p>}
//           <a href="#" className={styles.forgotPassword}>
//             Forgot password?
//           </a>

//           <div className={styles.divider}>
//                 <hr className={styles.hrLine} />
//                      <span>or</span>
//                  <hr className={styles.hrLine} />
//                  </div>

//                  <div className={styles.socialLogin}>
//                      <button className={styles.socialButton}>
//                         <img src={assests.googlelogin} alt="Google" className={styles.socialIconImage} />
//                         <span>&nbsp;Continue with Google</span>
//                      </button>
//                    <button className={styles.socialButton}>
//                      <img src={assests.applelogin} alt="Apple" className={styles.socialIconImage} id={styles.applelogo} />
//                        <span>&nbsp;&nbsp;&nbsp;&nbsp;Continue with Apple</span>
//                    </button>
//                    <button className={styles.socialButton}>
//                     <img src={assests.Facebooklogin} alt="Facebook" className={styles.socialIconImage} />
//                      <span>Continue with Facebook</span>
//                        </button>
//                        </div>
//           <a href="#" className={styles.createAccount}>
//             Create an account
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
