import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import TermsAndConditions from "../../Component/TermsAndCondition/TermsAndConditions"
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";

const TermsAndConditionsPage  = () => {
  
  return (
    <div>
      <LanguageProvider>
      <Navbar></Navbar>
      <TermsAndConditions></TermsAndConditions>
      <Footer></Footer>
      </LanguageProvider>

    </div>
  );
};

export default TermsAndConditionsPage ;
