

import React, { useContext, useEffect, useRef } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import HeroContact from "../../Component/HeroContact/HeroContact";
import ContactForm from "../../Component/ContactForm/ContactForm";
import MaflanContent from "../../Component/MaflanContent/MaflanContent";
import Footer from "../../Component/Footer/Footer";
import JoinUs from "../../Component/JoinUs/JoinUs";
import styles from "./ContactUsPage2.module.css";
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
import {
  ContactUs2Context,
  ContactUs2ContextProvider,
} from "../../store/ContactUs2Context";

const ContactUsPage2 = () => {
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
      console.log("Home Screen Details:", contactUsContextDetails);
    }
  }, [contactUsContextDetails]);

  const { contactUs2ContextDetails } = useContext(ContactUs2Context);

  useEffect(() => {
    if (contactUs2ContextDetails) {
      console.log("Home Screen Details:", contactUs2ContextDetails);
    }
  }, [contactUs2ContextDetails]);

  // Create a reference for the ContactForm component
  const contactFormRef = useRef(null);

  // Scroll to the ContactForm component after the page loads
  useEffect(() => {
    // Delay the scroll to allow the page to fully load
    setTimeout(() => {
      if (contactFormRef.current) {
        // Scroll the element into view with smooth behavior
        contactFormRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 500); // 500ms delay to ensure the page is loaded

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout();
  }, []);

  return (
    <div>
      <LanguageProvider>
        <AboutusPageProvider>
          <ContactUsContextProvider>
            <ContactUs2ContextProvider>
              <Navbar />
              <div className={styles.container}>
              <HeroContact />
              <div className={styles.contact2} ref={contactFormRef}>
                <ContactForm />
              </div>
              
                <MaflanContent />
                <div className={styles.bottombg}>
                <JoinUs />
             
              <Footer />
              </div>
              </div>
            </ContactUs2ContextProvider>
          </ContactUsContextProvider>
        </AboutusPageProvider>
      </LanguageProvider>
    </div>
  );
};

export default ContactUsPage2;




/* ***************************
 Tarun code Added In Above   
 ************************** */


// import React, { useContext, useEffect, useRef } from "react";
// import Navbar from "../../Component/Navbar/Navbar";
// import HeroContact from "../../Component/HeroContact/HeroContact";
// import ContactForm from "../../Component/ContactForm/ContactForm";
// import MaflanContent from "../../Component/MaflanContent/MaflanContent";
// import Footer from "../../Component/Footer/Footer";
// import JoinUs from "../../Component/JoinUs/JoinUs";
// import styles from "./ContactUsPage2.module.css";
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
// import {
//   ContactUs2Context,
//   ContactUs2ContextProvider,
// } from "../../store/ContactUs2Context";

// const ContactUsPage2 = () => {
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
//       console.log("Home Screen Details:", contactUsContextDetails);
//     }
//   }, [contactUsContextDetails]);

//   const { contactUs2ContextDetails } = useContext(ContactUs2Context);

//   useEffect(() => {
//     if (contactUs2ContextDetails) {
//       console.log("Home Screen Details:", contactUs2ContextDetails);
//     }
//   }, [contactUs2ContextDetails]);

//   // Create a reference for the ContactForm component
//   const contactFormRef = useRef(null);

//   // Scroll to the ContactForm component after the page loads
//   useEffect(() => {
//     // Delay the scroll to allow the page to fully load
//     setTimeout(() => {
//       if (contactFormRef.current) {
//         // Scroll the element into view with smooth behavior
//         contactFormRef.current.scrollIntoView({ behavior: "smooth" });
//       }
//     }, 500); // 500ms delay to ensure the page is loaded

//     // Cleanup the timeout to avoid memory leaks
//     return () => clearTimeout();
//   }, []);

//   return (
//     <div>
//       <LanguageProvider>
//         <AboutusPageProvider>
//           <ContactUsContextProvider>
//             <ContactUs2ContextProvider>
//               <Navbar />
//               <HeroContact />
//               <div className={styles.contact2} ref={contactFormRef}>
//                 <ContactForm />
//               </div>
//               <div className={styles.container}>
//                 <MaflanContent />
//                 <JoinUs />
//               </div>
//               <Footer />
//             </ContactUs2ContextProvider>
//           </ContactUsContextProvider>
//         </AboutusPageProvider>
//       </LanguageProvider>
//     </div>
//   );
// };

// export default ContactUsPage2;
