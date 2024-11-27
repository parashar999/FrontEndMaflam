import { 
  PricingPage, 
  FundamentalPackage, 
  CarouselCard, 
  VariousCourse, 
  JoinUs, 
  MaflamContent
} from "../../Component";

import { LanguageProvider ,
  HomePageContext,
  HomePageProvider ,
  AboutusPageContext,
  AboutusPageProvider,
  PricingPageContext,
  PricingPageContextProvider,
} from "../../store";

import styles from "./Pricing.module.css"

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
                <PricingPage></PricingPage>
                <FundamentalPackage></FundamentalPackage>
                <div className={styles.CarouselGradient}>
                <div ref={contactInfoRef}>
                <VariousCourse></VariousCourse>
                </div>
                <CarouselCard></CarouselCard>
                </div>   
              </PricingPageContextProvider>
            </AboutusPageProvider>
          </HomePageProvider>
        </LanguageProvider>
      </div>
    </>
  );
}

export default Pricing;