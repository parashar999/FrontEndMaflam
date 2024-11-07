

import { assests } from '../../assets/assests';
import styles from './FilmProduction.module.css';

const FilmProduction = () => {


  return (
    <div className={styles.hovercointainer}>
    <div className={styles.hoverimagecontainer}>
      <div className={styles.imagewrapper}>
        <img 
          src={assests.Maflammac}
          alt="Description"
          className={styles.hoverimage}
        />
        <div className={styles.overlay}>
          <p> Subscribe To The Full Filmmaking Fundamentals Package.</p>
          <button className={styles.subscribebutton}> Subscribe </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FilmProduction;
