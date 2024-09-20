// import React from 'react';
// import styles from './Course.module.css';
// import { courses } from '../../assets/assests';

// const CourseGrid = () => {
//   return (
//     // <div className={styles.courseContainer}>
//     //   <h2 className={styles.title}>Specialized Courses</h2>
//     //   <div className={styles.grid}>
//     //     {courses.map((course, index) => (
//     //       <div key={index} className={styles.card}>
//     //         <img src={course.img} alt={course.title} className={styles.image} />
//     //         <h3 className={styles.courseTitle}>{course.title}</h3>
//     //       </div>
//     //     ))}
//     //   </div>
//     // </div>

// <div className={styles.courseContainer}>
// <div className={styles.title}>
//  <h2> Specialized Courses</h2>
//  <div className={styles.grid}>
//    {courses.map((course, index) => (
//      <div key={index} className={styles.card}>
//        <img src={course.img} alt={course.title} className={styles.image} />
//        {/* <p>{instructor.name}</p> */}
//        <h3 className={styles.courseTitle}>{course.title}</h3>
//      </div>
//    ))}
//  </div>
// </div>
// </div>
//   );
// };

// export default CourseGrid;


import { courses } from '../../assets/assests';
import styles from './course.module.css'; // Importing the CSS module



const CourseGrid = () => {
  return (
   <div className={styles.courseContainer}>
     <div className={styles.coursesContainer}>
      <h2>Specialized Courses</h2>
      <div className={styles.coursesGrid}>
        {courses.map((course, index) => (
          <div key={index} className={styles.coursesCard}>
            <img src={course.img} alt={course.name} className={styles.coursesImage} />
            <p>{course.title}</p>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default CourseGrid;

