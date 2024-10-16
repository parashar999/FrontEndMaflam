import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import FaqsQues from "../../Component/Faqs_Ques/FaqsQues";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";

const FaqPage  = () => {
  return (
    <div>
   <LanguageProvider >
    <Navbar></Navbar>
    <FaqsQues></FaqsQues>
    <Footer></Footer>
   </LanguageProvider >

    </div>
  );
};

export default FaqPage ;
