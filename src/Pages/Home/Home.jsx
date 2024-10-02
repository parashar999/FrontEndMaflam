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
import Styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={Styles.Home}>
      <Navbar></Navbar>
      <HomeHero></HomeHero>
      <LearnMaflam></LearnMaflam>
      <CourseGrid></CourseGrid>
      <Fundamental></Fundamental>
      <ViewCourses></ViewCourses>
      <SuccessPartners></SuccessPartners>
      <MaflamInstructors></MaflamInstructors>
      <Faqs></Faqs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
