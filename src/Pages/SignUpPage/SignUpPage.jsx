import React, { useContext, useEffect } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import SignUp from "../../Component/SignUp/SignUp";
import { SingupPageContext, SingupPageContextProvider } from "../../store/SingupPageContext";

const SignUpPage = () => {


  // const{ singupPageContextDetails, loading, error } = useContext(SingupPageContext);
  const{ singupPageContextDetails, loading, error ,}= useContext(SingupPageContext);

  useEffect(() => {
    if (singupPageContextDetails) {
      console.log("Home Screen Details:", singupPageContextDetails);
      
    }
    
  }, [singupPageContextDetails]);
  return (
    <div>
      <LanguageProvider>
        <SingupPageContextProvider>
        <Navbar ></Navbar>
        <SignUp></SignUp>
        </SingupPageContextProvider>

        <Footer ></Footer>
      </LanguageProvider>
    </div>
  );
};

export default SignUpPage;
