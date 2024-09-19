import React from "react";
import Footer from "../../Component/Footer/Footer";
import Faqs from "../../Component/Faqs/Faqs";

import MaflamInstructors from "../../Component/MaflamInstructors/MaflamInstructors";
import Navbar from "../../Component/Navbar/Navbar";
import SuccessPartners from "../../Component/SuccessPartners/SuccessPartners";
import HomeHero from "../../Component/HomeHero/HomeHero";
import CourseGrid from "../../Component/CourseCategories/Course";
import Fundamental from "../../Component/FundamentalPackage/Fundamental";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>

      <HomeHero></HomeHero>
      <CourseGrid></CourseGrid>
      <Fundamental />
      <SuccessPartners></SuccessPartners>
      <MaflamInstructors></MaflamInstructors>
      <Faqs /> 
       <Footer />
    </div>
  );
};

export default Home;
