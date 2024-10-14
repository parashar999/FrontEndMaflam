import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create a context
export const HomePageContext = createContext();

// Create a provider component
export const HomePageProvider = ({ children }) => {
  const [homeScreenDetails, setHomeScreenDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API call function
  const fetchHomeScreenDetails = async () => {
    try {
      const response = await axios.get(
        "http://3.29.25.216:3001/maflam/get-home-screen-details?lang=0"
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
    fetchHomeScreenDetails();
  }, []);

  return (
    <HomePageContext.Provider value={{ homeScreenDetails, loading, error }}>
      {children}
    </HomePageContext.Provider>
  );
};
