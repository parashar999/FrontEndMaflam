import React, { useContext } from "react";
import stylesArabic from "./HomeHero.module.css";
import styles from "./HomeHero_arabic.module.css";
import { HomePageContext } from "../../store/HomePageContext.jsx";
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";

const HomeHero = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);
  const { language } = useContext(LanguageContext);

  const stylesSelected = language === "ar" ? styles : stylesArabic;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const {
    title = "Default Title",
    description = "Default description",
    videoUrl = "",
  } = homeScreenDetails?.homeScreenDetailsSec1 || {};

  return (
    <div className={stylesSelected.herosection}>
      <div className={stylesSelected.heroContainer}>
        {videoUrl && (
          <video
            className={stylesSelected.backgroundVideo}
            src={videoUrl}
            autoPlay
            muted
            loop
          />
        )}
        <div className={stylesSelected.overlay}></div>
        <div className={stylesSelected.rightoverlay}></div>
        <div className={stylesSelected.leftoverlay}></div>
        <div className={stylesSelected.content}>
          <h1 className={stylesSelected.title}>{title}</h1>
          <p className={stylesSelected.description}>{description}</p>
          {/* Uncomment if you wish to include the sign-up button */}
          {/* {signUpText && <button className={stylesSelected.signUpButton}>{signUpText}</button>} */}
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
