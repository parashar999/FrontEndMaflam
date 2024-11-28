import React, { useContext, useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Filmmaker,
  JoinUs,
  MaflamCard,
  MaflamImageOffer,
  MaflamInstructors,
  MaflamContent,
  OurVisionData
} from "../../Component";
import {
  LanguageProvider,
  HomePageContext,
  HomePageProvider,
  AboutusPageContext,
  AboutusPageProvider,
} from "../../store"

import styles from "./AboutUs.module.css";
import { PacmanLoader } from "react-spinners";

export default function AboutUs() {
 
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

  const [isLoading, setIsLoading] = useState(true); // Start with the loader visible

  useEffect(() => {
    // Simulate a loading process (e.g., 3 seconds delay)
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the loader after 3 seconds
    }, 1000);

    // Cleanup the timer if the component is unmounted before the timeout
    return () => clearTimeout(timer);
  }, []);


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
          <div style={{display:!isLoading?"none":"flex", position:'fixed', top:'0px', height:'100vh', width:'100vw', margin:'auto',justifyContent:'center',alignItems:'center', margin:'auto',zIndex:'100', backgroundColor:'black', opacity:'0.99'}} className="loader">
        <PacmanLoader
  color="#39FFFB"
  size={200}
  speedMultiplier={2}
/>
        </div>
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

