import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from "./LearnAbout.module.css";

function LearnAbout() {
  return (
    <div>
      <div className={styles.mainConatiner}>
        <h1>Learn About The World Of Cinema</h1>
        <h2>The prices of maflam courses compared to traditional education</h2>
        <h3>
          The registration is easy and convenient,{" "}
          <span className={styles.para1}>
            subscribers have more lifetime access to our filmmaking content
          </span>
        </h3>

        <div className={styles.contentConatiner}>
          <div className={styles.firstcard}>
            <p>The full filmmaking fundamental Package</p>
            <div className={styles.breakline}></div>
            <h1>
              2,200 <span>SR</span>
            </h1>

            <button className={styles.subscribebutton}>Subscribe</button>
           
            <div className={styles.buttondiv}>
            <br></br>
              <button className={styles.rigthcheck}>
                <FaRegCheckCircle className={styles.rigthclick} /> 30+ Hours
              </button>
           
          
              <button className={styles.rigthcheck}>
                <FaRegCheckCircle className={styles.rigthclick} /> Flexible and
                Focused Learning
              </button>
             
              <button className={styles.rigthcheck}>
                <FaRegCheckCircle className={styles.rigthclick} /> Available for
                a Lifetime
              </button>
            </div>
          </div>
          <div className={styles.secondcard}>
            <p>Traditional Education</p>
            <div className={styles.breakline}></div>
            <h1>
              +240,000 <span>SR</span>
            </h1>
          
            <button className={styles.rigthcheck}>
            
              <FaRegCheckCircle className={styles.rigthclick} /> At least a year
            </button>

            <button className={styles.rigthcheck}>
              <FaRegCheckCircle className={styles.rigthclick} /> Interrupted and
              Mandatory Learning
            </button>

            <button className={styles.rigthcheck}>
              <FaRegCheckCircle className={styles.rigthclick} /> Limited-Time
              Access
            </button>
          
          </div>
        </div>
        <p className={styles.para}>
          Prices may vary based on country, currency exchange rates, bank fees,
          and subscription plan{" "}
          <Link to={"/to"} className={styles.link}>
            Terms & Conditions
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LearnAbout;
