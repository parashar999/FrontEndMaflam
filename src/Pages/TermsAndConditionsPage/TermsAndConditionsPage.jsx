import React, { useContext, useEffect } from "react";
import {TermsAndCondition } from "../../Component";
import { 
  LanguageProvider,
  HomePageContext,
  HomePageProvider,
  TermsConditionProvider,
  TermsConditionContext,
} from "../../store";

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

  // useEffect(() => {
  //   if (termsConditionScreenDetails) {
  //     console.log(
  //       "TermsCondition Screen Details:",
  //       termsConditionScreenDetails
  //     );
  //   }
  // }, [termsConditionScreenDetails]);

  return (
    <div>
      <LanguageProvider>
        <HomePageProvider>
          <TermsConditionProvider>
            <TermsAndCondition></TermsAndCondition>
          </TermsConditionProvider>
        </HomePageProvider>
      </LanguageProvider>
    </div>
  );
};

export default TermsAndConditionsPage;
