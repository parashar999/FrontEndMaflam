import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";  // Import to detect route changes
import styles from "./ContactInformation.module.css";
import { ContactUsContext } from "../../store/ContactUsContext";

const ContactInformation = () => {
  const { contactUsContextDetails, loading, error } = useContext(ContactUsContext);
  const location = useLocation();  // Hook to detect route changes

  const scrollToTop = () => {
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };

  useEffect(() => {
    // Whenever the location changes (i.e., on page reload or route change), scroll to the top
    scrollToTop();
  }, [location]);  // Trigger when the route changes

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  const contactDetailsSec3 = contactUsContextDetails?.contactDetailsSec3 || [];

  const title = contactDetailsSec3[0]?.title || "";
  const emailTitle = contactDetailsSec3[1]?.title || "";
  const emailCategory = contactDetailsSec3[1]?.category || [];
  const contactNumberTitle = contactDetailsSec3[2]?.title || "";
  const contactNumberDescription = contactDetailsSec3[2]?.description || "";
  const locationTitle = contactDetailsSec3[3]?.title || "";
  const locationDescription = contactDetailsSec3[3]?.description || "";

  return (
    <>
      <div className={styles.bgimage}></div>
      <div className={styles.contactContainer}>
        <h2 className={styles.heading}>{title}</h2>

        <div className={styles.contactSection}>
          <h3>{emailTitle}</h3>
          {emailCategory.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        <div className={styles.contactSection}>
          <h3>{contactNumberTitle}</h3>
          <p>{contactNumberDescription}</p>
        </div>

        <div className={styles.contactSection}>
          <h3>{locationTitle}</h3>
          <p>
            <span className={styles.blueText}>{locationDescription}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactInformation;
