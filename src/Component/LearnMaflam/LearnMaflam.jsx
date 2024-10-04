import styles from "./LearnMaflam.module.css";
import LearnMaflamImage from "../../assets/LearnMaflamImage.jpg";

const LearnMaflam = () => {
  return (
    <div className={styles.courseContainer}>
      <div className={styles.coursesContainer}>
        <h2>Learn About Maflam World</h2>
        <div className={styles.LearnMaflam}>
          {" "}
          {/* Correctly applying the class */}
          <img src={LearnMaflamImage} alt="Learn Maflam" />
        </div>
      </div>
    </div>
  );
};

export default LearnMaflam;
