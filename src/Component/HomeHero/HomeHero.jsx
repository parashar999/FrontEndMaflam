import React from "react";
import styles from "./HomeHero.module.css";
const HomeHero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title} style={{ fontSize: 45 }}>
          A Platform For Every Arab <br /> Passionate About Filmmaking
        </h1>
        <p className={styles.description}>
          Get ready to access over 600 educational materials in filmmaking
          across all specializations, taught by industry experts
        </p>
        {/* <div className={styles.buttons}>
          <button className={styles.primaryButton}>Sign Up Now</button>
        </div> */}
      </div>
      <div className={styles.backgroundImage}></div>
    </div>
  );
};

export default HomeHero;
