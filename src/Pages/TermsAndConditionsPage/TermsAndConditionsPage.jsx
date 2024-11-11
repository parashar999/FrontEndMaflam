import React, { useContext, useEffect } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import TermsAndConditions from "../../Component/TermsAndCondition/TermsAndConditions";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import {
  HomePageContext,
  HomePageProvider,
} from "../../store/HomePageContext.jsx";
import {
  AboutusPageContext,
  AboutusPageProvider,
} from "../../store/AboutUsPageContext.jsx";
import {
  TermsConditionProvider,
  TermsConditionContext,
} from "../../store/TermsConditionContext.jsx";

const TermsAndConditionsPage = () => {
  const {
    homeScreenDetails,
    loading: homeLoading,
    error: homeError,
  } = useContext(HomePageContext);

  // useEffect(() => {
  //   if (homeScreenDetails) {
  //     console.log("Home Screen Details:", homeScreenDetails);
  //   }
  // }, [homeScreenDetails]);

  const {
    termsConditionScreenDetails,
    loading: aboutLoading,
    error: aboutError,
  } = useContext(TermsConditionContext);

  useEffect(() => {
    if (termsConditionScreenDetails) {
      console.log(
        "TermsCondition Screen Details:",
        termsConditionScreenDetails
      );
    }
  }, [termsConditionScreenDetails]);

  return (
    <div>
      <LanguageProvider>
        <HomePageProvider>
          <TermsConditionProvider>
            <Navbar></Navbar>
            <TermsAndConditions></TermsAndConditions>
            <Footer></Footer>
          </TermsConditionProvider>
        </HomePageProvider>
      </LanguageProvider>
    </div>
  );
};

export default TermsAndConditionsPage;
