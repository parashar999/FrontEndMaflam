


// import React from 'react';
// import { FaPlayCircle } from 'react-icons/fa';  // Import the play icon
// import styles from './ViewCourses.module.css'; 
// import { CoursesData } from '../../assets/assests'; // Ensure correct import path


// function ViewCourses() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.courseGrid}>
//         {CoursesData.map((course, index) => (
//           <div key={index} className={styles.courseCard}>
//             {course.name}
//           </div>
//         ))}
//       </div>
//       <button className={styles.fullWidthButton}>View All Courses</button>
//       <div className={styles.playButtonContainer}>
//         <button className={styles.playButton}>
//           <FaPlayCircle size={60} />  {/* Customize size as needed */}
//         </button>
//       </div>
//       <div className={styles.textContainer}>
//         <p className={styles.infoText}>Explore the paths and choose the one that's right for you</p>
//       </div>
//     </div>
//   );
// }

// export default ViewCourses;







// import React from 'react';
// import { FaPlayCircle } from 'react-icons/fa';  // Import the play icon
// import styles from './ViewCourses.module.css'; 
// import { CoursesData } from '../../assets/assests'; // Ensure correct import path

// function ViewCourses() {
//   const getCardClassName = (index) => {
//     switch (index) {
//       case 0:
//         return styles.courseCard1;
//       case 1:
//         return styles.courseCard2;
//       case 2:
//         return styles.courseCard3;
//       case 3:
//         return styles.courseCard4;
//       case 4:
//         return styles.courseCard5;
//       case 5:
//         return styles.courseCard6;
//       case 6:
//         return styles.courseCard7;
//       default:
//         return '';
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.courseGrid}>
//         {CoursesData.map((course, index) => (
//           <div
//             key={index}
//             className={`${styles.courseCard} ${getCardClassName(index)}`}
//           >
//             {course.name}
//           </div>
//         ))}
//       </div>
//       <button className={styles.fullWidthButton}>View All Courses</button>
//       <div className={styles.playButtonContainer}>
//         <button className={styles.playButton}>
//           <FaPlayCircle size={60} />  {/* Customize size as needed */}
//         </button>
//       </div>
//       <div className={styles.textContainer}>
//         <p className={styles.infoText}>Explore the paths and choose the one that's right for you</p>
//       </div>
//     </div>
//   );
// }

// export default ViewCourses;




import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';  // Import the play icon
import styles from './ViewCourses.module.css'; 
import { CoursesData } from '../../assets/assests'; // Ensure correct import path

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
          >
            {course.name}
          </div>
        ))}
      </div>
      <button className={styles.fullWidthButton}>View All Courses</button>
      <div className={styles.playButtonContainer}>
        <button className={styles.playButton}>
          <FaPlayCircle size={60} />  {/* Customize size as needed */}
        </button>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.infoText}>Explore the paths and choose the one that's right for you</p>
      </div>
    </div>
  );
}

export default ViewCourses;
