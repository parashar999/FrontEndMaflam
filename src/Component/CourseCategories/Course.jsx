import React, { useContext, useEffect, useRef } from "react";
import { HomePageContext } from "../../store/HomePageContext";
import styles from "./course.module.css";
import { Link } from "react-router-dom";

const CourseGrid = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

  // Assuming homeScreenDetails contains an array called "specializedCoursesData"
  const specializedCoursesData = homeScreenDetails?.specializedCoursesData || [];
  const specializedCoursesDataTitle = homeScreenDetails?.specializedCoursesDataTitle || {};

  // Initialize refs for each video only once
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, specializedCoursesData.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch((error) => {
              console.warn("Video failed to play automatically:", error);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((videoRef) => {
      if (videoRef) observer.observe(videoRef);
    });

    return () => {
      videoRefs.current.forEach((videoRef) => {
        if (videoRef) observer.unobserve(videoRef);
      });
    };
  }, [specializedCoursesData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading courses: {error.message}</p>;
  }

  return (
    <div className={styles.courseContainer}>
      <div className={styles.coursesContainer}>
        <h2>{specializedCoursesDataTitle.title}</h2>
        <div className={styles.coursesGrid}>
          {specializedCoursesData.map((course, index) => (
            <div key={index} className={styles.coursesCard}>
              <Link to="/coursedetails">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={course.videoUrl}
                  loop
                  
                  className={styles.coursesImage}
                />
              </Link>
              <div style={{ position: 'absolute', bottom: '10px', zIndex: '10' }}>
                <p><Link to="/coursedetails">{course.title}</Link></p>
              </div>
              <div className={styles.overlay}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseGrid;
