import React, { useRef, useContext, useEffect, useState } from "react";
import styles from "./CarouselCommunity.module.css";
import stylesArabic from "./CarouselCommunityArabic.module.css";
import { HomePageContext } from "../../store/HomePageContext";
import Carou from "./../../Component/Carou/Carou.jsx";
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";

const CarouselCommunity = () => {
  const { homeScreenDetails } = useContext(HomePageContext);
  const { language } = useContext(LanguageContext);
  const stylesSelected = language === "ar" ? stylesArabic : styles;

  const successStoriesArray = homeScreenDetails?.maflamCommunity || [];
  const videoItems = successStoriesArray.map((story, index) => ({
    id: index,
    content: (
      <video
        src={story.videoUrl}
        loop
        playsInline
        muted
        controls
        style={{ width: "100%", height: "100%" }}
      />
    ),
  }));

  return (
    <div className={stylesSelected.carouselWrapper}>
      <h2>{successStoriesArray[0]?.title}</h2>
      <Carou
        itemWidth={619}
        itemHeight={417}
        items={videoItems}
        scalingRatio={1.05}
        margin={10} // Pass video items array to Carou
      />
    </div>
  );
};

export default CarouselCommunity;
