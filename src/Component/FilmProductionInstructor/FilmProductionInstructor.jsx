import React, { useState, useContext } from "react";
import styles from "./FilmProductionInstructor.module.css";
import { FilmProductionContext } from "../../store/FilmProductionContext";
import { LanguageContext } from "../LanguageContext/LanguageContext";

const FilmProductionInstructor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { filmproductionScreenDetails, loading, error } = useContext(
    FilmProductionContext
  );
  const { direction } = useContext(LanguageContext);

  const toggleContent = () => setIsOpen(!isOpen);

  // Access the instructor's data
  const instructorData =
    filmproductionScreenDetails?.formattedCourseData.instructors?.[0] || {}; // Assuming the first instructor is selected
  const instructorTitle =
    filmproductionScreenDetails?.formattedCourseData.instructors || [];

  const collapsibleClass =
    direction === "rtl" ? styles.collapsibleRtl : styles.collapsibleLtr;

  // console.log("Instructor Title:", instructorTitle);

  return (
    <div className={styles.maincontainer}>
      <div className={styles.collapsibleLtr}>
        <div className={styles.header}>
          <div
            onClick={toggleContent}
            className={styles.toggleButton}
            style={{ cursor: "pointer", color: "#39FFFb" }}
          >
            {isOpen ? "-" : "+"}
          </div>

          {/* Render Instructor Title */}
          {Array.isArray(instructorTitle) && instructorTitle.length > 0 ? (
            instructorTitle.map((lesson, index) => (
              <h5 key={index}>{lesson.name}</h5>
            ))
          ) : (
            <h5>About the Instructor</h5>
          )}

          <hr className={styles.line} />
        </div>

        {loading && <p>Loading instructor data...</p>}
        {error && <p>Error loading instructor data: {error.message}</p>}

        {isOpen && instructorData && (
          <div className={styles.instructorContent}>
            {/* Display instructor name and photo */}
            {instructorData.name && (
              <h6 className={styles.instructorName}>{instructorData.name}</h6>
            )}
            {instructorData.photoUrl && (
              <img
                src={instructorData.photoUrl}
                alt={instructorData.name}
                className={styles.instructorPhoto}
              />
            )}

            {/* Display each description item */}
            {Array.isArray(instructorData.description) &&
            instructorData.description.length > 0 ? (
              instructorData.description.map((detail, index) => (
                <p key={index} className={styles.paragraph}>
                  {detail}
                </p>
              ))
            ) : (
              <p>No description available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilmProductionInstructor;
