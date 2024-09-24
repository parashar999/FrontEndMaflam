import React from 'react';
import styles from './MaflamCard.module.css';
import { MaflamCards } from '../../assets/assests';



const MaflamCard = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>مرشدين مُفلم</h2>
      <div className={styles.grid}>
        {MaflamCards.map((mentor, index) => (
          <div className={styles.card} key={index}>
            <img src={mentor.image} alt={mentor.name} className={styles.image} />
            <div className={styles.overlay}> <p className={styles.name}>{mentor.title}</p></div>
            {/* <p className={styles.name}>{mentor.title}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaflamCard;
