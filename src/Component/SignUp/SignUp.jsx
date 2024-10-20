

  


import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Ensure axios is imported
import styles from "./SignUp.module.css";
import { assests } from "../../assets/assests.js";
import { SingupPageContext } from "../../store/SingupPageContext.jsx";

const SignUp = () => {
  const { singupPageContextDetails, loading, error: apiError } = useContext(SingupPageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (apiError) return <p>Error loading data</p>; // Handle error state

  // Extract relevant data from the context API
  const signUpData = singupPageContextDetails?.signUpData || [];

  const welcomeTitle = signUpData[0]?.title || "Welcome";
  const subtitleText = signUpData[0]?.description || "Start your journey now and learn filmmaking.";
  const fullNameLabel = signUpData[1]?.title || "Full name";
  const emailLabel = signUpData[2]?.title || "Email";
  const passwordLabel = signUpData[3]?.title || "Password";
  const confirmPasswordLabel = signUpData[4]?.title || "Confirm Password";
  const dobLabel = signUpData[5]?.title || "Date of birth";
  const continueButtonLabel = signUpData[6]?.title || "Continue";
  const orText = signUpData[7]?.title || "or";
  const googleLoginText = signUpData[8]?.title || "Continue with Google";
  const appleLoginText = signUpData[9]?.title || "Continue with Apple";
  const facebookLoginText = signUpData[10]?.title || "Continue with Facebook";
  const signInPrompt = signUpData[11]?.title || "Already have an account?";
  const signInText = signUpData[11]?.signInText || "Sign in";

  const navigate = useNavigate();

  // State management for the form fields
  const [username, setUsername] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dateofBirth, setDateofBirth] = useState({ day: '', month: '', year: '' });

  const [error, setError] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format dateofBirth for API submission
    const formattedDOB = `${dateofBirth.year}-${dateofBirth.month.padStart(2, '0')}-${dateofBirth.day.padStart(2, '0')}`;

    try {
      const response = await axios.post(
        "https://prominenttrades.in/maflam/sign-up?lang=1",
        {
          username,
          emailId,
          password,
          confirmPassword,
          phone,
          dateofBirth: formattedDOB, // Use the formatted date string
        }
      );

      const data = response.data;
      if (data) {
        alert("Sign Up Successfully");
        setPopupMessage("Sign Up Successfully");
        setUsername("");
        setEmailId("");
        setPassword("");
        setConfirmPassword("");
        setPhone("");
        setDateofBirth({ day: '', month: '', year: '' }); // Reset date fields
        navigate("/login");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      console.error("Sign Up Error:", err);
      setError("Sign Up failed. Please check your details.");
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleDOBChange = (e) => {
    const { name, value } = e.target;
    setDateofBirth((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <img src={assests.logo1} alt="resetlogo" className={styles.resetlogo} />
        <h3 className={styles.welcome}>{welcomeTitle}</h3>
        <p className={styles.subtitle}>{subtitleText}</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="Full Name">{fullNameLabel}</label>
          <input
            type="text"
            placeholder={fullNameLabel}
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="Email">{emailLabel}</label>
          <input
            type="email"
            placeholder={emailLabel}
            className={styles.input}
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
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

          <label htmlFor="Confirm Password">{confirmPasswordLabel}</label>
          <div className={styles.passwordContainer}>
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder={confirmPasswordLabel}
              className={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div
              className={styles.eyeIcon}
              onClick={togglePasswordVisibility}
              role="button"
              aria-label="Toggle password visibility"
            />
          </div>

          <label htmlFor="Phone">Phone</label>
          <input
            type="text"
            placeholder="Phone"
            className={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div className={styles.dobWrapper}>
            <label htmlFor="dob">{dobLabel}</label>
            <div className={styles.dobInputs}>
              <select
                name="day"
                value={dateofBirth.day}
                onChange={handleDOBChange}
                className={styles.dobSelect}
              >
                <option value="">Day</option>
                {[...Array(31)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
              <select
                name="month"
                value={dateofBirth.month}
                onChange={handleDOBChange}
                className={styles.dobSelect}
              >
                <option value="">Month</option>
                {[...Array(12)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
              <select
                name="year"
                value={dateofBirth.year}
                onChange={handleDOBChange}
                className={styles.dobSelect}
              >
                <option value="">Year</option>
                {Array.from({ length: 120 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className={styles.continueButton}>
            {continueButtonLabel}
          </button>
        </form>

        {error && <p className={styles.errorMessage}>{error}</p>}

        <div className={styles.divider}>
          <hr className={styles.hrLine} />
          <span>{orText}</span>
          <hr className={styles.hrLine} />
        </div>

        <div className={styles.socialLogin}>
          <button className={styles.socialButton}>
            <img src={assests.googlelogin} alt="Google" className={styles.socialIconImage} />
            <span>&nbsp;{googleLoginText}</span>
          </button>
          <button className={styles.socialButton}>
            <img src={assests.applelogin} alt="Apple" className={styles.socialIconImage} id={styles.applelogo} />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;{appleLoginText}</span>
          </button>
          <button className={styles.socialButton}>
            <img src={assests.Facebooklogin} alt="Facebook" className={styles.socialIconImage} />
            <span>&nbsp;{facebookLoginText}</span>
          </button>
        </div>

        <div className={styles.signupPrompt}>
          <span>{signInPrompt}</span>
          <a href="/login">{signInText}</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;







// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Ensure axios is imported
// import styles from "./SignUp.module.css";
// import { assests } from "../../assets/assests.js";

// const SignUp = () => {
//   const navigate = useNavigate();

//   // State management for the form fields
//   const [username, setUsername] = useState("");
//   const [emailId, setEmailId] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [dateofBirth, setDateofBirth] = useState({ day: '', month: '', year: '' });

//   const [error, setError] = useState("");
//   const [popupMessage, setPopupMessage] = useState("");

//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Format dateofBirth for API submission
//     const formattedDOB = `${dateofBirth.year}-${dateofBirth.month.padStart(2, '0')}-${dateofBirth.day.padStart(2, '0')}`;

//     try {
//       const response = await axios.post(
//         "https://prominenttrades.in/maflam/sign-up?lang=1",
//         {
//           username,
//           emailId,
//           password,
//           confirmPassword,
//           phone,
//           dateofBirth: formattedDOB, // Use the formatted date string
//         }
//       );

//       const data = response.data;
//       console.log("API Response:", data);

//       if (data) {
//         alert("Sign Up Successfully");
//         setPopupMessage("Sign Up Successfully");
//         setUsername("");
//         setEmailId("");
//         setPassword("");
//         setConfirmPassword("");
//         setPhone("");
//         setDateofBirth({ day: '', month: '', year: '' }); // Reset date fields
//         navigate("/login");
//       } else {
//         throw new Error("Invalid response from server");
//       }
//     } catch (err) {
//       console.error("Sign Up Error:", err);
//       setError("Sign Up failed. Please check your details.");
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//   const handleDOBChange = (e) => {
//     const { name, value } = e.target;
//     setDateofBirth((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.formWrapper}>
//       <img src={assests.logo1} alt="resetlogo" className={styles.resetlogo} />
//       <h3 className={styles.welcome}>Welcome</h3>
//         <p className={styles.subtitle}>
//           Start your journey now and learn filmmaking.
//         </p>

//         <form className={styles.form} onSubmit={handleSubmit}>
//           <label htmlFor="Full Name">Full Name</label>
//           <input
//             type="text"
//             placeholder="Full name"
//             className={styles.input}
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />

//           <label htmlFor="Email">Email</label>
//           <input
//             type="email"
//             placeholder="Email"
//             className={styles.input}
//             value={emailId}
//             onChange={(e) => setEmailId(e.target.value)}
//           />

//           <label htmlFor="password">Password</label>
//           <div className={styles.passwordContainer}>
//             <input
//               type={isPasswordVisible ? "text" : "password"} // Toggle visibility
//               placeholder="Password"
//               className={styles.input}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <div
//               className={styles.eyeIcon}
//               onClick={togglePasswordVisibility}
//               role="button"
//               aria-label="Toggle password visibility"
//             />
//           </div>

//           <label htmlFor="Confirm Password">Confirm Password</label>
//           <div className={styles.passwordContainer}>
//             <input
//               type={isPasswordVisible ? "text" : "password"} // Toggle visibility
//               placeholder="Confirm Password"
//               className={styles.input}
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             <div
//               className={styles.eyeIcon}
//               onClick={togglePasswordVisibility}
//               role="button"
//               aria-label="Toggle password visibility"
//             />
//           </div>

//           <label htmlFor="Phone">Phone</label>
//           <input
//             type="text"
//             placeholder="Phone"
//             className={styles.input}
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />

//           <div className={styles.dobWrapper}>
//             <label htmlFor="dob">Date of Birth</label>
//             <div className={styles.dobInputs}>
//               <select
//                 name="day"
//                 value={dateofBirth.day}
//                 onChange={handleDOBChange}
//                 className={styles.dobSelect}
//               >
//                 <option value="">Day</option>
//                 {[...Array(31)].map((_, index) => (
//                   <option key={index + 1} value={index + 1}>
//                     {index + 1}
//                   </option>
//                 ))}
//               </select>
//               <select
//                 name="month"
//                 value={dateofBirth.month}
//                 onChange={handleDOBChange}
//                 className={styles.dobSelect}
//               >
//                 <option value="">Month</option>
//                 {[...Array(12)].map((_, index) => (
//                   <option key={index + 1} value={index + 1}>
//                     {index + 1}
//                   </option>
//                 ))}
//               </select>
//               <select
//                 name="year"
//                 value={dateofBirth.year}
//                 onChange={handleDOBChange}
//                 className={styles.dobSelect}
//               >
//                 <option value="">Year</option>
//                 {Array.from({ length: 120 }, (_, i) => new Date().getFullYear() - i).map((year) => (
//                   <option key={year} value={year}>
//                     {year}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <button type="submit" className={styles.continueButton}>
//             Continue
//           </button>
//         </form>

//         {error && <p className={styles.errorMessage}>{error}</p>}

//         <div className={styles.divider}>
//           <hr className={styles.hrLine} />
//           <span>or</span>
//           <hr className={styles.hrLine} />
//         </div>

//         <div className={styles.socialLogin}>
//           <button className={styles.socialButton}>
//             <img src={assests.googlelogin} alt="Google" className={styles.socialIconImage} />
//             <span>&nbsp;Continue with Google</span>
//           </button>
//           <button className={styles.socialButton}>
//             <img src={assests.applelogin} alt="Apple" className={styles.socialIconImage} id={styles.applelogo} />
//             <span>&nbsp;&nbsp;&nbsp;&nbsp;Continue with Apple</span>
//           </button>
//           <button className={styles.socialButton}>
//             <img src={assests.Facebooklogin} alt="Facebook" className={styles.socialIconImage} />
//             <span>Continue with Facebook</span>
//           </button>
//         </div>

//         <p className={styles.signInLink}>
//           Already have an account? <a href="/login">Sign in</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
  





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Ensure axios is imported
// import styles from "./SignUp.module.css";
// import { assests } from "../../assets/assests.js";


// const SignUp = () => {
//   const navigate = useNavigate();

//   // State management for the form fields
//   const [username, setUsername] = useState("");
//   const [emailId, setEmailId] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [dateofBirth, setDateofBirth] = useState("");

//   const [error, setError] = useState("");
//   const [popupMessage, setPopupMessage] = useState("");

//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);


//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "https://prominenttrades.in/maflam/sign-up?lang=1",
//         {
//           username,
//           emailId,
//           password,
//           confirmPassword,
//           phone,
//           dateofBirth,
//         }
//       );

//       const data = response.data;
//       console.log("API Response:", data);

//       if (data) {
//         alert("Sign Up Successfully");
//         setPopupMessage("Sign Up Successfully");
//         setUsername("");
//         setEmailId("");
//         setPassword("");
//         setConfirmPassword("");
//         setPhone("");
//         setDateofBirth("");
//         navigate("/login");
//       } else {
//         throw new Error("Invalid response from server");
//       }
//     } catch (err) {
//       console.error("Sign Up Error:", err);
//       setError("Sign Up failed. Please check your details.");
//     }
//   };
//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };


//   return (
//     <div className={styles.container}>
//       <div className={styles.formWrapper}>
//         <h2 className={styles.logo}>FilmLogo</h2>
//         <h3 className={styles.welcome}>Welcome</h3>
//         <p className={styles.subtitle}>
//           Start your journey now and learn filmmaking.
//         </p>

//         <form className={styles.form} onSubmit={handleSubmit}>
//         <label htmlFor="Full Name">Full Name</label>

//           <input
//             type="text"
//             placeholder="Full name"
//             className={styles.input}
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//          <label htmlFor="Email">Email</label>

//           <input
//             type="email"
//             placeholder="Email"
//             className={styles.input}
//             value={emailId}
//             onChange={(e) => setEmailId(e.target.value)}
//           />
//          <label htmlFor="password">Password</label>
//          <div className={styles.passwordContainer}> {/* Wrap password input and eye icon */}
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

          
//             <label htmlFor="Confirm Password">Confirm Password</label>
//             <div className={styles.passwordContainer}> {/* Wrap password input and eye icon */}
//               <input
//                 type={isPasswordVisible ? "text" : "password"} // Toggle visibility
//                 placeholder="Confirm Password"
//                 className={styles.input}
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//               <div 
//                 className={styles.eyeIcon} 
//                 onClick={togglePasswordVisibility} 
//                 role="button" 
//                 aria-label="Toggle password visibility"
//               />
//             </div>

          

//            <label htmlFor="Phone">Phone</label>
//           <input
//             type="text"
//             placeholder="Phone"
//             className={styles.input}
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />


//           <div className={styles.dobWrapper}>
//             <label htmlFor="Date Of Birth"> Date of birth</label>
//             <input
//               type="date"
//               className={styles.input}
//               value={dateofBirth}
//               onChange={(e) => setDateofBirth(e.target.value)}
//             />
//           </div>

//           <button type="submit" className={styles.continueButton}>
//             Continue
//           </button>
//         </form>

//         {error && <p className={styles.errorMessage}>{error}</p>}

//         <div className={styles.divider}>
//             <hr className={styles.hrLine} />
//             <span>or</span>
//             <hr className={styles.hrLine} />
//           </div>
       
//          <div className={styles.socialLogin}>
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

//         <p className={styles.signInLink}>
//           Already have an account? <a href="/login">Sign in</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;




