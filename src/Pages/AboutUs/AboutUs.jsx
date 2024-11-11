import React, { useContext, useEffect } from "react";
import Filmmaker from "../../Component/Filmmaker/Filmmaker";
import Footer from "../../Component/Footer/Footer";
import JoinUs from "../../Component/JoinUs/JoinUs";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import MaflamCard from "../../Component/MaflamCard/MaflamCard";
import MaflamImageOffer from "../../Component/MaflamImageOffer/MaflamImageOffer";
import MaflamInstructors from "../../Component/MaflamInstructors/MaflamInstructors";
import MaflanContent from "../../Component/MaflanContent/MaflanContent";
import Navbar from "../../Component/Navbar/Navbar";
import OurVisionData from "../../Component/OurVisionData/OurVisionData";
import styles from "./AboutUs.module.css";
import {
  HomePageContext,
  HomePageProvider,
} from "../../store/HomePageContext.jsx";
import {
  AboutusPageContext,
  AboutusPageProvider,
} from "../../store/AboutUsPageContext.jsx";

export default function AboutUs() {
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

  return (
    <LanguageProvider>
      <HomePageProvider>
        <AboutusPageProvider>
          <div className={styles.container}>
            <Navbar />
            <div className={styles.AboutUsbg}>
              <Filmmaker />
              <OurVisionData />
            </div>
            <MaflamImageOffer />
            <MaflamInstructors />
            <MaflamCard />
            <MaflanContent />
            <JoinUs />
            <Footer />
          </div>
        </AboutusPageProvider>
      </HomePageProvider>
    </LanguageProvider>
  );
}

// import Filmmaker from "../../Component/Filmmaker/Filmmaker";

// import Footer from "../../Component/Footer/Footer";
// import JoinUs from "../../Component/JoinUs/JoinUs";
// import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";

// import MaflamCard from "../../Component/MaflamCard/MaflamCard";
// import MaflamImageOffer from "../../Component/MaflamImageOffer/MaflamImageOffer";
// import MaflamInstructors from "../../Component/MaflamInstructors/MaflamInstructors";
// import MaflanContent from "../../Component/MaflanContent/MaflanContent";
// import Navbar from "../../Component/Navbar/Navbar";
// import OurVisionData from "../../Component/OurVisionData/OurVisionData";

// import styles from  "./AboutUs.module.css"
// import {
//   HomePageContext,
//   HomePageProvider,
// } from "../../store/HomePageContext.jsx";
// import { useContext, useEffect } from "react";
// import { AboutusPageContext } from "../../store/AboutUsPageContext.jsx";

// export default function AboutUs() {
//   const {  homeScreenDetails, loading, error } = useContext(HomePageContext);

//   useEffect(() => {
//     if (homeScreenDetails) {
//       console.log("Home Screen Details:", homeScreenDetails);

//     }
//   }, [homeScreenDetails]);

//   const {  aboutusScreenDetails, loading, error  } = useContext(AboutusPageContext);

//   useEffect(() => {
//     if (aboutusScreenDetails) {
//       console.log("Home Screen Details:", aboutusScreenDetails);

//     }
//   }, [aboutusScreenDetails]);
//   return (
//     <LanguageProvider>
//            <HomePageProvider>

// <AboutusPageProvider>
//     <div className={styles.container} >
//         <Navbar></Navbar>

//         <Filmmaker></Filmmaker>
//         <OurVisionData></OurVisionData>

//      <MaflamImageOffer></MaflamImageOffer>
//         {/* <VariousCourse></VariousCourse> */}

//         <MaflamInstructors></MaflamInstructors>
//         <MaflamCard></MaflamCard>
//         <MaflanContent></MaflanContent>
//         <JoinUs></JoinUs>
//         <Footer></Footer>

//     </div>
//     </AboutusPageProvider>
//     </HomePageProvider>
//      </LanguageProvider>
//   )
// }
