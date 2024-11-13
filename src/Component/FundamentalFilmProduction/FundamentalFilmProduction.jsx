import React, { useState, useContext } from "react";
import styles from "./FundamentalFilmProduction.module.css";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { FilmProductionContext } from "../../store/FilmProductionContext";
import auth from "../../Auth/Auth";
import { useNavigate } from "react-router-dom";

const FundamentalFilmProduction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { filmproductionScreenDetails, loading, error } = useContext(FilmProductionContext);
  const userDetails = auth.getAuthData();
  const navigate = useNavigate();

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const checkoutpage = () => {
    console.log("Button was clicked");
    if (userDetails) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  // Destructure required data from filmproductionScreenDetails
  const courseData = filmproductionScreenDetails?.formattedCourseData?.description || {};
  const courseImg = filmproductionScreenDetails?.formattedCourseData || {};
  const buttonData = filmproductionScreenDetails?.getPricingCourse1DetailsSecButton || {};
  const learningTitle = filmproductionScreenDetails?.formattedCourseData?.descriptio || "What you will learn";

  console.log("hello",courseData)

  return (
    <>
      <div className={styles.coursedetailsheader}>
        <div className={styles.videoTheory}>
          <div className={styles.headerText}>
            <h6>{courseImg.title || "Fundamentals of Film Production"}</h6>
            <p> {courseData} || "Course description not available."</p>
            <div className={styles.lessonsprice}>
              <div className={styles.riyals}>
                {courseData.price ? `${courseData.price} ${courseData.para}` : "750 SAR"}
                <CiClock2 className={styles.icon} />
              </div>
              <div className={styles.time}>
                {courseData.estimatedLearningTime?.time || "+6 hours"}
                <CiClock2 className={styles.icon} />
              </div>
            </div>
            <div className={styles.maincontainer}>
              <div className={styles.collapsible}>
                <div className={styles.header}>
                  <div
                    onClick={toggleContent}
                    className={styles.toggleButton}
                    style={{ cursor: "pointer", color: "#39FFFb" }}
                  >
                    {isOpen ? "-" : "+"}
                  </div>
                  <h5 className={styles.toggle}>{learningTitle}</h5>
                  <hr className={styles.line} />
                </div>
                {isOpen && (
                  <div>
                    <p  className={styles.answer} style={{ margin: "0", padding: "0", lineHeight: "145%", fontSize: "20px" }}>
                    {courseData}
                      </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.courseVideo}>
            <img src={courseImg.promoPhoto || ""} alt="Course Preview" />
            <div className={styles.videocontent}>
              <p>{filmproductionScreenDetails.getPricingCourse1DetailsSec1?.description || "No summary available."}</p>
              <button onClick={checkoutpage} className={styles.subcribebtn}>
                <FaShoppingCart /> &nbsp;&nbsp;
                {buttonData.title || "Subscribe"}
              </button>
              <button className={styles.addtowishlist}>
                <FaHeart />
                &nbsp;&nbsp;Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundamentalFilmProduction;
