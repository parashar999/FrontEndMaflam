import React, { useContext } from "react";
import styles from "./ViewCourses.module.css";
import { HomePageContext } from "../../store/HomePageContext.jsx";
import { useNavigate } from "react-router-dom";

function  ViewCourses() {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);
const navigate = useNavigate()
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const coursesData = homeScreenDetails?.coursesData || [];
  const viewAllCoursesTitle =
    homeScreenDetails?.viewAllCourses?.title || "View All Courses";


    const Courses = ()=>{
      navigate("/prc")
    }

  const getCardClassName = (index) => {
    return `${styles.courseCard} ${styles[`courseCard--${index + 1}`]}`;
  };

  return (
    <div className={styles.viewcoursecontainer}>
    <div className={styles.container}>
      <div className={styles.courseGrid}>
        {coursesData.slice(0,7).map((course, index) => (
          <div
            key={index}
            className={getCardClassName(index)}
            style={{
              backgroundImage: `url(${course.backgroundImage})`,
              backgroundSize: "cover",
              borderRadius:"10px",              
              backgroundPosition: "center",
              fontSize: "15px",
              color: "white",
            }}
          >
          <a href="/prc">   {course.name}</a>
          </div>
        ))}
      </div>
      <div className={styles.btnpadding}>
        <button  onClick={Courses} className={styles.fullWidthButton}>
        <p>  {viewAllCoursesTitle} </p>
        </button>
      </div>
      <div className={styles.playButtonContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" width="190" height="189" viewBox="0 0 190 189" fill="none">
  <rect x="190" y="188.271" width="190" height="187.543" rx="93.7715" transform="rotate(-180 190 188.271)" fill="white" fill-opacity="0.2"/>
  <path d="M82.2246 63.6997L123.282 91.1755C125.65 92.7596 125.65 96.24 123.282 97.8241L82.2246 125.3C79.5669 127.079 76 125.174 76 121.976L76 67.024C76 63.826 79.5669 61.9211 82.2246 63.6997Z" stroke="#39FFFB" stroke-width="2.5"/>
</svg>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.infoText}>
          {coursesData.find((course) => course.title)?.title ||
            "Explore the paths and choose the one that's right for you"}
        </p>
      </div>
    </div>
    </div>
  );
}

export default ViewCourses;
