import React, { useContext, useEffect, useRef } from "react";
import { HomePageContext } from "../../store/HomePageContext";
import styles from "./CourseCategories.module.css";
import { Link, useNavigate } from "react-router-dom";

const CourseCategories = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

  // Assuming homeScreenDetails contains an array called "specializedCoursesData"
  const specializedCoursesData = homeScreenDetails?.specializedCoursesData || [];
  const specializedCoursesDataTitle = homeScreenDetails?.specializedCoursesDataTitle || {};
const navigate = useNavigate()
  // Initialize refs for each video only once
  const videoRefs = useRef([]);

  const handleCourseClick = (courseId) => {
    navigate(`R2/R4/filmproduction/${courseId}`);
  };

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
              <Link to="R2/R3/prc">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={course.videoUrl}
                  loop
                  
                  className={styles.coursesImage}
                />
              </Link>
              <div style={{ position: 'absolute', bottom: '10px', zIndex: '10' }}>
                <p onClick={() => handleCourseClick(course._id)}><Link  >{course.name}</Link></p>

                {/* <button className={styles.btns}  onClick={() => handleCourseClick(course._id)}  > <p>  {course.title}</p></button> */}
              </div>
              <div className={styles.overlay}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCategories;
