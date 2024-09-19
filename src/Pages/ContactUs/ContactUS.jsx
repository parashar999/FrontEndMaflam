import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import HeroContact from "../../Component/HeroContact/HeroContact";
import ContactForm from "../../Component/ContactForm/ContactForm";
import Footer from "../../Component/Footer/Footer";

const ContactUS = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroContact></HeroContact>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default ContactUS;
