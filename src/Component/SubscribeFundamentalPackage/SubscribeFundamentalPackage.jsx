


import React from 'react';
import styles from './SubscribeFundamentalPackage.module.css';
import subscribefundamentalpackage from '../../assets/subscribefundamentalpackage.png';

function SubscribeFundamentalPackage() {
  return (
    <>
      <div className={styles.maincontainer}>
        <img src={subscribefundamentalpackage} alt="Video" className={styles.image} />
        <div className={styles.textOverlay}>Subscribe To The Full Filmmaking Fundamentals Package
        </div>
        <button className={styles.subscribeButton}>Subscribe</button>

      </div>
    </>
  );
}

export default SubscribeFundamentalPackage;
