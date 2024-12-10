


// import { useEffect,useState } from "react";
// import styles from "./SuccessMessage2.module.css";
// import successtickmark from "../../assets/successtickmark.png";
// import auth from "../../Auth/Auth";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function SuccessMessage2() {
//   const paymentData = auth.getAuthData()?.paymentData;
//   const navigate = useNavigate();
//   const [ID,setIddata] = useState("");
//   const getId = localStorage.getItem('tran_ref')
//   setIddata(getId);
 

//   console.log(ID,"tran_ref")

//   useEffect(() => {
//     const validateTransaction = async () => {
//       const timeout = (ms) =>
//         new Promise((_, reject) =>
//           setTimeout(() => reject(new Error("Request timed out")), ms)
//         );

//       try {
//         console.log("transation",ID)
//         if (ID) {
//           const token = auth.getToken(); // Assume `auth.getToken()` fetches the user's token

//           // Combine the API call with the timeout logic
//           const response = await Promise.race([
//             axios.post(
//               `https://backend.maflam.com/maflam/validateTransction?tranRef=${ID}`,
//               {},
//               {
//                 headers: {
//                   Authorization: `Bearer ${token}`,
//                 },
//               }
//             ),
//             timeout(30000), 
//           ]);

//           if (response?.data?.success) {
            
//             window.location.href = "https://maflam.com/success";
//           } else {
           
//             window.location.href = "https://maflam.com/failuremessage";
//           }
//         } else {
//           console.error("Transaction reference not available");
//           navigate("/failuremessage"); 
//         }
//       } catch (error) {
//         console.error("Transaction validation failed:", error.message || error);
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

// export default SuccessMessage2;
import { useEffect, useState } from "react";
import styles from "./SuccessMessage2.module.css";
import successtickmark from "../../assets/successtickmark.png";
import auth from "../../Auth/Auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SuccessMessage2() {
  const [ID, setIddata] = useState("");
  const navigate = useNavigate();
  const paymentData = auth.getAuthData()?.paymentData;

  useEffect(() => {
    // Retrieve the transaction ID from localStorage
    const getId = localStorage.getItem('tran_ref');
    setIddata(getId);
  }, []);

  useEffect(() => {
    // Function to validate transaction by sending a POST request
    const validateTransaction = async () => {
      const timeout = (ms)  =>
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), ms)
        );

      if (!ID) {
        console.error("Transaction reference not available");
        navigate("/failuremessage");
        return;
      }

      try {
        console.log("Transaction ID:", ID);
        const token = auth.getToken(); // Get the authentication token

        // Make an API call with a timeout mechanism
        const response = await Promise.race([
          axios.post(
            `https://backend.maflam.com/maflam/validateTransction?tranRef=${ID}`,
            {}, // Empty body since this is a POST request
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          ),
          timeout(30000), // 30-second timeout
        ]);

        // Navigate based on the response data
        if (response?.data?.success) {
          navigate("/success");
        } else {
          navigate("/failuremessage");
        }
      } catch (error) {
        console.error("Transaction validation failed:", error.message || error);
        navigate("/failuremessage");
      }
    };

    validateTransaction();
  }, [ID, navigate]);

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

export default SuccessMessage2;
