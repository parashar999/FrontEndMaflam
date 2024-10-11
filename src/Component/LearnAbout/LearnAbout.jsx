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
        <p>
          The registration is easy and convenient,{" "}
          <span className={styles.para1}>
            subscribers have more lifetime access to our filmmaking content
          </span>
        </p>

        <div className={styles.contentConatiner}>
          <div className={styles.firstcard}>
            <h4>The full filmmaking fundamental Package</h4>
            <div className={styles.breakline}></div>
            <p>
              2,200 <span>SR</span>
            </p>

          
            <button className={styles.subscribebutton}>Subscribe</button>
            <br></br>
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
            <h4>Traditional Education</h4>
            <div className={styles.breakline}></div>
            <p>
              +240,000 <span>SR</span>
            </p>
       
          
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
