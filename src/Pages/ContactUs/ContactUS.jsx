import React, { useContext, useEffect } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import HeroContact from "../../Component/HeroContact/HeroContact";
import ContactForm from "../../Component/ContactForm/ContactForm";
import ContactInformation from "../../Component/ContactInformation/ContactInformation";
import MaflanContent from "../../Component/MaflanContent/MaflanContent";
import Footer from "../../Component/Footer/Footer";
import JoinUs from "../../Component/JoinUs/JoinUs";
import styles from "./ContactUs.module.css";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import { HomePageProvider } from "../../store/HomePageContext";
import { AboutusPageContext, AboutusPageProvider } from "../../store/AboutUsPageContext";
import { ContactUsContext, ContactUsContextProvider } from "../../store/ContactUsContext";

const ContactUS = () => {
  
  const { aboutusScreenDetails, loading: aboutLoading, error: aboutError } = useContext(AboutusPageContext);

  useEffect(() => {
    if (aboutusScreenDetails) {
      console.log("About Us Screen Details:", aboutusScreenDetails);
    }
  }, [aboutusScreenDetails]);






  const {contactUsContextDetails , loading: homeLoading, error: homeError } = useContext(ContactUsContext);

  useEffect(() => {
    if (contactUsContextDetails) {
      console.log("Home Screen Details:", contactUsContextDetails);
    }
  }, [contactUsContextDetails]);


  return (
    <div>
      <LanguageProvider>
        <AboutusPageProvider>
          <ContactUsContextProvider>
          <Navbar></Navbar>
          <HeroContact></HeroContact>
          <ContactInformation></ContactInformation>
          <div className={styles.container}>
            <MaflanContent></MaflanContent>
            <JoinUs></JoinUs>
          </div>
          <Footer></Footer>
          </ContactUsContextProvider>
        </AboutusPageProvider>
      </LanguageProvider>
    </div>
  );
};

export default ContactUS;
