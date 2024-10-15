import React, { useContext, useEffect } from "react";
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
import {
  HomePageContext,
  HomePageProvider,
} from "../../store/HomePageContext.jsx";

const Home = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

  useEffect(() => {
    if (homeScreenDetails) {
      console.log("Home Screen Details:", homeScreenDetails);
    }
  }, [homeScreenDetails]);

  return (
    <LanguageProvider>
      <HomePageProvider>
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
      </HomePageProvider>
    </LanguageProvider>
  );
};

export default Home;
