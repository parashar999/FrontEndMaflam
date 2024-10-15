import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext.jsx";

export const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {
  const [homeScreenDetails, setHomeScreenDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { language } = useContext(LanguageContext);

  const fetchHomeScreenDetails = async (langParam) => {
    try {
      const response = await axios.get(
        `http://3.29.25.216:3001/maflam/get-home-screen-details?lang=${langParam}`
      );
      console.log("API Response:", response.data);

      setHomeScreenDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const langParam = language === "ar" ? 0 : 1;
    fetchHomeScreenDetails(langParam);
  }, [language]);

  return (
    <HomePageContext.Provider value={{ homeScreenDetails, loading, error }}>
      {children}
    </HomePageContext.Provider>
  );
};




// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// // Create a context
// export const HomePageContext = createContext();

// // Create a provider component
// export const HomePageProvider = ({ children }) => {
//   const [homeScreenDetails, setHomeScreenDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [language, setLanguage] = useState("ar"); // Default language
//   const [direction, setDirection] = useState("rtl"); // Default direction

//   useEffect(() => {
//     // Update document direction based on language
//     if (language === "ar") {
//       document.body.dir = "rtl";
//       setDirection("rtl");
//     } else {
//       document.body.dir = "ltr";
//       setDirection("ltr");
//     }
//   }, [language]);

//   const toggleLanguage = () => {
//     setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"));
//   };

//   // API call function
//   const fetchHomeScreenDetails = async (lang) => {
//     try {
//       const response = await axios.get(
//         `http://3.29.25.216/maflam/get-home-screen-details?lang=${lang}`
//       );
//       console.log("API Response:", response.data);

//       setHomeScreenDetails(response.data);
//       setLoading(false);
//     } catch (err) {
//       setError(err);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Fetch home screen details based on language (0 for Arabic, 1 for English)
//     fetchHomeScreenDetails(language === "ar" ? 0 : 1);
//   }, [language]);

//   return (
//     <HomePageContext.Provider value={{ language, direction, toggleLanguage, homeScreenDetails, loading, error }}>
//       {children}
//     </HomePageContext.Provider>
//   );
// };
