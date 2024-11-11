import React, { useContext, useEffect } from "react";
import Navbar from "../../Component/Navbar/Navbar.jsx";
import Footer from "../../Component/Footer/Footer.jsx";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import {
  HomePageContext,
  HomePageProvider,
} from "../../store/HomePageContext.jsx";
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

  useEffect(() => {
    if (PrivacyPolicyDetails) {
      console.log("TermsCondition Screen Details:", PrivacyPolicyDetails);
    }
  }, [PrivacyPolicyDetails]);

  return (
    <div>
      <LanguageProvider>
        <HomePageProvider>
          {/* <PrivacyPolicyProvider> */}
          <Navbar></Navbar>
          {/* <TermsAndConditions></TermsAndConditions> */}
          {/* <PrivacyPolicy></PrivacyPolicy>
      <Footer></Footer>
         </PrivacyPolicyProvider> */}
        </HomePageProvider>
      </LanguageProvider>
    </div>
  );
};

export default PrivacyPolicyPage;
