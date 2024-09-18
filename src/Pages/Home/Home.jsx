import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import HomeHero from "../../Component/HomeHero/HomeHero";
import CourseGrid from "../../Component/CourseCategories/Course";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HomeHero></HomeHero>
      <CourseGrid></CourseGrid>
    </div>
  );
};

export default Home;
