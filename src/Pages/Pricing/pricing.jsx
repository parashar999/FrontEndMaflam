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
import bggradient from "../../assets/PricingPageVector.png";
import {
  AboutusPageContext,
  AboutusPageProvider,
} from "../../store/AboutUsPageContext";
import {
  PricingPageContext,
  PricingPageContextProvider,
} from "../../store/PricingPageContext";
import { useContext, useEffect } from "react";

function Pricing() {
  const {
    homeScreenDetails,
    loading: homeLoading,
    error: homeError,
  } = useContext(HomePageContext);

  // useEffect(() => {
  //   if (homeScreenDetails) {
  //     console.log("Home Screen Details:", homeScreenDetails);
  //   }
  // }, [homeScreenDetails]);

  const {
    aboutusScreenDetails,
    loading: aboutLoading,
    error: aboutError,
  } = useContext(AboutusPageContext);

  // useEffect(() => {
  //   if (aboutusScreenDetails) {
  //     console.log("About Us Screen Details:", aboutusScreenDetails);
  //   }
  // }, [aboutusScreenDetails]);

  const {
    pricingPageContextDetails,
    loading: pricingLoading,
    error: pricingerror,
  } = useContext(PricingPageContext);

  // useEffect(() => {
  //   if (pricingPageContextDetails) {
  //     console.log("Home Screen Details:", pricingPageContextDetails);
  //   }
  // }, [pricingPageContextDetails]);
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
                <div id="Coursesgrid">
                  <VariousCourse></VariousCourse>
                </div>
                {/* <Carousel></Carousel> */}
                <MaflanContent />
                <JoinUs />
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
