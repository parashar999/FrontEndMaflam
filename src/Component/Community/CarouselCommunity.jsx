import React, { useRef, useContext, useEffect,useState } from "react";
import styles from "./CarouselCommunity.module.css";
import stylesArabic from "./CarouselCommunityArabic.module.css";
import { HomePageContext } from "../../store/HomePageContext"; // Import the context
import { LanguageContext } from "../../Component/LanguageContext/LanguageContext.jsx";

// const CarouselCommunity = () => {
//   const { homeScreenDetails, loading, error } = useContext(HomePageContext); // Access the context

//   // Handle loading and error states
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error loading success stories: {error.message}</p>;
//   }

//   // Access success stories data (array)
//   const successStoriesArray = homeScreenDetails?.maflamCommunity || [];

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
//       top: 100,
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
//             {successStoriesArray.length > 0 ? (
//               successStoriesArray.map((story, index) => (
//                 <div key={index} className={styles.carouselCard}>
//                   {/* Render the video */}
//                   <video
//                     src={story.videoUrl}
//                     // autoPlay
//                     muted
//                     loop
//                     controls
//                     playsInline
//                     className={styles.carouselVideo}
//                   />
//                   {/* Display the title */}
//                   {/* <p>{story.title}</p> */}
//                 </div>
//               ))
//             ) : (
//               <p>No success stories available</p>
//             )}
//           </div>
//         </div>

//         <button className={styles.carouselArrowRight} onClick={scrollRight}>
//           &rarr;
//         </button>
//       </div>
//     </div>
//   );
// };

const CarouselCommunity = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext); // Access the context
  const { language} = useContext(LanguageContext);
  // Handle loading and error states
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading success stories: {error.message}</p>;
  }
  const stylesSelected = language === "ar"?stylesArabic:styles;

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

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  // Access success stories data (array)
  const successStoriesArray = homeScreenDetails?.maflamCommunity || [];
  const totalElements = successStoriesArray.length;

  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    console.log("successStoriesArray:", successStoriesArray); // Debugging output
  }, [successStoriesArray]);

  const scrollLeft = () => {
    if (currentIndex > -1) {
      setCurrentIndex(currentIndex - 1);
      sliderRef.current.scrollBy({
        top: 0,
        left: -625,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (currentIndex < totalElements-1) {
      setCurrentIndex(currentIndex + 1);
      sliderRef.current.scrollBy({
        top: 0,
        left: 625,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={stylesSelected.carouselWrapper}>
      <h2>{successStoriesArray[0].title}</h2>
      <div className={styles.carousel}>
      <button
          className={stylesSelected.carouselArrowLeft}
          onClick={scrollLeft}
          disabled={currentIndex === 0}
        >
          &larr;
        </button>
        
        <div className={stylesSelected.carouselSliderContainer} ref={sliderRef}>
          <div className={stylesSelected.carouselSlider}>
            <div className={stylesSelected.roverlay}></div>
            <div className={stylesSelected.overlay}></div>
            {successStoriesArray.length > 0 && (
              <div className={stylesSelected.carouselCard}>
                <video
                  src={successStoriesArray.at(-1).videoUrl}
                  muted
                  loop
                  playsInline
                  controls
                  className={stylesSelected.carouselVideo}
                  alt={successStoriesArray.at(-1).title}
                />
              </div>
            )}
            {successStoriesArray.map((story, index) => (
              <div key={index} className={stylesSelected.carouselCard}>
                <video
                  src={story.videoUrl}
                  muted
                  loop
                  playsInline
                  controls
                  className={stylesSelected.carouselVideo}
                  alt={story.title}
                />
              </div>
            ))}
            {successStoriesArray.length > 0 && (
              <div className={stylesSelected.carouselCard}>
                <video
                  src={successStoriesArray[0].videoUrl}
                  muted
                  loop
                  playsInline
                  controls
                  className={stylesSelected.carouselVideo}
                  alt={successStoriesArray[0].title}
                />
              </div>
            )}
          </div>
        </div>

        <button
          className={stylesSelected.carouselArrowRight}
          onClick={scrollRight}
          disabled={currentIndex >= totalElements - 2}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};



export default CarouselCommunity;
