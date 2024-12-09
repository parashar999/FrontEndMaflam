
// import React from 'react';
// import styles from './SuccessMessage.module.css';
// import successtickmark from "../../assets/successtickmark.png";
// import { Link } from 'react-router-dom';
// // import { useNavigate } from 'react-router-dom';



// function SuccessMessage() {

//   // const navigate = useNavigate()
//   // const clickbtn =()=>{
//   //   navigate("https://learn.maflam.com/login/index.php")
//   // }

//   return (
//     <div className={styles.maincontainer}>
//       <div className={styles.secondcontainer}> 
//         <header className={styles.header}>
//         <img src={successtickmark} alt="successmark" className={styles.resetlogo} />
//         </header>
//         <form className={styles.form}>
//             <h2>You have successfully enrolled in the course.</h2>
//             <p>Welcome to the Maflam’s family!</p>
//             <p>Get ready to learn and grow with top experts in the film industry.</p>
//             <p>Together, we will turn your passion for films into reality.</p>
//             <button  className={styles.btn}> 
//             <a href="https://learn.maflam.com/login/index.php"  >
//             Go To Dashboard
//           </a>
//             </button>
           
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SuccessMessage;


// import React, { useEffect } from "react";
// import styles from "./SuccessTransaction.module.css";
// import successtickmark from "../../assets/successtickmark.png";
// import auth from "../../Auth/Auth";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function SuccessTransaction() {
//   const paymentData = auth.getAuthData()?.paymentData;
//   const navigate = useNavigate();

//   useEffect(() => {
//     const validateTransaction = async () => {
//       try {
//         if (paymentData?.tranRef) {
//           const token = auth.getToken(); 
//           const response = await axios.post(
//             `https://backend.maflam.com/maflam/validateTransction?tranRef=${paymentData.tranRef}`,
//             {},
           
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           );

//           if (response.data.success) {
//             // Redirect to success page if the transaction is valid
//             window.location.href = "https://maflam.com/success";
//           } else {
//             // Redirect to failure page if the transaction fails
//             window.location.href = "https://maflam.com/failuremessage";
//           }
//         } else {
//           console.error("Transaction reference not available");
//           navigate("/failuremessage"); // Navigate to failure page in-app
//         }
//       } catch (error) {
//         console.error("Transaction validation failed:", error);
//         window.location.href = "https://maflam.com/failuremessage";
//       }
//     };

//     validateTransaction();
//   }, [paymentData, navigate]);

//   return (
//     <div className={styles.maincontainer}>
//       <div className={styles.secondcontainer}>
//         <header className={styles.header}>
//           <img src={successtickmark} alt="successmark" className={styles.resetlogo} />
//         </header>
//         <form className={styles.form}>
//           <h2>You have successfully enrolled in Transaction</h2>
//           <p>Transaction ID: {paymentData?.transactionId || "N/A"}</p>
//           <p>Status: {paymentData?.status || "N/A"}</p>
//           <p>Welcome to the Maflam’s family!</p>
//           <p>Get ready to learn and grow with top experts in the film industry.</p>
//           <p>Together, we will turn your passion for films into reality.</p>
//           <button className={styles.btn}>
//             <a href="https://learn.maflam.com/login/index.php">Go To Dashboard</a>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SuccessTransaction;


import { useEffect } from "react";
import styles from "./SuccessTransaction.module.css";
import successtickmark from "../../assets/successtickmark.png";
import auth from "../../Auth/Auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SuccessTransaction() {
  const paymentData = auth.getAuthData()?.paymentData;
  const navigate = useNavigate();

  useEffect(() => {
    const validateTransaction = async () => {
      const timeout = (ms) =>
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), ms)
        );

      try {
        console.log("transation",paymentData?.tranRef)
        if (paymentData?.tranRef) {
          const token = auth.getToken(); // Assume `auth.getToken()` fetches the user's token

          // Combine the API call with the timeout logic
          const response = await Promise.race([
            axios.post(
              `https://backend.maflam.com/maflam/validateTransction?tranRef=${paymentData.tranRef}`,
              {},
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            ),
            timeout(30000), 
          ]);

          if (response?.data?.success) {
            
            window.location.href = "https://maflam.com/success";
          } else {
           
            window.location.href = "https://maflam.com/failuremessage";
          }
        } else {
          console.error("Transaction reference not available");
          navigate("/failuremessage"); 
        }
      } catch (error) {
        console.error("Transaction validation failed:", error.message || error);
        window.location.href = "https://maflam.com/failuremessage";
      }
    };

    validateTransaction();
  }, [paymentData, navigate]);

  return (
    <div className={styles.maincontainer}>
      <div className={styles.secondcontainer}>
        <header className={styles.header}>
          <img src={successtickmark} alt="successmark" className={styles.resetlogo} />
        </header>
        <form className={styles.form}>
          <h2>You have successfully enrolled in Transaction</h2>
          <p>Transaction ID: {paymentData?.transactionId || "N/A"}</p>
          <p>Status: {paymentData?.status || "N/A"}</p>
          <p>Welcome to the Maflam’s family!</p>
          <p>Get ready to learn and grow with top experts in the film industry.</p>
          <p>Together, we will turn your passion for films into reality.</p>
          <button className={styles.btn}>
            <a href="https://learn.maflam.com/login/index.php">Go To Dashboard</a>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SuccessTransaction;
