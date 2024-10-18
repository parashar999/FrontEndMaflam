import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import SignUp from "../../Component/SignUp/SignUp";

const SignUpPage = () => {
  return (
    <div>
      <LanguageProvider>
        <SignUp></SignUp>
      </LanguageProvider>
    </div>
  );
};

export default SignUpPage;
