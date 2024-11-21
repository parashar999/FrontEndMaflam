  import PricingPage from "../../Component/PricingPage/PricingPage";
import Fundamental from "../../Component/FundamentalPackage/Fundamental";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import Carousel from "../../Component/CarouselCard/Carousel";
import VariousCourse from "../../Component/VariousCourse/VariousCourse";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import { HomePageContext, HomePageProvider } from "../../store/HomePageContext";
import MaflanContent from "../../Component/MaflanContent/MaflanContent";
import JoinUs from "../../Component/JoinUs/JoinUs";
import styles from "./pricing.module.css"
import bggradient from "../../assets/PricingPageVector.png"
import {
  AboutusPageContext,
  AboutusPageProvider,
} from "../../store/AboutUsPageContext";
import {
  PricingPageContext,
  PricingPageContextProvider,
} from "../../store/PricingPageContext";
import { useContext, useEffect,useRef } from "react";

function Pricing() {
  const {
    homeScreenDetails,
    loading: homeLoading,
    error: homeError,
  } = useContext(HomePageContext);

  useEffect(() => {
    if (homeScreenDetails) {
      console.log("Home Screen Details:", homeScreenDetails);
    }
  }, [homeScreenDetails]);

  const {
    aboutusScreenDetails,
    loading: aboutLoading,
    error: aboutError,
  } = useContext(AboutusPageContext);

  useEffect(() => {
    if (aboutusScreenDetails) {
      console.log("About Us Screen Details:", aboutusScreenDetails);
    }
  }, [aboutusScreenDetails]);

  const {
    pricingPageContextDetails,
    loading: pricingLoading,
    error: pricingerror,
  } = useContext(PricingPageContext);

  useEffect(() => {
    if (pricingPageContextDetails) {
      console.log("Home Screen Details:", pricingPageContextDetails);
    }
  }, [pricingPageContextDetails]);

  
  // Create a reference for the ContactInformation component
  const contactInfoRef = useRef(null);

  // Scroll to the ContactInformation component after the page loads
  useEffect(() => {
    // Delay the scroll to allow the page to fully load
    setTimeout(() => {
      if (contactInfoRef.current) {
        // Use window.scrollTo to scroll to the element
        contactInfoRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 500); // 500ms delay to ensure the page is loaded

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout();
  }, []);

  return (
    <>
      <div>
        <LanguageProvider>
          <HomePageProvider>
            <AboutusPageProvider>
              <PricingPageContextProvider>
                <Navbar></Navbar>
                <PricingPage></PricingPage>
                <Fundamental></Fundamental>
                <div className={styles.CarouselGradient}>
                <div ref={contactInfoRef}>
                <VariousCourse></VariousCourse>
                </div>
                <Carousel></Carousel>
                <MaflanContent />
                <JoinUs />
                </div>
                <Footer></Footer>
                
              </PricingPageContextProvider>
            </AboutusPageProvider>
          </HomePageProvider>
        </LanguageProvider>
      </div>
    </>
  );
}

export default Pricing;