import React, { useState, useContext } from "react";
import styles from "./Login.module.css";
import auth from "../../Auth/Auth.js";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { assests } from "../../assets/assests.js";
import { LoginPageContext } from "../../store/LoginPageContext.jsx";
import { ToastContainer, toast } from "react-toastify";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";
import "react-toastify/dist/ReactToastify.css";
import { useLastUrl } from "../../store/LastUrlContext.jsx";
import PopUp from "./PopUp.jsx"
import { usePopupContext } from "./PopupContext.jsx";
// Moodle Web Service Configuration
const MOODLE_BASE_URL = 'https://learn.maflam.com'; // Replace with your Moodle URL
const MOODLE_TOKEN = '2a722fa95e3614ef3e297fb6154fd3e8'; // Replace with your Web Service token

// Fetch User ID by Email
async function getUserIdByEmail(email) {
  try {
    const response = await axios.post(`${MOODLE_BASE_URL}/webservice/rest/server.php`, null, {
      params: {
        wstoken: MOODLE_TOKEN,
        wsfunction: 'core_user_get_users',
        moodlewsrestformat: 'json',
        'criteria[0][key]': 'email',
        'criteria[0][value]': email
      }
    });
    const users = response.data.users;
    if (users && users.length > 0) {
      return users[0].id;
    } else {
      console.error(`No user found with email: ${email}`);
      return null;
    }
  } catch (error) {
    console.error('Error fetching user by email:', error.message);
    return null;
  }
}

// Fetch Courses for User
async function getCoursesForUser(userId) {
  try {
    const response = await axios.post(`${MOODLE_BASE_URL}/webservice/rest/server.php`, null, {
      params: {
        wstoken: MOODLE_TOKEN,
        wsfunction: 'core_enrol_get_users_courses',
        moodlewsrestformat: 'json',
        userid: userId,
        returnusercount: 0 // This flag indicates not to return user count, only courses
      }
    });
    return response.data.length; // Returning the course count directly
  } catch (error) {
    console.error('Error fetching courses for user:', error.message);
    return 0; // Return 0 if there is an error
  }
}

// Main Function to Fetch Courses by User Email
async function fetchCourseCountByEmail(email) {
  const userId = await getUserIdByEmail(email);
  if (userId) {
    const courseCount = await getCoursesForUser(userId);
    console.log(`Course count for user with email ${email}: ${courseCount}`);
    return courseCount;
  }
  return 0;
}

const Login = () => {
  const lastUrl = useLastUrl();
  console.log(lastUrl);
  const { popupData, setPopupValues } = usePopupContext();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorComponentVisible, setIsErrorComponentVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  const signupText = language === "ar" ? "انشئ حساب" : "Create an Account";
  const orText = language === "ar" ? "أو" : "or";
  const { loginPageContexttDetails, loading, error: apiError } = useContext(LoginPageContext);

  if (loading) return <p>Loading...</p>;
  if (apiError) return <p>Error loading data</p>;
 
  const loginData = loginPageContexttDetails?.loginData || [];
  const title = loginData[0]?.title || "Together to make your first movie";
  const emailLabel = loginData[1]?.title || "Email or Phone";
  const passwordLabel = loginData[2]?.title || "Password";
  const rememberMeLabel = loginData[3]?.title || "Remember me";
  const loginButtonLabel = loginData[4]?.title || "Log in";
  const reset = loginData[5]?.title || "Forget Password";
  const googleLoginText = loginData[7]?.title || "Continue with Google";
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmail = emailOrPhone.includes("@");
    try {
      const response = await axios.post(
        "http://localhost:3001/maflam/sign-in",
        {
          phone: isEmail ? "" : emailOrPhone,
          emailId: isEmail ? emailOrPhone : "",
          password,
        }
      );

      auth.login(response.data);

      // After login success, fetch course count
      const courseCount = await fetchCourseCountByEmail(emailOrPhone);
      localStorage.setItem("courseCount", courseCount);
      console.log("Course Count:", courseCount);

      setTimeout(() => {

        if (courseCount > 0) {
          setPopupValues("userExists");
          setIsErrorComponentVisible(true);
        } else {
                setPopupValues("NotASubscriber");
                setIsErrorComponentVisible(true);
        }
      }, 500);
 

    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message;
      console.log(errorMessage);
      setPopupValues(errorMessage);
      setIsErrorComponentVisible(true);

    }
  };

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/maflam/sign-in-with-google",
        { googleCredential: credentialResponse.credential }
      );

      toast.success(response.data.message);
      auth.login(response.data);

      // After Google login success, fetch course count
      const courseCount = await fetchCourseCountByEmail(response.data.email);
      console.log("Course Count:", courseCount);

      setTimeout(() => {
        window.location.href = lastUrl;
      }, 2000);
    } catch (error) {
      console.error("Google Login Error:", error);
      const errorMessage = error.response?.data?.message || error.message;
      
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
              {isErrorComponentVisible && (
        <div style={{position:'absolute', top:"0px"}}><PopUp
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
      /></div>
        
      )}
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
              required
              maxLength={40}
              placeholder={emailLabel}
              className={styles.input}
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
            />
            <label style={{ marginTop: '15px' }} htmlFor="password">{passwordLabel}</label>
            <div className={styles.passwordContainer}>
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder={passwordLabel}
                className={styles.input}
                required
                maxLength={20}
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
          <div className={styles.forgotpassword}>
            <p><Link to="/reset"> {reset}</Link></p>
          </div>
          <div className={styles.divider}>
            <hr className={styles.hrLine} />
            <span style={{ fontSize: '22px' }} >{orText}</span>
            <hr className={styles.hrLine} />
          </div>
          <div className={styles.socialLogin}>
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={() => toast.error("Google Login failed.")}
              text={googleLoginText}
            />
          </div>

          <div style={{ width: '100%' }}>
            <a href="/signUp" className={styles.createAccount}>
              {signupText}
            </a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    </>
  );
};

export default Login;
