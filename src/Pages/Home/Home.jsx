import { useContext, useEffect , useState } from "react";
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
import { PacmanLoader } from "react-spinners";

const Home = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

    // Track scroll position for this page in localStorage
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        // Save the current scroll position in localStorage
        localStorage.setItem('page1ScrollPosition', scrollY);
        console.log(scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  // Restore the scroll position when the page loads
  useEffect(() => {
    const savedScrollY = localStorage.getItem('page1ScrollPosition');
    console.log(savedScrollY);  // Debugging log to check retrieved scroll value

    if (savedScrollY) {
      // Use a timeout to ensure the page is fully loaded before scrolling
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollY, 10));
      }, 4000); // Small delay to ensure layout is complete
    }
  }, []); // Only run this effect on component mount

  const [isLoading, setIsLoading] = useState(true); // Start with the loader visible

  useEffect(() => {
    // Simulate a loading process (e.g., 3 seconds delay)
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the loader after 3 seconds
    }, 5000);

    // Cleanup the timer if the component is unmounted before the timeout
    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <HomePageProvider>
        <div className={Styles.Home}>
       <div style={{display:!isLoading?"none":"flex", position:'fixed', height:'100vh', width:'100vw', margin:'auto',justifyContent:'center',alignItems:'center', margin:'auto',zIndex:'100', backgroundColor:'black', opacity:'0.99'}} className="loader">
        <PacmanLoader
  color="#39FFFB"
  size={200}
  speedMultiplier={2}
/>
        </div>
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