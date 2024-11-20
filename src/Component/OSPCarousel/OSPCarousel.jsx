



import React, { useRef, useContext, useState } from "react";
import styles from "./OSPCarousel.module.css";
import { SocialMediaPageContext } from "../../store/SocilaMediaPageContext";
import { Link } from "react-router-dom";

const OSPCarousel = () => {
  const { socialMediaPageDetails, loading, error } = useContext(SocialMediaPageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Extract data from the context
  const title = socialMediaPageDetails?.pageDataTitle2?.title || "Invest in Yourself and Start Your Journey in Learning Filmmaking";
  const images = socialMediaPageDetails?.pageDataImg2 || [];
  const description = socialMediaPageDetails?.pageDatades2?.description || "";
  const moreText = socialMediaPageDetails?.pageDatades2?.text || "For more episodes";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const sliderRef = useRef(null);

  // Width of each item (adjust as needed based on styling or container size)
  const itemWidth = 465;

  // Scroll left function
  const scrollLeft = () => {
    if (scrolling || currentIndex <= 0) return;

    setScrolling(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);

    sliderRef.current.scrollBy({ top: 0, left: -itemWidth, behavior: "smooth" });

    setTimeout(() => setScrolling(false), 500);
  };

  // Scroll right function
  const scrollRight = () => {
    if (scrolling || currentIndex >= images.length - 1) return;

    setScrolling(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);

    sliderRef.current.scrollBy({ top: 0, left: itemWidth, behavior: "smooth" });

    setTimeout(() => setScrolling(false), 500);
  };

  return (
    <div className={styles.carouselcontainer}>
      <h2>{title}</h2>
      <div className={styles.carousel}>
        <div className={styles.overlay}></div>
        <div className={styles.roverlay}></div>
        <button className={styles.arrowLeft} onClick={scrollLeft} disabled={scrolling || currentIndex <= 0}>
          &larr;
        </button>
        <div className={styles.sliderContainer} ref={sliderRef}>
          <div className={styles.slider}>
            {images.map((imageObj, index) => (
              <div key={index} className={styles.card}>
                <Link to="/osp">
                  <img src={imageObj.image} alt={`OSP Image ${index + 1}`} className={styles.videobook} />
                  <p className={styles.description}>{description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <button className={styles.arrowRight} onClick={scrollRight} disabled={scrolling || currentIndex >= images.length - 1}>
          &rarr;
        </button>
      </div>
      <p className={styles.moreText}>{moreText}</p>
    </div>
  );
};

export default OSPCarousel;



// import React, { useRef, useContext, useState } from "react";
// import styles from "./OSPCarousel.module.css";
// import { HomePageContext } from "../../store/HomePageContext";
// import { Link } from "react-router-dom";

// // Sample images import (add your actual images here)
// import sampleImage1 from "./../../assets/OSP3.png";
// import sampleImage2 from "./../../assets/OSP2.png";
// import sampleImage3 from "./../../assets/OSP3.png";
// import { SocialMediaPageContext } from "../../store/SocilaMediaPageContext";

// const OSPCarousel = () => {
//   // const { homeScreenDetails, loading, error } = useContext(HomePageContext);

//   // if (loading) {
//   //   return <p>Loading...</p>;
//   // }

//   // if (error) {
//   //   return <p>Error loading images: {error.message}</p>;
//   // }

//   const { socialMediaPageDetails, loading, error } = useContext(SocialMediaPageContext);

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   // Extract data from the context
//   const title = socialMediaPageDetails?.pageDataTitle2?.title || "nvest in Yourself and Start Your Journey in Learning Filmmaking";
//   const description = socialMediaPageDetails?.pageDataImg2?.image || "";
//   const platforms = socialMediaPageDetails?.pageData1?.category[0] || [];
//   const platforms1 = socialMediaPageDetails?.pageData1?.category[1] || [];
//   const platforms2 = socialMediaPageDetails?.pageData1?.category[2] || [];

//   // Sample images and descriptions array
//   const sampleImages = [sampleImage1, sampleImage2, sampleImage3];
//   const imageDescriptions = [
//     "A program presented by filmmaker Zakaria Al-Basheer, in which he briefly explains important tips for all aspiring filmmakers in all stages of filmmaking.",
//     "A program presented by filmmaker Zakaria Al-Basheer, in which he briefly explains important tips for all aspiring filmmakers in all stages of filmmaking.",
//     "A program presented by filmmaker Zakaria Al-Basheer, in which he briefly explains important tips for all aspiring filmmakers in all stages of filmmaking.",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [scrolling, setScrolling] = useState(false);
//   const sliderRef = useRef(null);

//   // Width of each item (adjust as needed based on styling or container size)
//   const itemWidth = 465;

//   // Scroll left function
//   const scrollLeft = () => {
//     if (scrolling || currentIndex <= 0) return;

//     setScrolling(true);
//     setCurrentIndex((prevIndex) => prevIndex - 1);

//     sliderRef.current.scrollBy({ top: 0, left: -itemWidth, behavior: "smooth" });

//     setTimeout(() => setScrolling(false), 500);
//   };

//   // Scroll right function
//   const scrollRight = () => {
//     if (scrolling || currentIndex >= sampleImages.length - 1) return;

//     setScrolling(true);
//     setCurrentIndex((prevIndex) => prevIndex + 1);

//     sliderRef.current.scrollBy({ top: 0, left: itemWidth, behavior: "smooth" });

//     setTimeout(() => setScrolling(false), 500);
//   };

//   return (
//     <div className={styles.carouselcontainer}>
//       <h2>{title}</h2>
//       <div className={styles.carousel}>
//         <div className={styles.overlay}></div>
//         <div className={styles.roverlay}></div>
//         <button className={styles.arrowLeft} onClick={scrollLeft} disabled={scrolling || currentIndex <= 0}>
//           &larr;
//         </button>
//         <div className={styles.sliderContainer} ref={sliderRef}>
//           <div className={styles.slider}>
//             {sampleImages.map((imageUrl, index) => (
//               <div key={index} className={styles.card}>
//                 <Link to="/osp">
//                   <img src={imageUrl} alt={`OSP Image ${index + 1}`} className={styles.videobook} />
//                   <p className={styles.description}>{imageDescriptions[index]}</p>
//                 </Link>
//               </div>
//             ))}
//             {sampleImages.map((imageUrl, index) => (
//               <div key={index} className={styles.card}>
//                 <Link to="/osp">
//                   <img src={imageUrl} alt={`OSP Image ${index + 1}`} className={styles.videobook} />
//                   <p className={styles.description}>{imageDescriptions[index]}</p>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button className={styles.arrowRight} onClick={scrollRight} disabled={scrolling || currentIndex >= sampleImages.length - 1}>
//           &rarr;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OSPCarousel;