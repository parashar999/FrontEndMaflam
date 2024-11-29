import React, { useContext, useEffect,useState } from "react";
import { useLocation } from "react-router-dom";

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

import
{
  useScrollToTopWithDelay
} from  '../../hooks'

import styles from "./AboutUs.module.css";


export default function AboutUs() {

  useScrollToTopWithDelay(500);
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
    
       
            <div className={styles.AboutUsbg}>
              <Filmmaker />
              <OurVisionData />
              {/* <Filmmaker /> */}
            </div>
            <MaflamImageOffer />
            </div>
            <MaflamInstructors />
            <MaflamCard />
          
        </AboutusPageProvider>
      </HomePageProvider>
    </LanguageProvider>
  );
}

