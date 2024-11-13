import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../Component/LanguageContext/LanguageContext";

export const FilmProductionContext = createContext();

export const FilmProductionProvider = ({ children }) => {
  const { language } = useContext(LanguageContext);
  const { courseId } = useParams(); // Get courseId from URL
  const [filmproductionScreenDetails, setFilmproductionScreenDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFilmProductionScreenDetails = async (langParam) => {
    try {
      const response = await axios.get(
        `https://backend.maflam.com/maflam/get-courses-by-id?lang=${langParam}&&_id=${courseId}`
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
    if (courseId) {
      const langParam = language === "ar" ? 0 : 1;
      fetchFilmProductionScreenDetails(langParam);
    }
  }, [language, courseId]);

  return (
    <FilmProductionContext.Provider value={{ filmproductionScreenDetails, loading, error }}>
      {children}
    </FilmProductionContext.Provider>
  );
};
