import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import Login from "../../Component/LogIn/Login";

const LoginPage  = () => {
  return (
    <div>
   <LanguageProvider >
    <Navbar></Navbar>
        <Login></Login>
    <Footer></Footer>
   </LanguageProvider >

    </div>
  );
};

export default LoginPage ;
