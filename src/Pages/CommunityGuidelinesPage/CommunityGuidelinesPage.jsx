import React, { useContext, useEffect } from "react";
import {  CommunityGuidelines} from "../../Component";
import { 
  LanguageProvider,
  HomePageContext, 
  HomePageProvider, 
  CommunityGuidelinesContext, 
  CommunityGuidelinesProvider 
} from "../../store";



const CommunityGuidelinesPage = () => {
  const {
    homeScreenDetails,
    loading: homeLoading,
    error: homeError,
  } = useContext(HomePageContext);

  const {
    CommunityGuidelinesDetails,
    loading: aboutLoading,
    error: aboutError,
  } = useContext(CommunityGuidelinesContext);

  useEffect(() => {
    if (CommunityGuidelinesDetails) {
      console.log("Purchase Screen Details:", CommunityGuidelinesDetails);
    }
  }, [CommunityGuidelinesDetails]);

  return (
    <div>
      <LanguageProvider>
        <HomePageProvider>
          <CommunityGuidelinesProvider>
            <CommunityGuidelines></CommunityGuidelines>
          </CommunityGuidelinesProvider>
        </HomePageProvider>
      </LanguageProvider>
    </div>
  );
};

export default CommunityGuidelinesPage;
