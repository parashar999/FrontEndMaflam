import React, { useRef, useContext, useEffect, useState } from "react";
import stylesSelected from "./OurSuccessStory.module.css";
import { HomePageContext } from "../../store/HomePageContext";
import Carou from "./../../Component/Carou/Carou.jsx";
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";

const OurSuccessStory = () => {
  const { homeScreenDetails } = useContext(HomePageContext);
  const { language } = useContext(LanguageContext);

  const successStoriesArray = homeScreenDetails?.maflamCommunity || [];
  const videoItems = successStoriesArray.map((story, index) => ({
    id: index,
    color: "#4D96FF", // Or any default color
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
        scalingRatio={1.02} 
        margin={0}// ass video items array to Carou
      />
    </div>
  );
};

export default OurSuccessStory;
