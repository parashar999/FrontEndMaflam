
import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import styles from './ViewCourses.module.css'; 
import { CoursesData } from '../../assets/assests';

function ViewCourses() {
  const getCardClassName = (index) => {
    return `${styles.courseCard} ${styles[`courseCard--${index + 1}`]}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.courseGrid}>
        {CoursesData.map((course, index) => (
          <div
            key={index}
            className={getCardClassName(index)}
            style={{
              backgroundImage: course.backgroundImage,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              fontSize : "15px",
              color: 'white', 
            }}
          >
            {course.name}
          </div>
        ))}
      </div>
      <button className={styles.fullWidthButton}>View All Courses</button>
      <div className={styles.playButtonContainer}>
        <button className={styles.playButton}>
          <CiPlay1 size={40} className={styles.iconWithBorder} />
        </button>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.infoText}>Explore the paths and choose the one that's right for you</p>
      </div>
    </div>
  );
}

export default ViewCourses;
