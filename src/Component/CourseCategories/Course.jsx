import React from 'react';
import styles from './Course.module.css';
// import couse1 from "../../assets/course1.jpeg"

const courses = [
  { title: 'Fundamentals of Cinematography', imageUrl: '.' },
  { title: 'Fundamentals of Film Production', imageUrl: 'path-to-image2' },
  { title: 'Fundamentals of Scriptwriting', imageUrl: 'path-to-image3' },
  { title: 'Fundamentals of Acting', imageUrl: 'path-to-image4' },
  { title: 'Fundamentals of Sound Recording', imageUrl: 'path-to-image5' },
  { title: 'Fundamentals of Film Directing', imageUrl: 'path-to-image6' },
  { title: 'Introduction to DaVinci Resolve', imageUrl: 'path-to-image7' },
  { title: 'Introduction to Vegas Pro', imageUrl: 'path-to-image8' },
  { title: 'Introduction to Premiere Pro', imageUrl: 'path-to-image9' },
];

const CourseGrid = () => {
  return (
    <div className={styles.courseContainer}>
      <h2 className={styles.title}>Specialized Courses</h2>
      <div className={styles.grid}>
        {courses.map((course, index) => (
          <div key={index} className={styles.card}>
            <img src={course.imageUrl} alt={course.title} className={styles.image} />
            <h3 className={styles.courseTitle}>{course.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
