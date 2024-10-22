



import React, { useContext } from "react";
import styles from "./ContactInformation.module.css";
import { ContactUsContext } from "../../store/ContactUsContext";

const ContactInformation = () => {
  const { contactUsContextDetails, loading, error } = useContext(ContactUsContext);

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
  );
};

export default ContactInformation;




// import React from "react";
// import styles from "./ContactInformation.module.css";

// const ContactInformation = () => {
//   return (
//     <div className={styles.contactContainer}>
//       <h2 className={styles.heading}>Contact Information</h2>

//       <div className={styles.contactSection}>
//         <h3>Email</h3>
//         <p>
//           For inquiries related to Maflam services{" "}
//           <a href="#">Info@maflam.com</a>
//         </p>
//         <p>
//           For technical support for the platform{" "}
//           <a href="mailto:support@maflam.com">support@maflam.com</a>
//         </p>
//       </div>

//       <div className={styles.contactSection}>
//         <h3>Contact Number</h3>
//         <p>+966505685495</p>
//       </div>

//       <div className={styles.contactSection}>
//         <h3>Location</h3>
//         <p>
//           <span className={styles.blueText}>
//             Olaya Tower, AlMuhammadiyah District, Jeddah, Saudi Arabia
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ContactInformation;
