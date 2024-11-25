import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext/LanguageContext"; // Import LanguageContext
import styles from './SubscribeFundamentalPackage.module.css';
import img1 from "../../assets/AdvCompBg.png";
import img2 from "../../assets/AdvCompAr.png";

function SubscribeFundamentalPackage() {
  const { direction } = useContext(LanguageContext); // Get the direction from the context

  return (
    <>
      <div className={styles.maincontainer}>
        <img 
          src={direction === "rtl" ? img2 : img1} // Switch image based on the direction
          alt="Video" 
          className={styles.image} 
        />
        <button className={styles.subscribeButton}>Subscribe</button>
      </div>
    </>
  );
}

export default SubscribeFundamentalPackage;
