
import MaflamInstructors from "../../Component/MaflamInstructors/MaflamInstructors";
import Navbar from "../../Component/Navbar/Navbar";
import SuccessPartners from "../../Component/SuccessPartners/SuccessPartners";
import HomeHero from "../../Component/HomeHero/HomeHero";
import CourseGrid from "../../Component/CourseCategories/Course";
import Footer from "../../Component/Footer/Footer";
import Fundamental from "../../Component/FundamentalPackage/Fundamental";
import Faqs from "../../Component/Faqs/Faqs";
import ViewCourses from "../../Component/ViewCourses/ViewCourses";
import HomeScreenCarousel from "../../Component/HomeScreenCarousel/HomeScreenCarousel";
import HomeCommunityCarousel from "../../Component/HomeCummunityCarousel/HomeCommunityCarousel";
import HomeCarousel from "../../Component/HomeScreenCarousel/HomeScreenCarousel";
import CarouselCommunity from "../../Component/Community/CarouselCommunity";
import Ourservices from "../../Component/Ourservices/Ourservices";
import BlogContainer from "../../Component/Blogs/BlogContainer";
import SuccessStories from "../../Component/SuccessStories/SuccessStories";
import LearnAbout from "../../Component/LearnAbout/LearnAbout";
const Home = () => {
  return (
    <div>
     <Navbar></Navbar>
      <HomeHero></HomeHero>
      <CourseGrid></CourseGrid>
      <Fundamental></Fundamental>
      <Ourservices></Ourservices>
      <SuccessStories></SuccessStories>
      <ViewCourses></ViewCourses>
      
      <SuccessPartners></SuccessPartners>
      <MaflamInstructors></MaflamInstructors>
      <HomeScreenCarousel />
      <BlogContainer></BlogContainer>
      <HomeCommunityCarousel></HomeCommunityCarousel>
      <CarouselCommunity />
      <LearnAbout></LearnAbout>
      <Faqs></Faqs> 
       <Footer></Footer> 
      
      
           

           
   
      
    </div>
  );
};

export default Home;
