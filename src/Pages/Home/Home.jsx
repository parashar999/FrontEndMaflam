import { useContext, useEffect } from "react";
import {
  HomeHero,
  LearnMaflam,
  ViewCourses,
  CourseCategories,
  FundamentalPackage,
  Ourservices,
  SuccessPartners,
  LearnAbout,
  MaflamInstructors,
  HomeScreenCarousel,
  BlogContainer,
  HomeCommunityCarousel,
  Community,
  Faqs,
} from "../../Component";


import Styles from "./Home.module.css";
import { 
  LanguageProvider ,
  HomePageContext,
  HomePageProvider,
} from "../../store";

const Home = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

  // useEffect(() => {
  //   if (homeScreenDetails) {
  //     console.log("Home Screen Details:", homeScreenDetails);
  //   }
  // }, [homeScreenDetails]);

  return (
    <LanguageProvider>
      <HomePageProvider>
        <div className={Styles.Home}>

          <HomeHero />
          <LearnMaflam />
          <ViewCourses />
          <CourseCategories />
          <FundamentalPackage />
          <Ourservices />
          <SuccessPartners />
          <LearnAbout />
          <MaflamInstructors />
          <div className={Styles.BlogContainer}>
            <HomeScreenCarousel />
            <BlogContainer />
            <HomeCommunityCarousel />
          </div>
          <Community />
          <div className={Styles.Footer}>
            <Faqs />
          </div>
          {/* <SubFooter/> */}
        </div>
      </HomePageProvider>
    </LanguageProvider>
  );
};

export default Home;
