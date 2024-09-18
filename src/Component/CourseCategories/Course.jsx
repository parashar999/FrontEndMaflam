import React from 'react';
import styles from './Course.module.css';
import { courses } from '../../assets/assests';

const CourseGrid = () => {
  return (
    <div className={styles.courseContainer}>
      <h2 className={styles.title}>Specialized Courses</h2>
      <div className={styles.grid}>
        {courses.map((course, index) => (
          <div key={index} className={styles.card}>
            <img src={course.img} alt={course.title} className={styles.image} />
            <h3 className={styles.courseTitle}>{course.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
