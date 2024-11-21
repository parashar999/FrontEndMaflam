// import React, { useRef, useContext, useState } from "react";
// import styles from "./HomeScreenCarousel.module.css";
// import { HomePageContext } from "../../store/HomePageContext"; // Import the context
// import { Link } from "react-router-dom";
// import Carou from "../Carou/Carou"; // Import the Carou component

// const HomeScreenCarousel = () => {
//   const { homeScreenDetails, loading, error } = useContext(HomePageContext); // Access the context

//   // Handle loading and error states
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error loading eBooklets: {error.message}</p>;
//   }

//   // Access eBooklet data
//   const eBookletData = homeScreenDetails?.eBookletData || {};
  
//   // Modify the video URLs to loop through
//   const modifiedVideoUrls = [
//     eBookletData.ebookVideoUrl?.[eBookletData.ebookVideoUrl.length - 1],
//     ...eBookletData.ebookVideoUrl,
//     eBookletData.ebookVideoUrl?.[0]
//   ];

//   // Create an array of items that Carou can use
//   const items = modifiedVideoUrls.map((videoUrl, index) => ({
//     id: index,
//     videoSrc: videoUrl,
//     content: (
//       <video
//         src={videoUrl}
//         muted
//         loop
//         playsInline
//         className={styles.videobook}
//         alt={`Ebook Video ${index + 1}`}
//       />
//     )
//   }));

//   return (
//     <div className={styles.carouselcontainer}>
//       <h2 style={{marginBottom:'150px'}}>
//         <Link className={styles.linking} to="/ebooks" >
//           {eBookletData.title}
//         </Link>
//       </h2>

//       {/* Use Carou Component to handle the video carousel */}
//       <Carou 
//         itemWidth={390} // Adjust the width of the video items
//         itemHeight={670} // Adjust the height of the video items
//         items={items} // Pass the video items
//         scalingRatio={1.1}
//         margin={10}
//       />

//       <div className={styles.contentpara}>
//         <p>{eBookletData.description}</p>
//       </div>
//     </div>
//   );
// };

// export default HomeScreenCarousel;



import React, { useContext } from "react";
import styles from "./HomeScreenCarousel.module.css";
import { HomePageContext } from "../../store/HomePageContext"; // Import the context
import { Link } from "react-router-dom";
import Carou from "../Carou/Carou"; // Import the Carou component

const HomeScreenCarousel = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext); // Access the context

  // Handle loading and error states
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading eBooklets: {error.message}</p>;
  }

  // Access eBooklet data
  const eBookletData = homeScreenDetails?.eBookletData || {};
  const eBookletVideos = homeScreenDetails?.eBookletVideo || [];

  // Extract video URLs from eBookletVideo array
  const videoUrls = eBookletVideos.map(video => video.ebookVideoUrl);

  // Modify the video URLs to loop through
  const modifiedVideoUrls = [
    videoUrls[videoUrls.length - 1], // Add the last video at the beginning
    ...videoUrls, // Include all videos
    videoUrls[0] // Add the first video at the end
  ];

  // Create an array of items that Carou can use
  const items = modifiedVideoUrls.map((videoUrl, index) => ({
    id: index,
    videoSrc: videoUrl,
    content: (
      <video
        key={index}
        src={videoUrl}
        muted
        loop
        playsInline
        className={styles.videobook}
        alt={`Ebook Video ${index + 1}`}
      />
    )
  }));

  return (
    <div className={styles.carouselcontainer}>
      <h2 style={{ marginBottom: "150px" }}>
        <Link className={styles.linking} to="/ebooks">
          {eBookletData.title}
        </Link>
      </h2>

      {/* Use Carou Component to handle the video carousel */}
      <Carou
        itemWidth={390} // Adjust the width of the video items
        itemHeight={670} // Adjust the height of the video items
        items={items} // Pass the video items
        scalingRatio={1.1}
        margin={10}
      />

      <div className={styles.contentpara}>
        <p>{eBookletData.description}</p>
      </div>
    </div>
  );
};

export default HomeScreenCarousel;
