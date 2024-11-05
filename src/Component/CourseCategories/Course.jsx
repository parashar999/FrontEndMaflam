// import React, { useContext } from "react";
// import { HomePageContext } from "../../store/HomePageContext"; // Import the context
// import styles from "./course.module.css"; // Importing the CSS module
// import { Link } from "react-router-dom";


// const CourseGrid = () => {
//   const { homeScreenDetails, loading, error } = useContext(HomePageContext); // Access the context

//   // Handle loading and error states
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error loading courses: {error.message}</p>;
//   }

//   // Assuming homeScreenDetails contains an array called "specializedCoursesData"
//   const specializedCoursesData = homeScreenDetails?.specializedCoursesData || [];
//   const specializedCoursesDataTitle = homeScreenDetails?.specializedCoursesDataTitle || [];


//   return (
//     <div className={styles.courseContainer}>
//       <div className={styles.coursesContainer}>
//         <h2>{specializedCoursesDataTitle.title}</h2>
//         <div className={styles.coursesGrid}>
//           {specializedCoursesData.map((course, index) => (
//             <div key={index} className={styles.coursesCard}>
//               {/* Render the video using videoUrl */}
//              <Link to="/coursedetails"> 
//               <video
//                  src={course.videoUrl}
//                  autoPlay
//                   // muted
//                 //  controls
//                  loop
//                 //  playsInline
//                 onMouseOver={event=>event.target.autoPlay}
//                  className={styles.coursesImage}
//               />
//               </Link>
//               <div style={{ position:'absolute', bottom:'10px', zIndex:'10'}} >
//               <p ><Link to="/coursedetails"> {course.title}</Link></p>
//               </div>
//               <div className={styles.overlay}></div>
//             </div>
//           ))}
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseGrid;

import React, { useContext, useEffect, useRef } from "react";
import { HomePageContext } from "../../store/HomePageContext";
import styles from "./course.module.css";
import { Link } from "react-router-dom";

const CourseGrid = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

  // Assuming homeScreenDetails contains an array called "specializedCoursesData"
  const specializedCoursesData = homeScreenDetails?.specializedCoursesData || [];
  const specializedCoursesDataTitle = homeScreenDetails?.specializedCoursesDataTitle || {};

  // Initialize refs for each video once, based on the number of courses
  const videoRefs = useRef(specializedCoursesData.map(() => React.createRef()));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(error => {
              console.warn("Video failed to play automatically. User interaction might be required.");
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((videoRef) => {
      if (videoRef.current) observer.observe(videoRef.current);
    });

    // Cleanup observer
    return () => {
      videoRefs.current.forEach((videoRef) => {
        if (videoRef.current) observer.unobserve(videoRef.current);
      });
    };
  }, [videoRefs]);

  // Handle loading and error states
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
                  ref={videoRefs.current[index]}
                  src={course.videoUrl}
                  loop
                  autoPlay
                  className={styles.coursesImage}
                  onMouseOver={event=>event.target.autoPlay}
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
