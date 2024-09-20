


import React from 'react';
import styles from './MaflamImageOffer.module.css';
import { offersData } from '../../assets/Assests';

const MaflamImageOffer = () => {
  return (
    <div className={styles.offersContainer}>
      <div className={styles.offersHeader}>
        <h2>What Maflam Offers</h2>
        <p>
          Together, we can discover and empower the new generation of filmmakers.
        </p>
      </div>

      <div className={styles.offersGrid}>
        {offersData.map((offer, index) => (
          <div className={styles.offerCard} key={index}>
            <img src={offer.image} alt={offer.title} className={styles.offerImage} />
            <div className={styles.offerTitle}>
              <p>{offer.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaflamImageOffer;
