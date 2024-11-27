import React, { useContext, useEffect } from "react";

import { 
  LanguageProvider,
  HomePageContext,
  HomePageProvider,
  PrivacyPolicyContext,
  PrivacyPolicyProvider,
} from "../../store";
import { PrivacyPolicy} from "../../Component";



const PrivacyPolicyPage = () => {
  const {
    homeScreenDetails,
    loading: homeLoading,
    error: homeError,
  } = useContext(HomePageContext);

 

  const {
    PrivacyPolicyDetails,
    loading: aboutLoading,
    error: aboutError,
  } = useContext(PrivacyPolicyContext);



  return (
    <div>
      <LanguageProvider>
        <HomePageProvider>
          <PrivacyPolicyProvider>

            <PrivacyPolicy></PrivacyPolicy>

          </PrivacyPolicyProvider>
        </HomePageProvider>
      </LanguageProvider>
    </div>
  );
};

export default PrivacyPolicyPage;
