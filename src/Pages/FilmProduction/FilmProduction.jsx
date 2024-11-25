import React, { useContext, useEffect } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import FundamentalFilmProduction from "../../Component/FundamentalFilmProduction/FundamentalFilmProduction";
import FilmProductionInstructor from "../../Component/FilmProductionInstructor/FilmProductionInstructor";
import styles from "./FilmProduction.module.css"
import SubscribeFundamentalPackage from "../../Component/SubscribeFundamentalPackage/SubscribeFundamentalPackage";
import {
  FilmProductionProvider,
  FilmProductionContext,
} from "../../store/FilmProductionContext";
import JoinUs from "../../Component/JoinUs/JoinUs";
// import { AboutusPageProvider } from "../../store/AboutUsPageContext";
import {
  AboutusPageContext,
  AboutusPageProvider,
} from "../../store/AboutUsPageContext";
import { PricingPageContext, PricingPageContextProvider } from "../../store/PricingPageContext";

function FilmProduction() {
  const {
    filmproductionScreenDetails,
    loading: filmproductionLoading,
    error: filmproductionError,
  } = useContext(FilmProductionContext);

  useEffect(() => {
    if (filmproductionScreenDetails) {
      console.log(
        "Film Production Screen Details:",
        filmproductionScreenDetails
      );
    }
  }, [filmproductionScreenDetails]);

  const {
    aboutusScreenDetails,
    loading: aboutLoading,
    error: aboutError,
  } = useContext(AboutusPageContext);


  
  // const {
  //   pricingPageContextDetails,
  //   loading: pricingLoading,
  //   error: pricingerror,
  // } = useContext(PricingPageContext);

  // useEffect(() => {
  //   if (pricingPageContextDetails) {
  //     console.log("Home Screen Details:", pricingPageContextDetails);
  //   }
  // }, [pricingPageContextDetails]);


  return (
    <div>
     
      
        <LanguageProvider>
      
          <FilmProductionProvider>
            <AboutusPageProvider>
          
            <Navbar />
            <div className={styles.elements}>
              <FundamentalFilmProduction />
          
              <SubscribeFundamentalPackage /> 
              
              <div className={styles.bottombg}>
              <JoinUs />
              <Footer />
              </div>
              </div>
            </AboutusPageProvider>
          </FilmProductionProvider>
        
        </LanguageProvider>
     
    </div>
  );
}

export default FilmProduction;
