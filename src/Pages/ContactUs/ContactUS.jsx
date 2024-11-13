import React, { useContext, useEffect, useRef } from "react";
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
import FocusLock from "react-focus-lock";
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

  // Create a reference for the ContactInformation component
  const contactInfoRef = useRef(null);

  // Scroll to the ContactInformation component after the page loads
  useEffect(() => {
    // Delay the scroll to allow the page to fully load
    setTimeout(() => {
      if (contactInfoRef.current) {
        // Use window.scrollTo to scroll to the element
        contactInfoRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 500); // 500ms delay to ensure the page is loaded

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout();
  }, []);

  return (
    <div>
      <LanguageProvider>
        <AboutusPageProvider>
          <ContactUsContextProvider>
            <Navbar />
            <HeroContact />
            <div className={styles.container}>
              {/* Pass the ref to the ContactInformation component */}
              <div ref={contactInfoRef}>
                <ContactInformation />
              </div>
              <MaflanContent />
            </div>
            <JoinUs />
            <Footer />
          </ContactUsContextProvider>
        </AboutusPageProvider>
      </LanguageProvider>
    </div>
  );
};

export default ContactUS;
