import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import CourseGrid from "../../Component/CourseCategories/Course";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <CourseGrid></CourseGrid>
    </div>
  );
};

export default Home;
