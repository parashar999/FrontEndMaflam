import React, { useContext, useEffect } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import {
  HomePageContext,
  HomePageProvider,
} from "../../store/HomePageContext.jsx";
import { CommunityGuidelinesContext, CommunityGuidelinesProvider } from "../../store/CommunityGuidelinesPageContext.jsx";
import CommunityGuidelines from "../../Component/CommunityGuidelines/CommunityGuidelines.jsx";

const CommunityGuidelinesPage  = () => {
  
  const { homeScreenDetails, loading: homeLoading, error: homeError } = useContext(HomePageContext);

  useEffect(() => {
    if (homeScreenDetails) {
      console.log("Home Screen Details:", homeScreenDetails);
    }
  }, [homeScreenDetails]);
  
  const { CommunityGuidelinesDetails, loading: aboutLoading, error: aboutError } = useContext(CommunityGuidelinesContext);

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
         <Navbar></Navbar>
         <CommunityGuidelines></CommunityGuidelines>
         <Footer></Footer>
         </CommunityGuidelinesProvider>
       </HomePageProvider>
      </LanguageProvider>
    </div>
  );
};

export default CommunityGuidelinesPage ;
