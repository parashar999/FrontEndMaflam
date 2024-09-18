import React from "react";
import styles from "./Fundamental.module.css";
import Book from "../../assets/Rectangle 88.png";
import { CiCircleCheck } from "react-icons/ci";

function Fundamental() {
  return (
    <div>
      <div className={styles.Fundamental}>
        <div className={styles.content}>
          <h1>Subscribe To The Full Filmmaking Fundamentals Package</h1>
        </div>
        <div className={styles.imgcontainer}>
          <img src={Book} alt="Rectangle" />
        </div>
        <div className={styles.subscribe}>
          <div className={styles.ctn}>
            {/* <CiCircleCheck  className={styles.checkico}/> <p>Lifetime access to over 600 lessons</p>
            <p>Over 30 hours of content in Arabic</p>
            <p>Access to over 70 educational resources</p>
            <p>Includes all specialized courses plus two exclusive ones</p> */}

            <div className={styles.item}>
              <CiCircleCheck className={styles.checkico} />
              <p className={styles.description}>
                Lifetime access to over 600 lessons
              </p>
            </div>
            {/* <div className={styles.item}>
        <CiCircleCheck className={styles.checkico} />
        <p className={styles.description}>Over 30 hours of content in Arabic</p>
      </div> */}
            <div className={styles.item}>
              <CiCircleCheck className={styles.checkico} />
              <p className={styles.description}>
                Over 30 hours of content in Arabic
              </p>
            </div>
            <div className={styles.item}>
              <CiCircleCheck className={styles.checkico} />
              <p className={styles.description}>
                Access to over 70 educational resources
              </p>
            </div>
            <div className={styles.item}>
              <CiCircleCheck className={styles.checkico} />
              <p className={styles.description}>
                Includes all specialized courses plus two exclusive ones
              </p>
            </div>

            <div className={styles.item}>
              <buton className={styles.checkic}>subscribe</buton>
              <p className={styles.description}>
                <b>2.200</b>SAR
              </p>
            </div>

            {/* <span>
              <button>Subscribe </button>
              <b>2.200</b> SAR
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fundamental;
