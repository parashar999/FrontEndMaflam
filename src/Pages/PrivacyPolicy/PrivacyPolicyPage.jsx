import React, { useContext, useEffect } from "react";
// import Navbar from "../../Component/Navbar/Navbar";
// import Footer from "../../Component/Footer/Footer";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import {
  HomePageContext,
  HomePageProvider,
} from "../../store/HomePageContext.jsx";
import {
  PrivacyPolicyContext,
  PrivacyPolicyProvider,
} from "../../store/PrivacyPolicy.jsx";
import PrivacyPolicy from "../../Component/PrivacyPolicy/PrivacyPolicy.jsx";
import TermsAndConditions from "../../Component/TermsAndCondition/TermsAndConditions.jsx";
import Navbar from "../../Component/Navbar/Navbar.jsx";
import Footer from "../../Component/Footer/Footer.jsx";
// import { AboutusPageContext, AboutusPageProvider } from "../../store/AboutUsPageContext.jsx";
// import { TermsConditionProvider , TermsConditionContext } from "../../store/TermsConditionContext.jsx";
// import { PrivacyPolicyContext, PrivacyPolicyProvider } from "../../store/PrivacyPolicy.jsx";

const PrivacyPolicyPage = () => {
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
    PrivacyPolicyDetails,
    loading: aboutLoading,
    error: aboutError,
  } = useContext(PrivacyPolicyContext);

  // useEffect(() => {
  //   if (PrivacyPolicyDetails) {
  //     console.log("TermsCondition Screen Details:", PrivacyPolicyDetails);
  //   }
  // }, [PrivacyPolicyDetails]);

  return (
    <div>
      <LanguageProvider>
        <HomePageProvider>
          <PrivacyPolicyProvider>
            {/* <TermsAndConditions></TermsAndConditions> */}
            <Navbar />
            <PrivacyPolicy></PrivacyPolicy>
            <Footer />
          </PrivacyPolicyProvider>
        </HomePageProvider>
      </LanguageProvider>
    </div>
  );
};

export default PrivacyPolicyPage;
