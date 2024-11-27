import React, { useContext, useEffect } from "react";
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


export default function AboutUs() {
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
          <div className={styles.container}>
            <div className={styles.AboutUsbg}>
              <Filmmaker />
              <OurVisionData />
              {/* <Filmmaker /> */}
            </div>
            <MaflamImageOffer />
            <MaflamInstructors />
            <MaflamCard />
          </div>
        </AboutusPageProvider>
      </HomePageProvider>
    </LanguageProvider>
  );
}

