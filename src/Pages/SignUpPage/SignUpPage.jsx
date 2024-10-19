import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import SignUp from "../../Component/SignUp/SignUp";

const SignUpPage = () => {
  return (
    <div>
      <LanguageProvider>
        <Navbar ></Navbar>
        <SignUp></SignUp>

        <Footer ></Footer>
      </LanguageProvider>
    </div>
  );
};

export default SignUpPage;
