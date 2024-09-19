
import { instructors } from '../../assets/assests';
import styles from './MaflamInstructors.module.css'; // Importing the CSS module



const MaflamInstructors = () => {
  return (
   <div className={styles.instructorsContainerss}>
     <div className={styles.instructorsContainer}>
      <h2> Maflam's Instructors</h2>
      <div className={styles.instructorsGrid}>
        {instructors.map((instructor, index) => (
          <div key={index} className={styles.instructorCard}>
            <img src={instructor.image} alt={instructor.name} className={styles.instructorImage} />
            <p>{instructor.name}</p>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default MaflamInstructors;
