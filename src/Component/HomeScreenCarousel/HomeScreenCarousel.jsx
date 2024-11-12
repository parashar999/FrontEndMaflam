import React, { useRef, useContext, useState } from "react";
import styles from "./HomeScreenCarousel.module.css";
import { HomePageContext } from "../../store/HomePageContext"; // Import the context
import { Link } from "react-router-dom";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false); // New scrolling state

  // Adding the last element at the start and the first element at the end
  const modifiedVideoUrls = [
    eBookletData.ebookVideoUrl?.[eBookletData.ebookVideoUrl.length - 1],
    ...eBookletData.ebookVideoUrl,
    eBookletData.ebookVideoUrl?.[0]
  ];

  const sliderRef = useRef(null);

  // Function to scroll the slider to the left
  const scrollLeft = () => {
    if (scrolling) return; // Exit if scroll is already in progress

    setScrolling(true); // Lock the scroll
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? modifiedVideoUrls.length - 2 : prevIndex - 1;
      return newIndex;
    });

    sliderRef.current.scrollBy({
      top: 0,
      left: -415, // Adjust this value based on your card width
      behavior: "smooth", // Smooth scroll effect
    });

    // Unlock after animation (adjust 500ms if needed)
    setTimeout(() => setScrolling(false), 500);
  };

  // Function to scroll the slider to the right
  const scrollRight = () => {
    if (scrolling) return; // Exit if scroll is already in progress

    setScrolling(true); // Lock the scroll
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === modifiedVideoUrls.length - 2 ? 0 : prevIndex + 1;
      return newIndex;
    });

    sliderRef.current.scrollBy({
      top: 0,
      left: 415, // Adjust this value based on your card width
      behavior: "smooth", // Smooth scroll effect
    });

    // Unlock after animation
    setTimeout(() => setScrolling(false), 500);
  };

  return (
    <div className={styles.carouselcontainer}>
      <h2>
        <Link className={styles.linking} to="/ebooks">
          {eBookletData.title}
        </Link>
      </h2>
      <div className={styles.carousel}>
        <button className={styles.arrowLeft} onClick={scrollLeft} disabled={scrolling}>
          &rarr;
        </button>
        <div className={styles.roverlay}></div>
        <div className={styles.overlay}></div>
        <div className={styles.sliderContainer} ref={sliderRef}>
          <div className={styles.slider}>

            <div className={styles.card}>
              <Link to="/ebooks">
                <video
                  src={modifiedVideoUrls[modifiedVideoUrls.length - 1]} // Accessing the last element directly
                  muted
                  loop
                  playsInline
                  className={styles.videobook} // Apply styling to video
                  alt="Last Ebook Video"
                />
              </Link>
            </div>
            {modifiedVideoUrls?.map((videoUrl, index) => (
              <div key={index} className={styles.card}>
                <Link to="/ebooks">
                  <video
                    src={videoUrl}
                    muted
                    loop
                    playsInline
                    className={styles.videobook} // Apply styling to video
                    alt={`Ebook Video ${index + 1}`}
                  />
                </Link>
              </div>
            ))}
            <div className={styles.card}>
              <Link to="/ebooks">
                <video
                  src={modifiedVideoUrls[0]} // Accessing the first element directly
                  muted
                  loop
                  playsInline
                  className={styles.videobook} // Apply styling to video
                  alt="First Ebook Video"
                />
              </Link>
            </div>
          </div>
        </div>

        <button className={styles.arrowRight} onClick={scrollRight} disabled={scrolling}>
          &rarr;
        </button>
      </div>
      <div className={styles.contentpara}>
        <p>{eBookletData.description}</p>
      </div>
    </div>
  );
};

export default HomeScreenCarousel;
