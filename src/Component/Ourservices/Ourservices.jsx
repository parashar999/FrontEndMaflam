import React from 'react'
import styles from "./Ourservices.module.css";
import { assests } from '../../assets/assests';
function Ourservices() {
  return (
    <>
    <div  className={styles.OurservicesConatiner}>
      <div className={styles.text}>
      <div className={styles.ourservicesvector}>
      <p>We Take Pride in Ourselves Through</p>
      </div>

       <div className={styles.text2}>
            <h1>
              +9
            </h1>
            <h1>
              +600
            </h1>
            <h1>
               +550
            </h1>
       </div>   
       <div className={styles.text2}>
            <p>
            Specialized Courses
            </p>
            <p>
            Educational Video
            </p>
            <p>
            Educational Materials
            </p>
       </div>     

        <div className={styles.frane64}>
        <img src={assests.quotes} className={styles.quotesIcon}></img>
             <p>With Maflam, I learned more than 
             I did in my four years at university.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Ourservices
