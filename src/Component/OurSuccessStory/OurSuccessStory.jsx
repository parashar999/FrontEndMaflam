import React, { useRef, useContext, useEffect,useState } from "react";
import styles from "./OurSuccessStory.module.css";
import { HomePageContext } from "../../store/HomePageContext"; // Import the context


// const OurSuccessStory = () => {
//   const { homeScreenDetails, loading, error } = useContext(HomePageContext); // Access the context

//   // Handle loading and error states
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error loading success stories: {error.message}</p>;
//   }

//   // Access success stories data (array)
//   const successStoriesArray = homeScreenDetails?.successStoriesArray || [];

//   useEffect(() => {
//     console.log("successStoriesArray:", successStoriesArray); // Debugging output
//   }, [successStoriesArray]);

//   const sliderRef = useRef(null);

//   const scrollLeft = () => {
//     sliderRef.current.scrollBy({
//       top: 0,
//       left: -700,
//       behavior: "smooth",
//     });
//   };

//   const scrollRight = () => {
//     sliderRef.current.scrollBy({
//       top: 0,
//       left: 700,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className={styles.carouselWrapper}>
//       <h2>{successStoriesArray[0].title}</h2>
//       <div className={styles.carousel}>
//         <button className={styles.carouselArrowLeft} onClick={scrollLeft}>
//           &larr;
//         </button>

//         <div className={styles.carouselSliderContainer} ref={sliderRef}>
//           <div className={styles.carouselSlider}>
//           <div className={styles.roverlay}></div>
//           <div className={styles.overlay}></div>
//             {successStoriesArray.map((story, index) => (
//               <div key={index} className={styles.carouselCard}>
//                 {/* Render the video */}
//                 <video
//                   src={story.videoUrl}
//                   // autoPlay
//                   muted
//                   loop
//                   playsInline
//                   controls
//                   className={styles.carouselVideo}
//                   alt={story.title}
//                 />
//                 {/* Display the title */}
//               </div>
//             ))}
//           </div>
//         </div>

//         <button className={styles.carouselArrowRight} onClick={scrollRight}>
//           &rarr;
//         </button>
//       </div>
//     </div>
//   );
// };

const OurSuccessStory = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading success stories: {error.message}</p>;
  }

  const successStoriesArray = homeScreenDetails?.successStoriesArray || [];
  const totalElements = successStoriesArray.length;

  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width

  useEffect(() => {
    console.log("successStoriesArray:", successStoriesArray);
  }, [successStoriesArray]);

  // Update window width state on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      sliderRef.current.scrollBy({
        top: 0,
        left: -625,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (currentIndex < totalElements - 2) {
      setCurrentIndex(currentIndex + 1);
      sliderRef.current.scrollBy({
        top: 0,
        left: 625,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.carouselWrapper}>
      <h2>{successStoriesArray[0]?.title}</h2>
      <div className={styles.carousel}>
        <button
          className={styles.carouselArrowLeft}
          onClick={scrollLeft}
          disabled={currentIndex === 0}
        >
          &larr;
        </button>

        <div className={styles.carouselSliderContainer} ref={sliderRef}>
          <div className={styles.carouselSlider}>
            <div className={styles.roverlay}></div>
            <div className={styles.overlay}></div>
            {successStoriesArray.length > 0 && (
              <div className={styles.carouselCard}>
                <video
                  src={successStoriesArray.at(-1).videoUrl}
                  muted
                  loop
                  playsInline
                  controls
                  className={styles.carouselVideo}
                  alt={successStoriesArray.at(-1).title}
                />
              </div>
            )}
            {successStoriesArray.map((story, index) => (
              <div key={index} className={styles.carouselCard}>
                <video
                  src={story.videoUrl}
                  muted
                  loop
                  playsInline
                  controls
                  className={styles.carouselVideo}
                  alt={story.title}
                />
              </div>
            ))}
            {successStoriesArray.length > 0 && (
              <div className={styles.carouselCard}>
                <video
                  src={successStoriesArray[0].videoUrl}
                  muted
                  loop
                  playsInline
                  controls
                  className={styles.carouselVideo}
                  alt={successStoriesArray[0].title}
                />
              </div>
            )}
          </div>
        </div>

        <button
          className={styles.carouselArrowRight}
          onClick={scrollRight}
          disabled={currentIndex >= totalElements - 2}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};



export default OurSuccessStory;
