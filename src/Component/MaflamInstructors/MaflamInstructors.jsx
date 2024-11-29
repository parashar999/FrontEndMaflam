// import { instructors } from '../../assets/assests';
// import styles from './MaflamInstructors.module.css';
// import { HomePageContext } from "../../store/HomePageContext.jsx";
// import { useContext } from 'react';

// const MaflamInstructors = () => {
//   const { homeScreenDetails, loading, error } = useContext(HomePageContext);

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   // Ensure that the API data exists before rendering
//   const instructorTitle = homeScreenDetails?.instructorTitle|| [];
//   const   maflamInstructorData = homeScreenDetails?.maflamInstructorData || [];
//   return (
//    <div className={styles.instructorsContainerss}>
//      <div className={styles.instructorsContainer}>
//       <h2> {instructorTitle?.instructorTitle }</h2>
//       <div className={styles.instructorsGrid}>
//         {maflamInstructorData.map((instructor, index) => (
//           <div key={index} className={styles.instructorCard}>
//             <img src={instructor.image} alt={instructor.name} className={styles.instructorImage} />
//             <p>{instructor.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//    </div>
//   );
// };

// export default MaflamInstructors;

import { useContext } from "react";
import styles from "./MaflamInstructors.module.css";
import { HomePageContext } from "../../store/HomePageContext.jsx";
import { Link } from "react-router-dom";

const MaflamInstructors = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Ensure that the API data exists before rendering
  const instructorTitle =
    homeScreenDetails?.instructorTitle?.title || "Instructors";
  const maflamInstructorData = homeScreenDetails?.maflamInstructorData || [];

  return (
    <div className={styles.instructorsContainerss}>
      <div className={styles.instructorsContainer}>
        <h2>{instructorTitle}</h2>
        <div className={styles.instructorsGrid}>
          {maflamInstructorData.map((instructor, index) => (
            <div key={index} className={styles.instructorCard}>
              <img
                src={instructor.imageUrl}
                alt={instructor.title}
                className={styles.instructorImage}
              />
              <p>
                <Link to="R2/R3/prc"> {instructor.title}</Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaflamInstructors;
