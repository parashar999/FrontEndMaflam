import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext.jsx";

export const TermsAndConditions = createContext();

export const TermsAndConditionsPageProvider = ({ children }) => {
  const [termsAndConditionsDetails, setTermsAndConditionsDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { language } = useContext(LanguageContext);

  const fetchTermsAndConditionsDetails = async (langParam) => {
    try {
      const response = await axios.get(
        // `http://3.29.25.216:3001/maflam/get-home-screen-details?lang=${langParam}`
        `http://192.168.1.39:3001/maflam/get-home-screen-details?lang${langParam}`
        // 40.172.19.83
      );
      console.log("API Response:", response.data);

      setTermsAndConditionsDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const langParam = language === "ar" ? 0 : 1;
    fetchTermsAndConditionsDetails(langParam);
  }, [language]);

  return (
    <TermsAndConditions.Provider value={{termsAndConditionsDetails, loading, error }}>
      {children}
    </TermsAndConditions.Provider>
  );
};
