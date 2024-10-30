import React, { useContext, useEffect } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import Login from "../../Component/LogIn/Login";
// import { HomePageContext } from "../../store/HomePageContext";
import { LoginPageContext, LoginPageContextProvider } from "../../store/LoginPageContext";

const LoginPage  = () => {
  const { loginPageContexttDetails, loading, error } = useContext(LoginPageContext);

  useEffect(() => {
    if (loginPageContexttDetails) {
      console.log("Login Screen Details:", loginPageContexttDetails);
      
    }
  }, [loginPageContexttDetails]);
  return (
    <div>
   <LanguageProvider >
    <LoginPageContextProvider>
    <Navbar></Navbar>
        <Login></Login>
     
    <Footer></Footer>
    </LoginPageContextProvider>
   </LanguageProvider >

    </div>
  );
};

export default LoginPage ;
