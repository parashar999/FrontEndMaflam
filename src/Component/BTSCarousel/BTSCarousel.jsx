
import React, { useRef, useContext, useState } from "react";
import styles from "./BTSCarousel.module.css";
import { HomePageContext } from "../../store/HomePageContext";
import { Link } from "react-router-dom";

// Sample images import (add your actual images here)
import sampleImage1 from "./../../assets/BTS1.png";
import sampleImage2 from "./../../assets/BTS1.png";
import sampleImage3 from "./../../assets/BTS1.png";
import { SocialMediaPageContext } from "../../store/SocilaMediaPageContext";

const BTSCarousel = () => {
  const { socialMediaPageDetails, loading, error } = useContext(SocialMediaPageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Extract data from the context
  const title = socialMediaPageDetails?.pageDataTitle6?.title || "Behind the Scenes";
  const channels = socialMediaPageDetails?.pageData6 || [];

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
    if (scrolling || currentIndex >= channels.length - 1) return;

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
            {channels.map((channel, index) => (
              <div key={index} className={styles.card}>
                <Link to="/osp">
                  <img src={channel.image} alt={channel.title} className={styles.videobook} />
                  <p className={styles.description}>{channel.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <button className={styles.arrowRight} onClick={scrollRight} disabled={scrolling || currentIndex >= channels.length - 1}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default BTSCarousel;



// import React, { useRef, useContext, useState } from "react";
// import styles from "./BTSCarousel.module.css";
// import { HomePageContext } from "../../store/HomePageContext";
// import { Link } from "react-router-dom";

// // Sample images import (add your actual images here)
// import sampleImage1 from "./../../assets/BTS1.png";
// import sampleImage2 from "./../../assets/BTS1.png";
// import sampleImage3 from "./../../assets/BTS1.png";
// import { SocialMediaPageContext } from "../../store/SocilaMediaPageContext";

// const BTSCarousel = () => {
//   const { socialMediaPageDetails, loading, error } = useContext(SocialMediaPageContext);

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   // Extract data from the context
//   const title = socialMediaPageDetails?.pageDataTitle4?.title || "";
//   const channels = socialMediaPageDetails?.pageData4 || [];
 
//   // Sample images and descriptions array
//   const sampleImages = [sampleImage1, sampleImage2, sampleImage3];
//   const imageDescriptions = [
//     "Tybah Girls Dialogue in Beit Al Sharbatly",
//     "Tybah Girls Dialogue in Beit Al Sharbatly",
//     "Tybah Girls Dialogue in Beit Al Sharbatly",
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
//       <h2>Behind the Scenes of Maflam Events</h2>
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

// export default BTSCarousel;