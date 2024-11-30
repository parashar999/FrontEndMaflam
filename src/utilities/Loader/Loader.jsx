// Loader.js
import React, { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const Loader = ({ isLoading, timeout = 5000 }) => {
  const [showLoader, setShowLoader] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, timeout);

      return () => clearTimeout(timer); // Cleanup the timer if unmounted
    }
  }, [isLoading, timeout]);

  if (!showLoader) return null;

  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        top:"0px",
        left:"0px",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
        backgroundColor: "black",
        opacity: 0.99,
      }}
      className="loader"
    >
      <PacmanLoader color="#39FFFB" size={100} speedMultiplier={2} />
    </div>
  );
};

export default Loader;
