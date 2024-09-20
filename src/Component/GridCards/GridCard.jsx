import React from "react";
import styles from "./GridCard.module.css"; // Importing CSS module
import Fram289 from "../../assets/Frame 289.png";

const CardGrid = () => {
  return (
    <div className={styles.mainContainer}>
      <p>Or, choose from our various courses.</p>
      <div className={styles.row}>

        <div className={styles.column}>
          <div className={styles.card}>
            <img src={Fram289}></img>
            <div className={styles.CardPara}></div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <img src={Fram289}></img>
            <div className={styles.CardPara}></div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <img src={Fram289}></img>
            <div className={styles.CardPara}></div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <img src={Fram289}></img>
            <div className={styles.CardPara}></div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <img src={Fram289}></img>
            <div className={styles.CardPara}></div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <img src={Fram289}></img>
            <div className={styles.CardPara}></div>
          </div>
        </div>
        

        <div className={styles.column}>
          <div className={styles.card}>
            <img src={Fram289}></img>
            <div className={styles.CardPara}></div>
          </div>
        </div>
        

        <div className={styles.column}>
          <div className={styles.card}>
            <img src={Fram289}></img>
            <div className={styles.CardPara}></div>
          </div>
        </div>
        
        <div className={styles.column}>
          <div className={styles.card}>
            <img src={Fram289}></img>
            <div className={styles.CardPara}></div>
          </div>
        </div>
        
      
        

      </div>
    </div>
  );
};

export default CardGrid;
