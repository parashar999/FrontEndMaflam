import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Routes and Route
import {
  HeroContact,
  ContactInformation,
  JoinUs,
  ContactForm,
  ContactForm2
} from "../../Component";
import styles from "./ContactUs.module.css";
import { 
  LanguageProvider, 
  AboutusPageProvider, 
  ContactUsContextProvider, 
  ContactUs2ContextProvider,
  ContactUs3ContextProvider,
  ContactUs2Context
} from "../../store"; 

const ContactUS = () => {
  return (
    <div>
      <LanguageProvider>
        <AboutusPageProvider>
          <ContactUsContextProvider>
            <div className={styles.container}>
              <HeroContact />
              <Routes> {/* Wrap the routes inside Routes component */}
                {/* Define routes for different sections */}
                <Route path="" element={<ContactUs2ContextProvider><ContactForm /></ContactUs2ContextProvider>} />
              <Route path="form" element={<ContactInformation/> } />
              <Route path="form2" element={<ContactUs3ContextProvider> <ContactForm2/> </ContactUs3ContextProvider> } />
              </Routes>
              <div className={styles.bottombg}>
                <JoinUs />
              </div>
            </div>
          </ContactUsContextProvider>
        </AboutusPageProvider>
      </LanguageProvider>
    </div>
  );
};

export default ContactUS;
