import React, { useRef, useContext, useEffect, useState } from "react";
import styles from "./OurSuccessStory.module.css";
import stylesArabic from "./OurSuccessStoryArabic.module.css";
import { HomePageContext } from "../../store/HomePageContext";
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";

const OurSuccessStory = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);
  const { language } = useContext(LanguageContext);
  const stylesSelected = language === "ar" ? stylesArabic : styles;

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const successStoriesArray = homeScreenDetails?.maflamCommunity || [];
  const totalElements = successStoriesArray.length;

  const sliderRef = useRef(null);
  const videoRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the video is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    }, observerOptions);

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [successStoriesArray]);

  const scrollLeft = () => {
    if (currentIndex > 0 && !isScrolling) {
      setIsScrolling(true); // Mark scrolling as started
      setCurrentIndex(currentIndex - 1);
      sliderRef.current.scrollBy({
        top: 0,
        left: -629,
        behavior: "smooth",
      });
      setTimeout(() => setIsScrolling(false), 600); // Adjust timeout to match scroll animation duration
    }
  };

  const scrollRight = () => {
    if (currentIndex < totalElements - 1 && !isScrolling) {
      setIsScrolling(true); // Mark scrolling as started
      setCurrentIndex(currentIndex + 1);
      sliderRef.current.scrollBy({
        top: 0,
        left: 629,
        behavior: "smooth",
      });
      setTimeout(() => setIsScrolling(false), 600); // Adjust timeout to match scroll animation duration
    }
  };

  return (
    <div className={stylesSelected.carouselWrapper}>
      <h2>{successStoriesArray[0]?.title}</h2>
      <div className={styles.carousel}>
        <button
          className={stylesSelected.carouselArrowLeft}
          onClick={scrollLeft}
          disabled={currentIndex === 0 || isScrolling} // Disable button if scrolling
        >
          &larr;
        </button>

        <div className={stylesSelected.carouselSliderContainer} ref={sliderRef}>
          <div className={stylesSelected.carouselSlider}>
            <div className={stylesSelected.roverlay}></div>
            <div className={stylesSelected.overlay}></div>
            {successStoriesArray.slice(-1).map((story, index) => (
              <div key={index} className={stylesSelected.carouselCard}>
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={story.videoUrl}
                  loop
                  playsInline
                  muted
                  controls
                  className={stylesSelected.carouselVideo}
                  alt={story.title}
                />
              </div>
            ))}
            {successStoriesArray.map((story, index) => (
              <div key={index} className={stylesSelected.carouselCard}>
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={story.videoUrl}
                  loop
                  playsInline
                  muted
                  controls
                  
                  className={stylesSelected.carouselVideo}
                  alt={story.title}
                />
              </div>
            ))}
            {successStoriesArray.slice(0, 1).map((story, index) => (
              <div key={index} className={stylesSelected.carouselCard}>
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={story.videoUrl}
                  loop
                  muted
                  controls
                  playsInline
                  className={stylesSelected.carouselVideo}
                  alt={story.title}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className={stylesSelected.carouselArrowRight}
          onClick={scrollRight}
          disabled={currentIndex >= totalElements - 1 || isScrolling} // Disable button if scrolling
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default OurSuccessStory;
