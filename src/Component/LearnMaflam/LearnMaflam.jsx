import styles from "./LearnMaflam.module.css";
import LearnMaflamImage from "../../assets/LearnMaflamImage.jpg";

const CourseGrid = () => {
  return (
    <div className={styles.courseContainer}>
      <div className={styles.coursesContainer}>
        <h2>Learn About Maflam World</h2>
        <div className={styles.LearnMaflam}>
          <img
            src={LearnMaflamImage}
            alt=""
            style={{ width: 650, height: 400 }}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseGrid;
