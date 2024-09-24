
import { contentData } from '../../assets/assests';
import styles from './OurVisionData.module.css'; 




const OurVisionData = () => {
  return (
    <div className={styles.container}>
      <div className={styles.introSection}>
        <h1>Your first step towards creating your debut film starts now.</h1>
        <p>
          Maflem recognizes the immense passion for filmmaking within the Arab community and the scarcity of educational content in Arabic. The platform emerged as an opportunity for aspiring filmmakers, cinema enthusiasts, and imaginative writers to access self-paced learning at any time, tailored to their own schedules.
        </p>
      </div>
      <div className={styles.contentSection}>
        {contentData.map((item, index) => (
          <div className={styles.card} key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurVisionData;
