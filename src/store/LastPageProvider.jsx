import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const LastPageContext = createContext();

export const LastPageProvider = ({ children }) => {
  const location = useLocation();
  const [lastPage, setLastPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    setLastPage(currentPage); // Update lastPage with the currentPage before location changes
    setCurrentPage(location.pathname); // Update the current page to the new location
    console.log(lastPage);
  }, [location]);

  return (
    <LastPageContext.Provider value={lastPage}>
      {children}
    </LastPageContext.Provider>
  );
};

export const useLastPage = () => {
  return useContext(LastPageContext);
};
