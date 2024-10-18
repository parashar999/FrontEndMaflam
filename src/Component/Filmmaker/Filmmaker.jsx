import { featuresData } from "../../assets/assests";
import styles from "./Filmmaker.module.css";
import { AboutUsPageContext } from "../../store/AboutUsPageContext.jsx";
const Filmmaker = () => {
  const { aboutusScreenDetails, loading, error } =
    useContext(AboutUsPageContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        A Saudi platform designed to empower Filmmakers with expertise and
        knowledge
      </h1>
      <p className={styles.subtitle}>
        Maflam offers comprehensive educational content across all areas of
        Filmmaking.
      </p>

      <div className={styles.features}>
        {featuresData.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <h3 className={styles.featureTitle}>
              {feature.title} <hr className={styles.hrrr} />
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filmmaker;
