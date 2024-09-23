

import { assests } from '../../assets/Assests';
import styles from './FilmProduction.module.css';

const FilmProduction = () => {


  return (
    <div className={styles.hovercointainer}>
    <div className={styles.hoverimagecontainer}>
      <div className={styles.imagewrapper}>
        <img 
          src={assests.maflamScreen}
          alt="Description"
          className={styles.hoverimage}
        />
        <div className={styles.overlay}>
          <p> Subscribe to the complete package for film production essentials.</p>
          <button className={styles.subscribebutton}> Sign Up Now </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FilmProduction;
