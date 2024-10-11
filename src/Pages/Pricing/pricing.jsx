
import PricingPage from "../../Component/PricingPage/PricingPage";
import Fundamental from "../../Component/FundamentalPackage/Fundamental";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import Carousel from "../../Component/CarouselCard/Carousel";
import VariousCourse from "../../Component/VariousCourse/VariousCourse";
import MaflanContent from "../../Component/MaflanContent/MaflanContent";
import JoinUs from "../../Component/JoinUs/JoinUs";



function Pricing() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <PricingPage></PricingPage>
        <Fundamental></Fundamental>
        <VariousCourse></VariousCourse>
        <Carousel></Carousel>
       
         <Footer></Footer>
      </div>
    </>
  );
}

export default Pricing;
