import React, { useContext } from "react";
import styles from "./HeroContact.module.css";
import { assests } from "../../assets/assests.js";
import { ContactUsContext } from "../../store/ContactUsContext.jsx";

const HeroContact = () => {
  const { contactUsContextDetails, loading, error } =
    useContext(ContactUsContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state
  const contactDetailsSec1 = contactUsContextDetails?.contactDetailsSec1 || {};
  const contactDetailsSec2 = contactUsContextDetails?.contactDetailsSec2 || [];

  const title = contactDetailsSec2[0]?.title || "";
  const title1 = contactDetailsSec2[1]?.title || "";
  const title2 = contactDetailsSec2[2]?.title || "";
  return (
    <div className={styles.heroContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>{contactDetailsSec1.title}</h1>
        <p className={styles.description}>{contactDetailsSec1.description}</p>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.cardText}>
              <a href="/contact">{title}</a>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardText}>
              <a href="/contact2"> {title1}</a>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardText}>
              <a href="/contact3">{title2}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContact;
// import React, { useContext } from "react";
// import styles from "./HeroContact.module.css";
// import { ContactUsContext } from "../../store/ContactUsContext.jsx";

// const HeroContact = () => {
//   const { contactUsContextDetails, loading, error } = useContext(ContactUsContext);

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   // Extract the data from the context
//   const contactDetailsSec1 = contactUsContextDetails?.contactDetailsSec1 || {};
//   const contactDetailsSec2 = contactUsContextDetails?.contactDetailsSec2 || [];

//   return (
//     <div className={styles.heroContainer}>
//       <div className={styles.content}>

//         <h1 className={styles.title}>{contactDetailsSec1.title || "Contact Us"}</h1>
//         <p className={styles.description}>
//           {contactDetailsSec1.description || "We are delighted to assist you by answering your questions and providing all the support you need."}
//         </p>

// <div className={styles.cardsContainer}>
//   {contactDetailsSec2.map((item, index) => (
//     <div key={index} className={styles.card}>

//       <div className={styles.cardText}>
//         <a href={`/contact${index + 1}`}>{item.title}</a>
//       </div>
//     </div>
//   ))}
// </div>
//       </div>
//     </div>
//   );
// };

// export default HeroContact;
