
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
// import HomeCarousel from "../../Component/HomeScreenCarousel/HomeScreenCarousel";
import CarouselCommunity from "../../Component/Community/CarouselCommunity";
import Ourservices from "../../Component/Ourservices/Ourservices";
const Home = () => {
  return (
    <div>
     <Navbar></Navbar>
  
      <HomeHero></HomeHero>
      <ViewCourses></ViewCourses>
      <CourseGrid></CourseGrid>
      <Fundamental></Fundamental>
      <Ourservices></Ourservices>
    
      <SuccessPartners></SuccessPartners>
      <MaflamInstructors></MaflamInstructors>
      <HomeScreenCarousel/>
      <HomeCommunityCarousel></HomeCommunityCarousel>
      <CarouselCommunity />
      <Faqs></Faqs>
      <Footer></Footer> 
      
           

           
   
      
    </div>
  );
};

export default Home;
