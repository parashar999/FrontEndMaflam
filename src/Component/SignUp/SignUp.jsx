import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import stylesSelected from "./SignUp.module.css";
import pweye from "../../assets/PWeye.png"

import { assests } from "../../assets/assests.js";
import { SingupPageContext } from "../../store/SingupPageContext.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";
import PopUp from "../LogIn/PopUp.jsx"
import { usePopupContext } from "./../LogIn/PopupContext.jsx";
const SignUp = () => {
  const { popupData, setPopupValues } = usePopupContext();
  const [isErrorComponentVisible, setIsErrorComponentVisible] = useState(false);
  const { singupPageContextDetails, loading, error: apiError } = useContext(SingupPageContext);
  const { direction, language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const signUpData = singupPageContextDetails?.signUpData || [];
  const welcomeTitle = signUpData[0]?.title || "Welcome";
  const subtitleText = signUpData[0]?.description || "Start your journey now and learn filmmaking.";
  const fullNameLabel = signUpData[1]?.title || "Full name";
  const emailLabel = signUpData[2]?.title || "Email";
  const passwordLabel = signUpData[3]?.title || "Password";
  const confirmPasswordLabel = signUpData[4]?.title || "Confirm Password";
  const year = signUpData[5]?.Category[0] || "";
  const month = signUpData[5]?.Category[1] || "";
  const day = signUpData[5]?.Category[2] || "";
  const dobLabel = signUpData[5]?.title || "Date of birth";
  const continueButtonLabel = signUpData[6]?.title || "Continue";
  const orText = signUpData[7]?.title || "or";
  const googleLoginText = signUpData[8]?.title || "Continue with Google";
  const signInPrompt = signUpData[11]?.title || "Already have an account?";
  const signInText = signUpData[11]?.signInText || "Sign in";
  const [usernameInEng, setUsername] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dateofBirth, setDateofBirth] = useState({ day: '', month: '', year: '' });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
     // Function to get the appropriate message based on the direction (RTL or LTR)
  const getAlertMessage = (messageKey) => {
    const messages = {
      en: {

        fieldsRequired: "All fields are required.",
        fullNameLength: "Full name must be at least 3 characters long.",
        invalidEmail: "Invalid email format.",
        passwordComplexity: "Password must contain at least one letter, one number, and one special character. Password must be at least 8 characters long.",
        passwordsDoNotMatch: "Confirmation Password and Password do not match.",
        confirmSubmission: "Are you sure you want to submit the form?\n\nFull Name: ${usernameInEng}\nEmail: ${emailId}",
      },
      ar: {
        fieldsRequired :"يجب تعبئة جميع الحقول.",
        fullNameLength: "يجب أن يتكون الاسم الكامل من 3 أحرف على الأقل.",
        invalidEmail: "صيغة البريد الإلكتروني غير صحيحة.",
        passwordComplexity:"يجب أن تحتوي كلمة المرور على حرف واحد على الأقل، ورقم واحد، ورمز خاص. يجب أن تتكون كلمة المرور من ٨ أحرف على الأقل.",
        passwordsDoNotMatch: "كلمة المرور وتأكيد كلمة المرور غير متطابقتين.",
        confirmSubmission: "هل أنت متأكد أنك تريد إرسال النموذج؟\n\nالاسم الكامل: ${usernameInEng}\nالبريد الإلكتروني: ${emailId}",
      }
    };

    const isRtl = direction === 'rtl';
    return isRtl ? messages.ar[messageKey] : messages.en[messageKey];
  };
    
    // Validate required fields
   // Validate required fields
   if (!usernameInEng || !emailId || !password || !confirmPassword) {
    alert(getAlertMessage('fieldsRequired'));
    return;
  }

  // Validate full name
  if (usernameInEng.trim().length < 3) {
    alert(getAlertMessage('fullNameLength'));
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailId)) {
    alert(getAlertMessage(`invalidEmail`));
    document.getElementById("emailId")?.focus();
    return;
  }
{/*}
  // Validate password
  if (password.length < 8) {
    alert(getAlertMessage('passwordComplexity'));
    return;
  }
  if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*()\-+]/.test(password)) {
    alert(getAlertMessage('passwordComplexity'));
    return;
  }

  */}

  // Validate confirm password
  if (password !== confirmPassword) {
    alert(getAlertMessage('passwordsDoNotMatch'));
    return;
  }

  const formattedDOB = `${dateofBirth.year}-${dateofBirth.month.padStart(2, '0')}-${dateofBirth.day.padStart(2, '0')}`;



  const message = direction === "rtl" 
  ? `هل أنت متأكد أنك تريد إرسال النموذج؟\n\nالاسم الكامل: ${usernameInEng}\nالبريد الإلكتروني: ${emailId}\nكلمة المرور: ${password}` 
  : `Are you sure you want to submit the form?\n\nFull Name: ${usernameInEng}\nEmail: ${emailId}\nPassword: ${password}`;

const isConfirmed = window.confirm(message);
  if (!isConfirmed) {
    return; // If the user cancels, do not proceed with form submission
  }

    try {
        const response = await axios.post(
            "http://localhost:3001/maflam/sign-up",
            {
                usernameInEng,
                emailId,
                password,
                confirmPassword,
                phone,
                dateofBirth: formattedDOB,
            }
        );
        setPopupValues("Sign Up Successful");
        setIsErrorComponentVisible(true);
        setUsername("");
        setEmailId("");
        setPassword("");
        setConfirmPassword("");
        setPhone("");
        setDateofBirth({ day: '', month: '', year: '' });
    } catch (err) {
        const errorMessage = err.response?.data?.message || err.message;
        setPopupValues(errorMessage);
        setIsErrorComponentVisible(true);
  
    }
};


  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/maflam/sign-up-with-google",
        { googleCredential: credentialResponse.credential }
      );

      toast.success(response.data.message || "Google Sign Up Successful!");
      // navigate("/login");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message;
      toast.error(`Error: ${errorMessage}`);
    }
  };

  const handleGoogleLoginError = () => {
    toast.error("Google login failed. Please try again.");
  };

  const handleDOBChange = (e) => {
    const { name, value } = e.target;
    setDateofBirth((prev) => ({ ...prev, [name]: value }));
  };

  return (
<>
    {isErrorComponentVisible && (
      <div style={{position:'absolute', top:'0px', width:'100%', margin:'auto'}}><PopUp
      titleEN={popupData.titleEN}
      titleAR={popupData.titleAR}
      descriptionEN={popupData.descriptionEN}
      descriptionAR={popupData.descriptionAR}
      buttonText1EN={popupData.buttonText1EN}
      buttonText1AR={popupData.buttonText1AR}
      buttonText2EN={popupData.buttonText2EN}
      buttonText2AR={popupData.buttonText2AR}
      linkText1EN={popupData.linkText1EN}
      linkText1AR={popupData.linkText1AR}
      linkText2EN={popupData.linkText2EN}
      linkText2AR={popupData.linkText2AR}
      button1Link={popupData.button1Link}
      button2Link={popupData.button2Link}
    /></div>     )}

    <div className={stylesSelected.container}>
      <div className={stylesSelected.formWrapper}>
        <img src={assests.logo1} alt="resetlogo" className={stylesSelected.resetlogo} />
        <h3 className={stylesSelected.welcome}>{welcomeTitle}</h3>
        <p className={stylesSelected.subtitle}>{subtitleText}</p>

        <form className={stylesSelected.form} onSubmit={handleSubmit}>
  <label >{fullNameLabel}</label>
  <input
    id="usernameInEng"
    type="text"
    maxLength={30}
    placeholder={fullNameLabel}
    className={stylesSelected.input}
    value={usernameInEng}
    onChange={(e) => setUsername(e.target.value)}
  />

  <label htmlFor="emailId">{emailLabel}</label>
  <input
    id="emailId"
    type="text"
    maxLength={40}
    placeholder={emailLabel}
    className={stylesSelected.input}
    value={emailId}
    onChange={(e) => setEmailId(e.target.value)}
  />

  <label htmlFor="password">{passwordLabel}</label>
  <div className={stylesSelected.passwordContainer}>
    <input
      id="password"
      type={isPasswordVisible ? "text" : "password"}
      placeholder={passwordLabel}

      maxLength={20}
      className={stylesSelected.input}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button
      type="button"
      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
      className={stylesSelected.visibilityToggle}
      aria-label={isPasswordVisible ? "Hide password" : "Show password"}
    >
      <div style={{ height: "100%", width: "36px" }}>
        <img src={pweye} style={{ height: "26px", position: "relative" }} alt="Toggle visibility" />
      </div>
    </button>
  </div>

  <label htmlFor="confirmPassword">{confirmPasswordLabel}</label>
  <div className={stylesSelected.passwordContainer}>
    <input
      id="confirmPassword"
      type={isPasswordVisible ? "text" : "password"}
      placeholder={confirmPasswordLabel}
      className={stylesSelected.input}
      value={confirmPassword}
      required
      onChange={(e) => setConfirmPassword(e.target.value)}
    />
    <button
      type="button"
      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
      className={stylesSelected.visibilityToggle}
      aria-label={isPasswordVisible ? "Hide password" : "Show password"}
    >
      <div style={{ height: "100%", width: "36px" }}>
        <img src={pweye} style={{ height: "26px", position: "relative" }} alt="Toggle visibility" />
      </div>
    </button>
  </div>

  <button type="submit" className={stylesSelected.continueButton}>
    {continueButtonLabel}
  </button>
</form>

        <div className={stylesSelected.divider}>
          <hr className={stylesSelected.hrLine} />
          <span>{orText}</span>
          <hr className={stylesSelected.hrLine} />
        </div>

         <div className={stylesSelected.socialLogin}>
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
            render={({ onClick }) => (
              <button onClick={onClick} className={stylesSelected.socialButton}>
                <img src={assests.googlelogin} alt="Google"  className={stylesSelected.socialIconImage} />
                <span style={{width:'100%', textAlign:'center'}}>  {googleLoginText} </span>
              </button>
            )}
          />
        </div> 
        <div className={stylesSelected.signInLink}>
          <span>{signInPrompt}</span>
          &nbsp;
          <a href="/login">{signInText}</a>  
        </div>
      </div>
      <ToastContainer />
    </div>
    </>
  );
};

export default SignUp;

 