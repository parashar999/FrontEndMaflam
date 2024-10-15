import React, { useContext } from "react";
import { HomePageContext } from "../../store/HomePageContext"; // Import the context
import styles from "./course.module.css"; // Importing the CSS module


const CourseGrid = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext); // Access the context

  // Handle loading and error states
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading courses: {error.message}</p>;
  }

  // Assuming homeScreenDetails contains an array called "specializedCoursesData"
  const specializedCoursesData = homeScreenDetails?.specializedCoursesData || [];
  const specializedCoursesDataTitle = homeScreenDetails?.specializedCoursesDataTitle || [];


  return (
    <div className={styles.courseContainer}>
      <div className={styles.coursesContainer}>
        <h2>{specializedCoursesDataTitle.title}</h2>
        <div className={styles.coursesGrid}>
          {specializedCoursesData.map((course, index) => (
            <div key={index} className={styles.coursesCard}>
              {/* Render the video using videoUrl */}
              <video
                 src={course.videoUrl}
                 autoPlay
                 muted
                 loop
                 playsInline
                 className={styles.coursesImage}
              />
              <p>{course.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseGrid;
