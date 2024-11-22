
import React, { useContext, useEffect, useRef } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import HeroContact from "../../Component/HeroContact/HeroContact";
import ContactForm2 from "../../Component/ContactForm2/ContactForm2";
import MaflanContent from "../../Component/MaflanContent/MaflanContent";
import Footer from "../../Component/Footer/Footer";
import JoinUs from "../../Component/JoinUs/JoinUs";
import styles from "./ContactUsPage3.module.css";
import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
import { HomePageProvider } from "../../store/HomePageContext";
import {
  AboutusPageContext,
  AboutusPageProvider,
} from "../../store/AboutUsPageContext";
import {
  ContactUsContext,
  ContactUsContextProvider,
} from "../../store/ContactUsContext";
import { ContactUs3Context } from "../../store/ContactUs3Context";

const ContactUsPage3 = () => {
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
    contactUsContextDetails,
    loading: homeLoading,
    error: homeError,
  } = useContext(ContactUsContext);

  useEffect(() => {
    if (contactUsContextDetails) {
      // console.log("Home Screen Details:", contactUsContextDetails);
    }
  }, [contactUsContextDetails]);

  const { ContactUs3ContextDetails } = useContext(ContactUs3Context);

  useEffect(() => {
    if (ContactUs3ContextDetails) {
      console.log("Home Screen Details:", ContactUs3ContextDetails);
    }
  }, [ContactUs3ContextDetails]);
  return (
      <div>
            <Navbar/>
            <div className={styles.container}>
            <HeroContact></HeroContact>
          
              <div className={styles.contact3}>
                <ContactForm2></ContactForm2>
              </div>
              <MaflanContent></MaflanContent>
              <div className={styles.bottombg}>
              <JoinUs></JoinUs>
              <Footer></Footer>
            </div>
            </div>
    
      </div>
  );
};

export default ContactUsPage3;




/* ***************************
 Tarun code Added In Above   
 ************************** */


// import React, { useContext, useEffect, useRef } from "react";
// import Navbar from "../../Component/Navbar/Navbar";
// import HeroContact from "../../Component/HeroContact/HeroContact";
// import ContactForm2 from "../../Component/ContactForm2/ContactForm2";
// import MaflanContent from "../../Component/MaflanContent/MaflanContent";
// import Footer from "../../Component/Footer/Footer";
// import JoinUs from "../../Component/JoinUs/JoinUs";
// import styles from "./ContactUsPage3.module.css";
// import { LanguageProvider } from "../../Component/LanguageContext/LanguageContext";
// import { HomePageProvider } from "../../store/HomePageContext";
// import {
//   AboutusPageContext,
//   AboutusPageProvider,
// } from "../../store/AboutUsPageContext";
// import {
//   ContactUsContext,
//   ContactUsContextProvider,
// } from "../../store/ContactUsContext";
// import { ContactUs3Context } from "../../store/ContactUs3Context";

// const ContactUsPage3 = () => {
//   const {
//     aboutusScreenDetails,
//     loading: aboutLoading,
//     error: aboutError,
//   } = useContext(AboutusPageContext);

//   // useEffect(() => {
//   //   if (aboutusScreenDetails) {
//   //     console.log("About Us Screen Details:", aboutusScreenDetails);
//   //   }
//   // }, [aboutusScreenDetails]);

//   const {
//     contactUsContextDetails,
//     loading: homeLoading,
//     error: homeError,
//   } = useContext(ContactUsContext);

//   useEffect(() => {
//     if (contactUsContextDetails) {
//       // console.log("Home Screen Details:", contactUsContextDetails);
//     }
//   }, [contactUsContextDetails]);

//   const { ContactUs3ContextDetails } = useContext(ContactUs3Context);

//   useEffect(() => {
//     if (ContactUs3ContextDetails) {
//       console.log("Home Screen Details:", ContactUs3ContextDetails);
//     }
//   }, [ContactUs3ContextDetails]);
//   return (
//       <div>
//             <Navbar/>
//             <HeroContact></HeroContact>
//             <div className={styles.cotainer}>
//               <div className={styles.contact3}>
//                 <ContactForm2></ContactForm2>
//               </div>
//             </div>
//             <div className={styles.container}>
//               <MaflanContent></MaflanContent>
//               <JoinUs></JoinUs>
//             </div>
//             <Footer></Footer>
    
//       </div>
//   );
// };

// export default ContactUsPage3;
