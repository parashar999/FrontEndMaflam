import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext";
export const FilmProductionContext = createContext();

export const FilmProductionProvider = ({ children }) => {
  const [filmproductionScreenDetails, setFilmproductionScreenDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { language } = useContext(LanguageContext);

  const fetchFilmProductionScreenDetails = async (langParam) => {
    try {
    
    const response = await axios.get(`https://backend.maflam.com/maflam/get-course-page-3?lang=${langParam}&&_id=6718da57daa8cddd1deb614a`
    
      );
      console.log("API Response: for filmproduction ", response.data);



      setFilmproductionScreenDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const langParam = language === "ar" ? 0 : 1;
    fetchFilmProductionScreenDetails(langParam);
  }, [language]);

  return (
    <FilmProductionContext.Provider value={{ filmproductionScreenDetails, loading, error }}>
      {children}
    </FilmProductionContext.Provider>
  );
};
