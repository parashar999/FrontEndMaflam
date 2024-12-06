
// import { useContext, useEffect, useState } from "react";
// import styles from "./PaymentForm2.module.css";
// import { Link, useParams } from "react-router-dom";

// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import auth from "../../Auth/Auth";



// const PaymentForm2 = () => {





  
  

//   const checkoutpage = async () => {
//     const userdetails = auth.getAuthData();
//     const token = userdetails?.token; // Ensure token is available
//     const requestBody = {
//       amount: 750,
//       courseId: paymentID,
//       callback: "https://maflam.web.app/success",
//       return :"https://maflam.web.app/success",
//       // callback: "https://maflam.web.app/success",
//       // return:  "https://maflam.web.app/success",
//       token,
//       //  callback: "http://localhost:5173/success",
//       // callback: `https://maflam.web.app/checkout/${courseId}`,
//     };
  
//     try {
//       const response = await axios.post(
//         `https://backend.maflam.com/maflam/paymenttransction`,
//         requestBody,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
  
//       const data = response?.data;
//       if (data) {
//         // toast.success(data.message);
//         // window.open(data.data?.redirect_url, "_blank"); // Ensure URL opens in a new tab
//         window.location.href = data.data?.redirect_url;  

//       } else {
//         throw new Error("Invalid response from server");
//       }
//     } catch (err) {
//       console.error("Checkout Error:", err);
//       const errorMessage = err.response?.data?.message || err.message;
//       toast.error(`Error: ${errorMessage}`);
//     }
//   };


   
//   return (
//     <div className={styles.maincontainer}>
//       <div className={styles.container}>
//         <div className={styles.card}>
//           <img src={imageSrc} alt="Course" className={styles.image} />
//           <h2 className={styles.price}> SAR 2200 </h2>
//           <h3 className={styles.title}>Fundamental Fiml Produvtion </h3>
//           <hr />
//           <div className={styles.paymentCard}>
//             <p className={styles.titles}>{cardDetails[2]?.title || "Payment Methods"}</p>
//             <img src={cardDetails[3]?.imageUrl} alt="Not Found" />
//             <img src={cardDetails[4]?.imageUrl} alt="Visa" />
//             <img src={cardDetails[5]?.imageUrl} alt="MasterCard" />
//           </div>
//           <hr />
//           <button
//             type="button"
//             onClick={checkoutpage}
//             className={styles.payBtn}
//           >
//             {cardDetails[12]?.title || "Pay Now"}
//           </button>
//         </div>

//         <div>
//           <p className=  {styles.termconditions}> {termsDetails[0]?.title || ""} </p>
//         </div>
//         <div>
//           <p className={styles.termconditions1}>
//             {termsDetails[1]?.title || ""}
//             <Link to="/terms&condition"> Terms and Conditions </Link>
//             {termsDetails[2]?.title || ""}
//             <Link to="/privacy-policy"> Privacy Policy</Link>
//           </p>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default PaymentForm2;
import { useContext, useEffect, useState } from "react";
import styles from "./PaymentForm2.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import auth from "../../Auth/Auth";
import "react-toastify/dist/ReactToastify.css";
import { cardDetails } from "../../assets/assests";

// const cardDetails = {
//   title: "Fundamentals of Acting",
//   paymentTitle: "Payment by credit or debit card",
//   images: {
//     visa: "visa-card-url", // Replace with actual URL
//     masterCard: "mastercard-card-url", // Replace with actual URL
//     mada: "mada-card-url", // Replace with actual URL
//   },
//   price: "SAR 750.00",
//   imageSrc: "course-image-url", // Replace with actual URL
//   terms: {
//     fullText:
//       "Your subscription will automatically renew each year. After the first year, you will be charged SAR 750 for each renewal until you cancel your subscription. You can cancel at any time on your account's subscription page or by submitting a support request. If you cancel, previous fees will not be refunded, but you can continue to use the service until the end of the period you have paid for.",
//     part1: "By clicking the 'Pay' button above, you agree to the ",
//     part2: " and acknowledge that you have read our ",
//   },
// };

const PaymentForm2 = () => {
  const checkoutpage = async () => {
    const userDetails = auth.getAuthData();
    const token = userDetails?.token;

    const requestBody = {
      amount: 750,
      courseId: "paymentID", // Replace with dynamic paymentID if applicable
      callback: "https://maflam.web.app/success",
      return: "https://maflam.web.app/success",
      token,
    };

    try {
      const response = await axios.post(
        `https://backend.maflam.com/maflam/paymenttransction`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response?.data;
      if (data?.data?.redirect_url) {
        window.location.href = data.data.redirect_url;
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      console.error("Checkout Error:", err);
      const errorMessage = err.response?.data?.message || err.message;
      toast.error(`Error: ${errorMessage}`);
    }
  };
  


  return (
    <div className={styles.maincontainer}>
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src={cardDetails.imageSrc}
            alt="Course"
            className={styles.image}
          />
          <h2 className={styles.price}>{cardDetails.price}</h2>
          <h3 className={styles.title}>{cardDetails.title}</h3>
          <hr />
          <div className={styles.paymentCard}>
            <p className={styles.titles}>{cardDetails.paymentTitle}</p>
            <img src={cardDetails.cardImg} alt="Visa" />
            <img src={cardDetails.cardImg1} alt="MasterCard" />
            <img src={cardDetails.cardImg2} alt="Mada" />
          </div>
          <hr />
          <button
            type="button"
            onClick={checkoutpage}
            className={styles.payBtn}
          >
            Pay Now
          </button>
        </div>

        <div>
          {/* <p className={styles.termconditions}>{cardDetails.terms.fullText}</p> */}
        </div>
        <div>
          {/* <p className={styles.termconditions1}>
            {cardDetails.terms.part1}
            <Link to="/terms&condition">Terms and Conditions</Link>
            {cardDetails.terms.part2}
            <Link to="/privacy-policy">Privacy Policy</Link>
          </p> */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PaymentForm2;
