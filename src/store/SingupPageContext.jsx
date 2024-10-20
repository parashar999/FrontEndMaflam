import React, {  useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext";
// import { LanguageContext } from "../Component/LanguageContext/LanguageContext.jsx";

export const SingupPageContext= createContext();

export const SingupPageContextProvider = ({ children }) => {
  const [singupPageContextDetails, setSingupPageContextDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { language } = useContext(LanguageContext);

  const fetchSingupPageContextDetails = async (langParam) => {
    try {
   
   
    // const response = await axios.get(`http://192.168.1.39:3001/maflam/getEBooks?lang=${langParam}`
       const response = await axios.get(`https://prominenttrades.in/maflam/get-SignUp-Details?lang=${langParam}`

      );
      console.log("API Response: login  ", response.data);



      setSingupPageContextDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const langParam = language === "ar" ? 0 : 1;
    fetchSingupPageContextDetails(langParam);
  }, [language]);

  return (
    <SingupPageContext.Provider value={{ singupPageContextDetails, loading, error }}>
      {children}
    </SingupPageContext.Provider>
  );
};
