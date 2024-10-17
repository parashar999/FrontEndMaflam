
import PricingPage from "../../Component/PricingPage/PricingPage";
import Fundamental from "../../Component/FundamentalPackage/Fundamental";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import Carousel from "../../Component/CarouselCard/Carousel";
import VariousCourse from "../../Component/VariousCourse/VariousCourse";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import { HomePageProvider } from "../../store/HomePageContext";



function Pricing() {
  return (
    <>
      <div>
        <LanguageProvider>
          <HomePageProvider>
        <Navbar></Navbar>
        <PricingPage></PricingPage>
        <Fundamental></Fundamental>
        <VariousCourse></VariousCourse>
        <Carousel></Carousel>
         <Footer></Footer>
         </HomePageProvider>
         </LanguageProvider>
      </div>
    </>
  );
}

export default Pricing;
