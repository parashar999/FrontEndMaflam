import React, { useContext, useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import
{
  useScrollPosition
} from "../../hooks"
import {
  Filmmaker,
  JoinUs,
  MaflamCard,
  MaflamImageOffer,
  MaflamInstructors,
  MaflamContent,
  OurVisionData,
} from "../../Component";
import
{
  Loader
} from '../../utilities'

import {
  LanguageProvider,
  HomePageContext,
  HomePageProvider,
  AboutusPageContext,
  AboutusPageProvider,
} from "../../store"



import styles from "./AboutUs.module.css";


export default function AboutUs() {
 
  useScrollPosition("AboutUs", 2000);

  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (location.hash) {
        const target = document.querySelector(location.hash);
        if (target) {
          // Scroll to the element immediately
          target.scrollIntoView({ behavior: "smooth" });

          // Delayed action: Scroll or trigger another behavior
          setTimeout(() => {
            console.log("Triggered after 1 second:", location.hash);
            setTimeout(() => (target.style.backgroundColor = ""), 2000); // Reset style after 2s
          }, 2100);
        }
      }
    };
    handleScroll(); // Call it on mount if there's a hash
  }, [location]); // Runs whenever the location changes

  const [isLoading,setIsLoading]=useState(true)

  const {
    homeScreenDetails,
    loading: homeLoading,
    error: homeError,
  } = useContext(HomePageContext);

  const {
    aboutusScreenDetails,
    loading: aboutLoading,
    error: aboutError,
  } = useContext(AboutusPageContext);

  return (
    <LanguageProvider>
      <HomePageProvider>
        <AboutusPageProvider>
          <div id="aboutushead" className={styles.container}>
    
          <Loader isLoading={isLoading} timeout={1000} />
            <div className={styles.AboutUsbg}>
              <Filmmaker />
              <OurVisionData />
              {/* <Filmmaker /> */}
            </div>
            <div id="aboutusoffers"></div>
            <MaflamImageOffer />
            </div>
            <MaflamInstructors />
            <MaflamCard />
          
        </AboutusPageProvider>
      </HomePageProvider>
    </LanguageProvider>
  );
}

