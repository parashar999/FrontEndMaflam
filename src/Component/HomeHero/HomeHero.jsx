import React, { useContext } from "react";
import styles from "./HomeHero.module.css";
import { HomePageContext } from "../../store/HomePageContext.jsx"; // Import the context

const HomeHero = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Ensure that the API data exists before rendering
  const titleDescriptionLogo =
    homeScreenDetails?.homeScreenDetailsSec1?.titleDescriptionLogo;
  const signUpText = homeScreenDetails?.homeScreenDetailsSec1?.signUpText;

  return (
    <div className={styles.heroContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        {/* Dynamically render the title and description */}
        <h1 className={styles.title} style={{ fontSize: 45 }}>
          {titleDescriptionLogo?.title || "Default Title"}
        </h1>
        <p className={styles.description}>
          {titleDescriptionLogo?.description || "Default description"}
        </p>

        {/* Render sign-up text if available */}
        {signUpText && (
          <button className={styles.signUpButton}>{signUpText}</button>
        )}
      </div>
      <div className={styles.backgroundImage}></div>
    </div>
  );
};

export default HomeHero;
