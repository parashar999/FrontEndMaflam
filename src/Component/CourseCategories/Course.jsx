import { courses } from "../../assets/assests";
import styles from "./course.module.css"; // Importing the CSS module

const CourseGrid = () => {
  return (
    <div className={styles.courseContainer}>
      <div className={styles.coursesContainer}>
        <h2>Specialized Courses</h2>
        <div className={styles.coursesGrid}>
          {courses.map((course, index) => (
            <div key={index} className={styles.coursesCard}>
              <img
                src={course.img}
                alt={course.name}
                className={styles.coursesImage}
              />
              <p>{course.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseGrid;
