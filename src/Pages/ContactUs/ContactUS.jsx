import React, { useContext, useEffect,useRef } from "react";
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
import FocusLock from 'react-focus-lock';
import {
  AboutusPageContext,
  AboutusPageProvider,
} from "../../store/AboutUsPageContext";
import {
  ContactUsContext,
  ContactUsContextProvider,
} from "../../store/ContactUsContext";

const ContactUS = () => {
  const containerRef = useRef(null);
  
  const {
    aboutusScreenDetails,
    loading: aboutLoading,
    error: aboutError,
  } = useContext(AboutusPageContext);
  const {
    contactUsContextDetails,
    loading: homeLoading,
    error: homeError,
  } = useContext(ContactUsContext);

  

  useEffect(() => {
  
    if (aboutusScreenDetails) {
      if(contactUsContextDetails){
        if (containerRef.current) {
          console.log("Attempting to focus...");
          containerRef.current.focus();
          console.log("navigating  to focus...");
        }
        console.log("About Us Screen Details:", aboutusScreenDetails);
     
      }
      }
      
  }, [aboutusScreenDetails,contactUsContextDetails]);

  

  
  return (
    <div>
      <LanguageProvider>
        <AboutusPageProvider>
          <ContactUsContextProvider>
            <Navbar></Navbar>
            <HeroContact></HeroContact>

            <FocusLock returnFocus={false} disabled={false}>
            <div ref={containerRef}
            className={styles.container}>
              <ContactInformation></ContactInformation>

            </div>
            
            
            <div
            className={styles.container}>
              <MaflanContent></MaflanContent>

            </div>
            
            
            </FocusLock>
            <JoinUs></JoinUs>
            <Footer></Footer>
          </ContactUsContextProvider>
        </AboutusPageProvider>
      </LanguageProvider>
    </div>
  );
};

export default ContactUS;
