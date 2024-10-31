import React, { useRef, useContext, useEffect } from "react";
import styles from "./OurSuccessStory.module.css";
import { HomePageContext } from "../../store/HomePageContext"; // Import the context

const OurSuccessStory = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext); // Access the context

  // Handle loading and error states
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading success stories: {error.message}</p>;
  }

  // Access success stories data (array)
  const successStoriesArray = homeScreenDetails?.successStoriesArray || [];

  useEffect(() => {
    console.log("successStoriesArray:", successStoriesArray); // Debugging output
  }, [successStoriesArray]);

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      top: 0,
      left: -25,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      top: 0,
      left: 25,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.carouselWrapper}>
      <h2>{successStoriesArray[0].title}</h2>
      <div className={styles.carousel}>
        <button className={styles.carouselArrowLeft} onClick={scrollLeft}>
          &larr;
        </button>

        <div className={styles.carouselSliderContainer} ref={sliderRef}>
          <div className={styles.carouselSlider}>
          <div className={styles.roverlay}></div>
          <div className={styles.overlay}></div>
            {successStoriesArray.map((story, index) => (
              <div key={index} className={styles.carouselCard}>
                {/* Render the video */}
                <video
                  src={story.videoUrl}
                  // autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className={styles.carouselVideo}
                  alt={story.title}
                />
                {/* Display the title */}
              </div>
            ))}
          </div>
        </div>

        <button className={styles.carouselArrowRight} onClick={scrollRight}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default OurSuccessStory;
