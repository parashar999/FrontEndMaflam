import React, { useContext } from "react";
import styles from "./HomeHero.module.css";
import { HomePageContext } from "../../store/HomePageContext.jsx";

const HomeHero = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const title =
    homeScreenDetails?.homeScreenDetailsSec1?.title || "Default Title";
  const description =
    homeScreenDetails?.homeScreenDetailsSec1?.description ||
    "Default description";
  const imageUrl = homeScreenDetails?.homeScreenDetailsSec1?.imageUrl || "";
  const signUpText =
    homeScreenDetails?.homeScreenDetailsSec1?.signUpText || "Sign Up";

  return (
    <div className={styles.heroContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title} style={{ fontSize: 45 }}>
          {title}
        </h1>
        <p className={styles.description}>{description}</p>
        {signUpText && (
          <button className={styles.signUpButton}>{signUpText}</button>
        )}
      </div>
      {imageUrl && (
        <div
          className={styles.backgroundImage}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      )}
    </div>
  );
};

export default HomeHero;
