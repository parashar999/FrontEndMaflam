import React, { useContext, useEffect } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import FundamentalFilmProduction from "../../Component/FundamentalFilmProduction/FundamentalFilmProduction";
import FilmProductionInstructor from "../../Component/FilmProductionInstructor/FilmProductionInstructor";
import FilmProductionCourseContent from "../../Component/FilmProductionCourseContent/FilmProductionCourseContent";
import SubscribeFundamentalPackage from "../../Component/SubscribeFundamentalPackage/SubscribeFundamentalPackage";
import {
  FilmProductionProvider,
  FilmProductionContext,
} from "../../store/FilmProductionContext";
import JoinUs from "../../Component/JoinUs/JoinUs";
import './FilmProduction.css'
// import { AboutusPageProvider } from "../../store/AboutUsPageContext";
import {
  AboutusPageContext,
  AboutusPageProvider,
} from "../../store/AboutUsPageContext";

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

  useEffect(() => {
    if (aboutusScreenDetails) {
      console.log("About Us Screen Details:", aboutusScreenDetails);
    }
  }, [aboutusScreenDetails]);

  return (
    <div>
    <Navbar />
    <div  className="elements">
      <LanguageProvider>
        <FilmProductionProvider>
          <AboutusPageProvider>
            <FundamentalFilmProduction />
         
            <FilmProductionInstructor />
            <FilmProductionCourseContent />
            {/* <SubscribeFundamentalPackage /> */}
            <JoinUs />
            <Footer />
          </AboutusPageProvider>
        </FilmProductionProvider>
      </LanguageProvider>
    </div>
    </div>
  );
}

export default FilmProduction;
