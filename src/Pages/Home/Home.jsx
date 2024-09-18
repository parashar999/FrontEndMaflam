import React from "react";
import Footer from "../../Component/Footer/Footer";
import Faqs from "../../Component/Faqs/Faqs";

import MaflamInstructors from "../../Component/MaflamInstructors/MaflamInstructors";
import Navbar from "../../Component/Navbar/Navbar";
import SuccessPartners from "../../Component/SuccessPartners/SuccessPartners";
import HomeHero from "../../Component/HomeHero/HomeHero";
import CourseGrid from "../../Component/CourseCategories/Course";

const Home = () => {
  return (
    <div>
     
      
      <Navbar></Navbar>
  
      <HomeHero></HomeHero>
      <CourseGrid></CourseGrid>
      <SuccessPartners></SuccessPartners>
      <MaflamInstructors></MaflamInstructors>
      <Faqs />
      <Footer />

    
    </div>
  );
};

export default Home;
