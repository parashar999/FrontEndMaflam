import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import EbooksCards from "../../Component/EBooksCards/EbooksCards";
import JoinUs from "../../Component/JoinUs/JoinUs";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import { AboutusPageProvider } from "../../store/AboutUsPageContext";

const Ebooks = () => {
  return (
    <div>
      <LanguageProvider>
        <AboutusPageProvider>
      <Navbar></Navbar>
    <EbooksCards></EbooksCards>
      <JoinUs></JoinUs>
      <Footer></Footer>
      </AboutusPageProvider>
      </LanguageProvider>

    </div>
  );
};

export default Ebooks;
