
import { featuresData } from '../../assets/Assests';
import styles from './Filmmaker.module.css';



const Filmmaker = () => { 
  return (
    <div className={styles.container}>
     
      <h1 className={styles.title}>A Saudi platform designed to empower filmmakers with expertise and knowledge</h1>
      <p className={styles.subtitle}>Maflam offers comprehensive educational content across all areas of filmmaking.</p>

  
      <div className={styles.features}>
        {featuresData.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <h3 className={styles.featureTitle}>{feature.title} <hr  className={styles.hrrr}/></h3>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filmmaker;
