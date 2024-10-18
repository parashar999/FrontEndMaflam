import React, { useContext, useEffect } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import EbooksCards from "../../Component/EBooksCards/EbooksCards";
import JoinUs from "../../Component/JoinUs/JoinUs";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import { AboutusPageContext, AboutusPageProvider } from "../../store/AboutUsPageContext";
import { EbookPageContext, EbookPageContextProvider } from "../../store/ebookPageContext";

const Ebooks = () => {


  const { aboutusScreenDetails, loading: aboutLoading, error: aboutError } = useContext(AboutusPageContext);

  useEffect(() => {
    if (aboutusScreenDetails) {
      console.log("About Us Screen Details:", aboutusScreenDetails);
    }
  }, [aboutusScreenDetails]);






  const { ebookPageContextDetails, loading: homeLoading, error: homeError } = useContext(EbookPageContext);

  useEffect(() => {
    if (ebookPageContextDetails) {
      console.log("Home Screen Details:", ebookPageContextDetails);
    }
  }, [ebookPageContextDetails]);


  
  return (
    <div>
      <LanguageProvider>
        <AboutusPageProvider>
          <EbookPageContextProvider >
      <Navbar></Navbar>
    <EbooksCards></EbooksCards>
      <JoinUs></JoinUs>
      <Footer></Footer>
      </EbookPageContextProvider>
      </AboutusPageProvider>
      </LanguageProvider>

    </div>
  );
};

export default Ebooks;
