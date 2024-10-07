import React from "react";
import styles from "./Fundamental.module.css";
import Book from "../../assets/Rectangle 88 (1).png";
import { CiCircleCheck } from "react-icons/ci";

function Fundamental() {
  return (
    <div>
       <div className={styles.Fundamental}>
        <div className={styles.secondcontainer}>
          <div className={styles.content}>
            <p>Subscribe To The Full Filmmaking Fundamentals Package</p>
          </div>
          <div className={styles.subscribe}>
            <div className={styles.imgcontainer}>
              <img src={Book} alt="Rectangle" />
              <div className={styles.ctn}>
                <div className={styles.item}>
                  <CiCircleCheck className={styles.checkico} />
                  <p>Lifetime access to over 600 lessons</p>
                </div>

                <div className={styles.item}>
                  <CiCircleCheck className={styles.checkico} />
                  <p>Over 30 hours of content in Arabic</p>
                </div>

                <div className={styles.item}>
                  <CiCircleCheck className={styles.checkico} />
                  <p>Access to over 70 educational resources</p>
                </div>

                <div className={styles.item}>
                  <CiCircleCheck className={styles.checkico} />
                  <p>Includes all specialized courses plus two exclusive ones</p>
                </div>

                <div className={styles.item}>
                  <button className={styles.checkicobuttun}>Subscribe</button>
                  <p><b>2.200</b><span>SR</span></p>
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
      </div> 
      
    </div>
    
  );
}

export default Fundamental;
