import React, { useContext, useEffect, useRef } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import HeroContact from "../../Component/HeroContact/HeroContact";
import ContactForm2 from "../../Component/ContactForm2/ContactForm2";
import MaflanContent from "../../Component/MaflanContent/MaflanContent";
import Footer from "../../Component/Footer/Footer";
import JoinUs from "../../Component/JoinUs/JoinUs";
import styles from "./ContactUsPage3.module.css";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import { HomePageProvider } from "../../store/HomePageContext";
import { AboutusPageContext, AboutusPageProvider } from "../../store/AboutUsPageContext";
import { ContactUsContext, ContactUsContextProvider } from "../../store/ContactUsContext";
import { ContactUs3Context } from "../../store/ContactUs3Context";

const ContactUsPage3 = () => {
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

  const {
    contactUsContextDetails,
    loading: homeLoading,
    error: homeError,
  } = useContext(ContactUsContext);

  useEffect(() => {
    if (contactUsContextDetails) {
      console.log("Home Screen Details:", contactUsContextDetails);
    }
  }, [contactUsContextDetails]);

  const { ContactUs3ContextDetails } = useContext(ContactUs3Context);

  useEffect(() => {
    if (ContactUs3ContextDetails) {
      console.log("Home Screen Details:", ContactUs3ContextDetails);
    }
  }, [ContactUs3ContextDetails]);

  // Create a reference for the ContactForm2 component
  const contactForm2Ref = useRef(null);

  // Scroll to the ContactForm2 component after the page loads
  useEffect(() => {
    // Delay the scroll to allow the page to fully load
    setTimeout(() => {
      if (contactForm2Ref.current) {
        // Scroll the element into view with smooth behavior
        contactForm2Ref.current.scrollIntoView({ behavior: "smooth" });
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
            <div className={styles.cotainer}>
              <div className={styles.contact3} ref={contactForm2Ref}>
                <ContactForm2 />
              </div>
            </div>
            <div className={styles.container}>
              <MaflanContent />
              <JoinUs />
            </div>
            <Footer />
          </ContactUsContextProvider>
        </AboutusPageProvider>
      </LanguageProvider>
    </div>
  );
};

export default ContactUsPage3;
