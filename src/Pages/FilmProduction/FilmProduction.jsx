import React, { useContext, useEffect } from "react";
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import { LanguageProvider } from '../../Component/LanguageContext/LanguageContext'
import FundamentalFilmProduction from '../../Component/FundamentalFilmProduction/FundamentalFilmProduction'
import FilmProductionInstructor from '../../Component/FilmProductionInstructor/FilmProductionInstructor'
import FilmProductionCourseContent from '../../Component/FilmProductionCourseContent/FilmProductionCourseContent'
import SubscribeFundamentalPackage from '../../Component/SubscribeFundamentalPackage/SubscribeFundamentalPackage'
import { FilmProductionProvider , FilmProductionContext } from '../../store/FilmProductionContext'

function FilmProduction() {


  const {
    filmproductionScreenDetails,
    loading: filmproductionLoading,
    error: filmproductionError,
  } = useContext(FilmProductionContext);

  useEffect(() => {
    if (filmproductionScreenDetails) {
      console.log("Film Production Screen Details:", filmproductionScreenDetails);
    }
  }, [filmproductionScreenDetails]);
  return (
    <div>
      <LanguageProvider >
        <FilmProductionProvider>
        <Navbar />
        <FundamentalFilmProduction />
        <FilmProductionInstructor />
        <FilmProductionCourseContent />
        <SubscribeFundamentalPackage />
        <Footer />    
        </FilmProductionProvider>    
     </LanguageProvider>


    </div>
  )
}

export default FilmProduction;