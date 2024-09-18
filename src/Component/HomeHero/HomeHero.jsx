import React from "react";
import styles from "./HomeHero.module.css";
import Homehero from "../../assets/HomeHero.png";
const HomeHero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          A platform For Every Arab Passionate <br /> About Filmmaking
        </h1>
        <p className={styles.description}>
          Get ready to access over 600 educational materials in filmmaking
          across all specializations, taught by industry experts
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Sign Up Now</button>
        </div>
      </div>
      <img src={Homehero} alt="Background" className={styles.backgroundImage} />
    </div>
  );
};

export default HomeHero;
