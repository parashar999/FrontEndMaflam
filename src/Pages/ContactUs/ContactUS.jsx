import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import HeroContact from "../../Component/HeroContact/HeroContact";
import ContactForm from "../../Component/ContactForm/ContactForm";
import MaflanContent from "../../Component/MaflanContent/MaflanContent";
import Footer from "../../Component/Footer/Footer";
import JoinUs from "../../Component/JoinUs/JoinUs";
import styles from "./ContactUS.module.css";
import {  LanguageProvider } from "../../Component/LanguageContext/LanguageContext";

const ContactUS = () => {
  return (
    <div>
      <LanguageProvider>
      <Navbar></Navbar>
      <HeroContact></HeroContact>
      <ContactForm></ContactForm>
      <div className={styles.container}>
        <MaflanContent></MaflanContent>
        <JoinUs></JoinUs>
      </div>
      <Footer></Footer>
      </LanguageProvider>
    </div>
  );
};

export default ContactUS;
