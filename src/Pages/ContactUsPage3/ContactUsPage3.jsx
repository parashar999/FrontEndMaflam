import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import HeroContact from "../../Component/HeroContact/HeroContact";
import ContactForm from "../../Component/ContactForm/ContactForm";
import MaflanContent from "../../Component/MaflanContent/MaflanContent";
import Footer from "../../Component/Footer/Footer";
import JoinUs from "../../Component/JoinUs/JoinUs";
import styles from "./ContactUsPage3.module.css";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import { HomePageProvider } from "../../store/HomePageContext";
import { AboutusPageProvider } from "../../store/AboutUsPageContext";

const ContactUsPage3 = () => {
  return (
    <div>
      <LanguageProvider>
        <AboutusPageProvider>
          <Navbar></Navbar>
          <HeroContact></HeroContact>
          <ContactForm></ContactForm>
          <div className={styles.container}>
            <MaflanContent></MaflanContent>
            <JoinUs></JoinUs>
          </div>
          <Footer></Footer>
        </AboutusPageProvider>
      </LanguageProvider>
    </div>
  );
};

export default ContactUsPage3;
