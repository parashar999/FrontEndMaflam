import PricingPage from "../../Component/PricingPage/PricingPage";
import Fundamental from "../../Component/FundamentalPackage/Fundamental";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import Carousel from "../../Component/CarouselCard/Carousel";
import VariousCourse from "../../Component/VariousCourse/VariousCourse";



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
