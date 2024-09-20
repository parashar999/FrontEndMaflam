
import styles from "./VariousCourse.module.css";
import { VariousCard } from "../../assets/assests";





const VariousCourse = () => {
  return (
    <div className={styles.container}>
      <h2>Or, choose from our various courses.</h2>
      <div className={styles.cardsGrid}>
        {VariousCard.map((course) => (
          <div key={course.id} className={styles.card}>
            <img src={course.imageUrl} alt={course.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <div className={styles.imageflex}>  <img src={course.image} alt="" />
              <p className={styles.instructor}>{course.instructor}</p></div>
              <h3 className={styles.title}>{course.title}</h3>
              <p className={styles.description}>{course.description}</p>
              <div className={styles.footer}>
                <p> {course.para}</p>
                <span>{course.price}</span>
                <img src={course.icon} alt="" />
                <p>{course.duration}</p>
                <button className={styles.buyNow}>Buy now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VariousCourse;
