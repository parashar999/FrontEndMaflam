// import { useContext } from "react";
// import styles from "./PaymentForm.module.css";
// import { Link } from "react-router-dom";
// import { CheckoutPaymentContext } from "../../store/CheckoutPaymentContext";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import auth from "../../Auth/Auth";
// import { courses } from "../../assets/assests";

// const checkoutpage = async () => {
//   const userdetails = auth.getAuthData();
//   const token = userdetails.token;
//   const requestBody = {
//     amount: 750,
//     coursesId : "672c5ee7da73549420503e9c",
//     callback: "https://maflam.web.app/mycourses",
//   };

//   try {
//     // console.log("Checkout Page called")
//     // console.log(token);
//     const response = await axios.post(
//       `https://backend.maflam.com/maflam/paymenttransction/${coursesId}`,
//       requestBody,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     toast.success(response.data.message);
//     const data = response.data;
//     if (data) {
//       // console.log(response.data.data.redirect_url);
//       window.open(response.data.data.redirect_url);
//     } else {
//       throw new Error("Invalid response from server");
//     }
//     toast.success(response.data.message);
//   } catch (err) {
//     console.error("Sign Up Error:", err);

//     const errorMessage = err.response?.data?.message || err.message;
//     toast.error(`Error: ${errorMessage}`);
//     // setError("Sign Up failed. Please check your details.");
//   }
// };

// const PaymentForm = () => {
//   const { checkoutPaymentContextDetails, loading, error } = useContext(
//     CheckoutPaymentContext
//   );

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading data</p>;

//   // Ensure that the API data exists before rendering
//   const cardDetails = checkoutPaymentContextDetails?.maflamData1 || [];
//   const termsDetails =
//     checkoutPaymentContextDetails?.maflamPricingDetailsSec5 || [];
//   const imageSrc =
//     checkoutPaymentContextDetails?.getMaflamPricingDetailsSec10?.imageUrl;

//   return (
//     <div className={styles.maincontainer}>
//       <div className={styles.container}>
//         <div className={styles.card}>
//           <img src={imageSrc} alt="Course Image" className={styles.image} />
//           <h2 className={styles.price}>{cardDetails[0]?.title}</h2>{" "}
//           {/* Price */}
//           <h3 className={styles.title}>{cardDetails[1]?.title}</h3>{" "}
//           {/* Course title */}
//           <hr />
//           <div className={styles.paymentCard}>
//             <p className={styles.titles}>{cardDetails[2]?.title}</p>{" "}
//             {/* Payment Method */}
//             <img src={cardDetails[3]?.imageUrl} alt="NotFound" />
//             <img src={cardDetails[4]?.imageUrl} alt="visa" />
//             <img src={cardDetails[5]?.imageUrl} alt="master card" />
//           </div>
//           <hr />
//           <div>
//             <span style={{ height: "100px" }}></span>
//           </div>
//           <button
//             type="submit"
//             onClick={checkoutpage}
//             className={styles.payBtn}
//           >
//             {cardDetails[11]?.title}
//           </button>
//           {/* <form className={styles.form}>
//             <div className={styles.inputGroup}>
//               <label>{cardDetails[6]?.title}</label>
//               <input type="text" placeholder={cardDetails[6]?.description} />
//             </div>
//             <div className={styles.inputGroup}>
//               <label>{cardDetails[7]?.title}</label>
//               <input type="text" placeholder={cardDetails[7]?.description} />
//             </div>
//             <div className={styles.inputGroupHalf}>
//               <div>
//                 <label>{cardDetails[9]?.title}</label>
//                 <input type="text" placeholder={cardDetails[9]?.description} />
//               </div>
//               <div>
//                 <label>{cardDetails[8]?.title}</label>
//                 <input type="text" placeholder={cardDetails[8]?.description} />
//               </div>
//             </div>

//             <div className={styles.inputGroup}>
//               <label>{cardDetails[10]?.title}</label>
//               <div className={styles.coupon}>
//                 <input type="text" placeholder="Enter Coupon" />
//                 <button type="button" className={styles.sendBtn}>{cardDetails[10]?.description}</button>
//               </div>
//             </div>

//             <button type="submit" className={styles.payBtn}>{cardDetails[11]?.title}</button>
//             <p className={styles.paras}>{cardDetails[12]?.title}</p>
//           </form> */}
//         </div>

//         <div>
//           <p className={styles.termconditions}>{termsDetails[0]?.title}</p>
//         </div>
//         <div>
//           <p className={styles.termconditions1}>
//             {termsDetails[1]?.title}
//             <Link to="/terms&condition"> Terms and Conditions </Link>
//             {termsDetails[2]?.title}
//             <Link to="/privacy-policy"> Privacy Policy</Link>
//           </p>
//         </div>
//       </div>
//       <ToastContainer/>
//     </div>
//   );
// };

// export default PaymentForm;
import { useContext, useEffect, useState } from "react";
import styles from "./PaymentForm.module.css";
import { Link, useParams } from "react-router-dom";
import { CheckoutPaymentContext } from "../../store/CheckoutPaymentContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import auth from "../../Auth/Auth";



const PaymentForm = () => {
  const { checkoutPaymentContextDetails, loading, error } = useContext(
    CheckoutPaymentContext
  );



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const [paymentID,setPaymentID] = useState(null)
  const { paymentId } = useParams();

  // Get a specific parameter
  useEffect(() => {
    setPaymentID(paymentId)
  }, [])

  if(!paymentID){
    return <p>Loading...</p>;
  }  
  

  const checkoutpage = async () => {
    const userdetails = auth.getAuthData();
    const token = userdetails?.token; // Ensure token is available
    const requestBody = {
      amount: 750,
      courseId: paymentID,
      callback: "https://maflam.web.app/success",
      return :"https://maflam.web.app/success",
      // callback: "https://maflam.web.app/success",
      // return:  "https://maflam.web.app/success",
      token,
      //  callback: "http://localhost:5173/success",
      // callback: `https://maflam.web.app/checkout/${courseId}`,
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
      if (data) {
        // toast.success(data.message);
        // window.open(data.data?.redirect_url, "_blank"); // Ensure URL opens in a new tab
        window.location.href = data.data?.redirect_url;  

      } else {
        throw new Error("Invalid response from server");
      }
    } catch (err) {
      console.error("Checkout Error:", err);
      const errorMessage = err.response?.data?.message || err.message;
      toast.error(`Error: ${errorMessage}`);
    }
  };

  const cardDetails = checkoutPaymentContextDetails?.maflamData1 || [];
  const termsDetails =
    checkoutPaymentContextDetails?.maflamPricingDetailsSec5 || [];
  const imageSrc =
    checkoutPaymentContextDetails?.getMaflamPricingDetailsSec10?.imageUrl ||
    "/path/to/default-image.jpg"; // Fallback image

    console.log("pricing _>>>>> " , cardDetails)

  return (
    <div className={styles.maincontainer}>
      <div className={styles.container}>
        <div className={styles.card}>
          <img src={imageSrc} alt="Course" className={styles.image} />
          <h2 className={styles.price}> SAR {cardDetails[0]?.title || "N/A"} </h2>
          <h3 className={styles.title}>{cardDetails[1]?.title || "N/A"}</h3>
          <hr />
          <div className={styles.paymentCard}>
            <p className={styles.titles}>{cardDetails[2]?.title || "Payment Methods"}</p>
            <img src={cardDetails[3]?.imageUrl} alt="Not Found" />
            <img src={cardDetails[4]?.imageUrl} alt="Visa" />
            <img src={cardDetails[5]?.imageUrl} alt="MasterCard" />
          </div>
          <hr />
          <button
            type="button"
            onClick={checkoutpage}
            className={styles.payBtn}
          >
            {cardDetails[12]?.title || "Pay Now"}
          </button>
        </div>

        <div>
          <p className=  {styles.termconditions}> {termsDetails[0]?.title || ""} </p>
        </div>
        <div>
          <p className={styles.termconditions1}>
            {termsDetails[1]?.title || ""}
            <Link to="/terms&condition"> Terms and Conditions </Link>
            {termsDetails[2]?.title || ""}
            <Link to="/privacy-policy"> Privacy Policy</Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PaymentForm;
