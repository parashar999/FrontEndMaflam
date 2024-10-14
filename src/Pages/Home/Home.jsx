// import MaflamInstructors from "../../Component/MaflamInstructors/MaflamInstructors";
// import Navbar from "../../Component/Navbar/Navbar";
// import SuccessPartners from "../../Component/SuccessPartners/SuccessPartners";
// import HomeHero from "../../Component/HomeHero/HomeHero";
// import CourseGrid from "../../Component/CourseCategories/Course";
// import Footer from "../../Component/Footer/Footer";
// import Fundamental from "../../Component/FundamentalPackage/Fundamental";
// import Faqs from "../../Component/Faqs/Faqs";
// import ViewCourses from "../../Component/ViewCourses/ViewCourses";
// import LearnMaflam from "../../Component/LearnMaflam/LearnMaflam.jsx";
// import Ourservices from "../../Component/Ourservices/Ourservices.jsx";
// import HomeScreenCarousel from "../../Component/HomeScreenCarousel/HomeScreenCarousel.jsx";

// import CarouselCommunity from "../../Component/Community/CarouselCommunity.jsx";
// import Styles from "./Home.module.css";
// // import SuccessStories from "../../Component/SuccessStories/SuccessStories.jsx";
// import HomeCommunityCarousel from "../../Component/HomeCummunityCarousel/HomeCommunityCarousel.jsx";
// import LearnAbout from "../../Component/LearnAbout/LearnAbout.jsx";
// import BlogContainer from "../../Component/Blogs/BlogContainer.jsx";


// const Home = () => {
//   return (
//     <div className={Styles.Home}>
//       <Navbar></Navbar>
//       <HomeHero></HomeHero> 
//        <LearnMaflam></LearnMaflam>
//       <ViewCourses></ViewCourses>
//       <CourseGrid></CourseGrid>
//       <Fundamental></Fundamental>
//       <Ourservices></Ourservices>
//       <SuccessPartners></SuccessPartners>
//       <LearnAbout></LearnAbout> 
//        <MaflamInstructors></MaflamInstructors>
//       <HomeScreenCarousel /> 
//       <BlogContainer></BlogContainer>
//       <HomeCommunityCarousel></HomeCommunityCarousel>
//       <CarouselCommunity></CarouselCommunity>

//       <Faqs></Faqs>
//       <Footer></Footer> 
   
//     </div>
//   );
// };

// export default Home;



// import React, { useState, useEffect } from "react";
// import Navbar from "../../Component/Navbar/Navbar";
// import HomeHero from "../../Component/HomeHero/HomeHero";
// import LearnMaflam from "../../Component/LearnMaflam/LearnMaflam";
// import ViewCourses from "../../Component/ViewCourses/ViewCourses";
// import CourseGrid from "../../Component/CourseCategories/Course";
// import Fundamental from "../../Component/FundamentalPackage/Fundamental";
// import Ourservices from "../../Component/Ourservices/Ourservices";
// import SuccessPartners from "../../Component/SuccessPartners/SuccessPartners";
// import LearnAbout from "../../Component/LearnAbout/LearnAbout";
// import MaflamInstructors from "../../Component/MaflamInstructors/MaflamInstructors";
// import HomeScreenCarousel from "../../Component/HomeScreenCarousel/HomeScreenCarousel";
// import BlogContainer from "../../Component/Blogs/BlogContainer";
// import HomeCommunityCarousel from "../../Component/HomeCummunityCarousel/HomeCommunityCarousel";
// import CarouselCommunity from "../../Component/Community/CarouselCommunity";
// import Faqs from "../../Component/Faqs/Faqs";
// import Footer from "../../Component/Footer/Footer";
// import Styles from "./Home.module.css";

// const Home = () => {
//   const [language, setLanguage] = useState("ar"); 
//   const [direction, setDirection] = useState("rtl"); 


//   useEffect(() => {
//     if (language === "ar") {
//       document.body.dir = "rtl"; 
//       setDirection("rtl");
//     } else {
//       document.body.dir = "ltr"; 
//       setDirection("ltr");
//     }
//   }, [language]);

//   const toggleLanguage = () => {
//     setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"));
//   };

//   return (
//     <div className={Styles.Home}>
//       <Navbar direction={direction} language={language} toggleLanguage={toggleLanguage} />
//       {/* <Navbar /> */}
//       <HomeHero direction={direction} language={language} />
//       <LearnMaflam direction={direction} language={language} />
//       <ViewCourses direction={direction} language={language} />
//       <CourseGrid direction={direction} language={language} />
//       <Fundamental direction={direction} language={language} />
//       <Ourservices direction={direction} language={language} />
//       <SuccessPartners direction={direction} language={language} />
//       <LearnAbout direction={direction} language={language} />
//       <MaflamInstructors direction={direction} language={language} />
//       <HomeScreenCarousel direction={direction} language={language} />
//       <BlogContainer direction={direction} language={language} />
//       <HomeCommunityCarousel direction={direction} language={language} />
//       <CarouselCommunity direction={direction} language={language} />
//       <Faqs direction={direction} language={language} />
//       <Footer direction={direction} language={language} />
//     </div>
//   );
// };

// export default Home;



import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import HomeHero from "../../Component/HomeHero/HomeHero";
import LearnMaflam from "../../Component/LearnMaflam/LearnMaflam";
import ViewCourses from "../../Component/ViewCourses/ViewCourses";
import CourseGrid from "../../Component/CourseCategories/Course";
import Fundamental from "../../Component/FundamentalPackage/Fundamental";
import Ourservices from "../../Component/Ourservices/Ourservices";
import SuccessPartners from "../../Component/SuccessPartners/SuccessPartners";
import LearnAbout from "../../Component/LearnAbout/LearnAbout";
import MaflamInstructors from "../../Component/MaflamInstructors/MaflamInstructors";
import HomeScreenCarousel from "../../Component/HomeScreenCarousel/HomeScreenCarousel";
import BlogContainer from "../../Component/Blogs/BlogContainer";
import HomeCommunityCarousel from "../../Component/HomeCummunityCarousel/HomeCommunityCarousel";
import CarouselCommunity from "../../Component/Community/CarouselCommunity";
import Faqs from "../../Component/Faqs/Faqs";
import Footer from "../../Component/Footer/Footer";
import Styles from "./Home.module.css";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
// import { LanguageProvider } from "../../context/LanguageContext"; 
const Home = () => {
  return (
    <LanguageProvider>
      <div className={Styles.Home}>
        <Navbar />
        <HomeHero />
        <LearnMaflam />
        <ViewCourses />
        <CourseGrid />
        <Fundamental />
        <Ourservices />
        <SuccessPartners />
        <LearnAbout />
        <MaflamInstructors />
        <HomeScreenCarousel />
        <BlogContainer />
        <HomeCommunityCarousel />
        <CarouselCommunity />
        <Faqs />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Home;
