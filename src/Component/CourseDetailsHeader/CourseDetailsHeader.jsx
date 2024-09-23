import React from 'react';
import styles from './CourseDetailsHeader.module.css';
import { FaLessThan } from "react-icons/fa6";
import videoCrc1Image from '../../assets/videocrc1.png'; 
import { AiTwotoneEye } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart,FaStar,FaStarHalfAlt } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import WhatWeLearn from '../WhatWeLearn/WhatWeLearn';
import KeyTopic from '../KeyTopic/KeyTopic';
import AboutInstructor from '../AboutInstructor/AboutInstructor';





function CourseDetailsHeader() {
  return (
    <> 
      <div className={styles.coursedetailsheader}>
        <div className={styles.courseOption}>
          <div className={styles.courseFundamental}> 
            <p>Fundamentals of acting</p> 
          </div>
          <div className={styles.courseArabic}> 
            <p> <FaLessThan /> &nbsp;Arabic &nbsp;<FaLessThan /> </p>
          </div>
          <div className={styles.courseCourse}>
            <p>Courses</p> 
          </div>
        </div>

        <div className={styles.videoTheory}> 
          <div className={styles.courseVideo}> 
              <img src={videoCrc1Image} alt="Video" />
              <div className={styles.videocontent}>
              <p> A berife summary of the contetnt and its contents:Our visions to becomea leading online platform for all Arab students who... </p>
             
             <div className={styles.starRating}>
                     <FaStarHalfAlt className={styles.starFilled} />
                     <FaStar className={styles.starFilled} /> 
                     <FaStar className={styles.starFilled} /> 
                     <FaStar className={styles.starFilled} /> 
                     <FaStar className={styles.starFilled} /> 
                     <span> 4.3</span>
             </div>


              <button className={styles.subcribebtn}> <FaShoppingCart /> &nbsp;&nbsp;Subcribe </button>
              <button className={styles.addtowishlist}> <FaHeart />&nbsp;&nbsp;Add to whishlist </button>
              </div>


          </div>
         <div className={styles.headerText}>
         <button className={styles.buttonOnTop}>نظري <AiTwotoneEye /></button>
         <h6> Fundamentals of Scriptingwriting</h6>
            <p> This course is designed for imaginative writers who aspire to bring their ideas and stories to the screen. It focuses on learning how to craft a professional screenplay and understanding the key elements of a successful script that producers are looking for.</p>
          

         <div className={styles.lessonsprice}>
           <div className={styles.riyals}>750 riyals <CiClock2 className={styles.icon} /></div>
           <div className={styles.lessons}>54 lessons <CiClock2 className={styles.icon} /></div>
           <div className={styles.time}>+6 hours <CiClock2 className={styles.icon} /></div>
        </div>

      </div>
        </div>
      </div>
     <div className={styles.bgimage}>
       {/* <WhatWeLearn />
      <KeyTopic />
      <AboutInstructor /> */}
      </div>
    </>
  );
}

export default CourseDetailsHeader; 
