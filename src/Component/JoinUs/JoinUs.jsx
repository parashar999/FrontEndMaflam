import { useContext, useState } from "react";
import axios from "axios";
import { AboutusPageContext } from "../../store/AboutUsPageContext";
import styles from "./JoinUs.module.css";
import { ToastContainer, toast } from "react-toastify";

const JoinUs = () => {
  const { aboutusScreenDetails, loading, error } =
    useContext(AboutusPageContext);

  // State to hold the email input and response messages
  const [email, setEmail] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Destructure the aboutUsDetails60 data
  const aboutUsDetails60 = aboutusScreenDetails?.aboutUsDetails60 || [];

  // Extract the relevant titles
  const joinTitle = aboutUsDetails60[0]?.title || "Join our newsletter now";
  const emailPlaceholder =
    aboutUsDetails60[1]?.title || "Your email address...";
  const buttonText = aboutUsDetails60[2]?.title || "Send";

  // Extract imageUrl if available
  const imageUrl = aboutUsDetails60[0]?.imageUrl || "";

  // Function to handle email submission
  const submitEmail = async () => {
    try {
      const response = await axios.post(
        "https://backend.maflam.com/maflam/create-newsletter",
        {
          emailId: email,
        }
      );
      setSubmitStatus("Thank you for subscribing!");
      toast.success(response.data.message);
    } catch (error) {
      setSubmitStatus("Failed to subscribe. Please try again.");
      console.error("Error submitting email:", error);
    }
  };

  return (
    <div
      className={styles.maincontainer}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.container}>
        <div className={styles.JoinUsBox}>
          <h2 className={styles.heading}>{joinTitle}</h2>
          <div className={styles.serachoption}>
            <div className={styles.inputBox}>
              <input
                type="email"
                className={styles.inputField}
                placeholder={emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <button className={styles.button} onClick={submitEmail}>
                {buttonText}
              </button>
            </div>
          </div>
          {/* Display submission status message */}
          {submitStatus && (
            <p style={{ color: "white" }} className={styles.statusMessage}>
              {submitStatus}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;

// import { useContext } from "react";
// import { AboutusPageContext } from "../../store/AboutUsPageContext";
// import styles from "./JoinUs.module.css";

// const JoinUs = () => {
//   const { aboutusScreenDetails, loading, error } =
//     useContext(AboutusPageContext);

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   // Destructure the aboutUsDetails60 data
//   const aboutUsDetails60 = aboutusScreenDetails?.aboutUsDetails60 || [];

//   // Extract the relevant titles
//   const joinTitle = aboutUsDetails60[0]?.title || "Join our newsletter now";
//   const emailPlaceholder =
//     aboutUsDetails60[1]?.title || "Your email address...";
//   const buttonText = aboutUsDetails60[2]?.title || "Send";

//   // Extract imageUrl if available
//   const imageUrl = aboutUsDetails60[0]?.imageUrl || "";

//   return (
//     <div
//       className={styles.maincontainer}
//       style={{ backgroundImage: `url(${imageUrl})` }}
//     >
//       <div className={styles.container}>
//         <div className={styles.JoinUsBox}>
//           <h2 className={styles.heading}>{joinTitle}</h2>
//           <div className={styles.serachoption}>
//             <div className={styles.inputBox}>
//               <input
//                 type="email"
//                 className={styles.inputField}
//                 placeholder={emailPlaceholder}
//               />
//             </div>
//             <div>
//               <button className={styles.button}>{buttonText}</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JoinUs;

// import styles from './JoinUs.module.css';

// const JoinUs = () => {
//   return (

//     <div className={styles.maincontainer}>
//     <div className={styles.container}>
//       <div className={styles.JoinUsBox}>
//         <h2 className={styles.heading}>Join our newslatter now </h2>
//         <div className={styles.serachoption}>

//        <div className={styles.inputBox}>

//           <input
//             type="email"
//             className={styles.inputField}
//             placeholder="Your email address..."
//           />

//         </div>
//         <div ><button className={styles.button}>Send</button></div>
//         </div>

//       </div></div>
//       </div>

//   );
// };

// export default JoinUs;
