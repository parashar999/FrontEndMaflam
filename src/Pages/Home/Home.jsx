import MaflamInstructors from "../../Component/MaflamInstructors/MaflamInstructors";
import Navbar from "../../Component/Navbar/Navbar";
import SuccessPartners from "../../Component/SuccessPartners/SuccessPartners";
import HomeHero from "../../Component/HomeHero/HomeHero";
import CourseGrid from "../../Component/CourseCategories/Course";
import Footer from "../../Component/Footer/Footer";
import Fundamental from "../../Component/FundamentalPackage/Fundamental";
import Faqs from "../../Component/Faqs/Faqs";
import ViewCourses from "../../Component/ViewCourses/ViewCourses";
import LearnMaflam from "../../Component/LearnMaflam/LearnMaflam.jsx";
import Ourservices from "../../Component/Ourservices/Ourservices.jsx";
import HomeScreenCarousel from "../../Component/HomeScreenCarousel/HomeScreenCarousel.jsx";

import CarouselCommunity from "../../Component/Community/CarouselCommunity.jsx";
import Styles from "./Home.module.css";
// import SuccessStories from "../../Component/SuccessStories/SuccessStories.jsx";
import HomeCommunityCarousel from "../../Component/HomeCummunityCarousel/HomeCommunityCarousel.jsx";
import LearnAbout from "../../Component/LearnAbout/LearnAbout.jsx";
import BlogContainer from "../../Component/Blogs/BlogContainer.jsx";

const Home = () => {
  return (
    <div className={Styles.Home}>
      <Navbar></Navbar>
      <HomeHero></HomeHero>
      <LearnMaflam></LearnMaflam>
      <ViewCourses></ViewCourses>
      <CourseGrid></CourseGrid>
      <Fundamental></Fundamental>
      <Ourservices></Ourservices>
      <SuccessPartners></SuccessPartners>
      <LearnAbout></LearnAbout>
      <MaflamInstructors></MaflamInstructors>
      <HomeScreenCarousel />
       <BlogContainer></BlogContainer>
     <HomeCommunityCarousel></HomeCommunityCarousel>  
       <CarouselCommunity></CarouselCommunity> 
      <BlogContainer></BlogContainer>

      <HomeCommunityCarousel></HomeCommunityCarousel>
      <CarouselCommunity></CarouselCommunity>
      <BlogContainer></BlogContainer>
      <HomeCommunityCarousel></HomeCommunityCarousel>
      <CarouselCommunity></CarouselCommunity>
      <Faqs></Faqs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
