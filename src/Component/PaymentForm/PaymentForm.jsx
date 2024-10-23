

import { useContext } from 'react';
import styles from './PaymentForm.module.css';
import { Link } from 'react-router-dom';
import { CheckoutPaymentContext } from '../../store/CheckoutPaymentContext';

const PaymentForm = () => {
  const { checkoutPaymentContextDetails, loading, error } = useContext(CheckoutPaymentContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  // Ensure that the API data exists before rendering
  const cardDetails = checkoutPaymentContextDetails?.maflamData1 || [];
  const termsDetails = checkoutPaymentContextDetails?.maflamPricingDetailsSec5 || [];
  const imageSrc = checkoutPaymentContextDetails?.getMaflamPricingDetailsSec10?.imageUrl;

  return (
    <div className={styles.maincontainer}>
      <div className={styles.container}>
        <div className={styles.card}>
          <img src={imageSrc} alt="Course Image" className={styles.image} />
          <h2 className={styles.price}>{cardDetails[0]?.title}</h2> {/* Price */}
          <h3 className={styles.title}>{cardDetails[1]?.title}</h3> {/* Course title */}
          <hr />
          <div className={styles.paymentCard}>
            <p className={styles.titles}>{cardDetails[2]?.title}</p> {/* Payment Method */}
            <img src={cardDetails[3]?.imageUrl} alt="NotFound" />
            <img src={cardDetails[4]?.imageUrl} alt="visa" />
            <img src={cardDetails[5]?.imageUrl} alt="master card" />
          </div>
          <hr />

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>{cardDetails[6]?.title}</label>
              <input type="text" placeholder={cardDetails[6]?.description} />
            </div>
            <div className={styles.inputGroup}>
              <label>{cardDetails[7]?.title}</label>
              <input type="text" placeholder={cardDetails[7]?.description} />
            </div>
            <div className={styles.inputGroupHalf}>
              <div>
                <label>{cardDetails[9]?.title}</label>
                <input type="text" placeholder={cardDetails[9]?.description} />
              </div>
              <div>
                <label>{cardDetails[8]?.title}</label>
                <input type="text" placeholder={cardDetails[8]?.description} />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>{cardDetails[10]?.title}</label>
              <div className={styles.coupon}>
                <input type="text" placeholder="Enter Coupon" />
                <button type="button" className={styles.sendBtn}>{cardDetails[10]?.description}</button>
              </div>
            </div>

            <button type="submit" className={styles.payBtn}>{cardDetails[11]?.title}</button>
            <p className={styles.paras}>{cardDetails[12]?.title}</p>
          </form>
        </div>

        <div>
          <p className={styles.termconditions}>{termsDetails[0]?.title}</p>
        </div>
        <div>
          <p className={styles.termconditions1}>
            {termsDetails[1]?.title} 
            <Link to="/terms&condition"> Terms and Conditions </Link> 
            {termsDetails[2]?.title} 
            <Link to="/privacy-policy"> Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;



// import { useContext, useState } from 'react';
// import styles from './PaymentForm.module.css';
// import { Link } from 'react-router-dom';
// import { CheckoutPaymentContext } from '../../store/CheckoutPaymentContext';

// const PaymentForm = () => {
//   const { checkoutPaymentContextDetails, loading, error } = useContext(CheckoutPaymentContext);
//   const [paymentLoading, setPaymentLoading] = useState(false); // For handling payment loading state

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading data</p>;

//   // Ensure that the API data exists before rendering
//   const cardDetails = checkoutPaymentContextDetails?.maflamData1 || [];
//   const termsDetails = checkoutPaymentContextDetails?.maflamPricingDetailsSec5 || [];
//   const imageSrc = checkoutPaymentContextDetails?.getMaflamPricingDetailsSec10?.imageUrl;

//   // Function to handle the ClickPay payment
//   const handlePayment = async (event) => {
//     event.preventDefault();
//     setPaymentLoading(true);

//     try {
//       // Replace with actual ClickPay payment request logic
//       const response = await initiateClickPayPayment({
//         amount: cardDetails[11]?.description, // Assuming price is stored in description
//         currency: 'USD',
//         description: cardDetails[1]?.title, // Course title
//         customerEmail: 'customer@example.com', // Replace with dynamic email
//         customerName: 'Customer Name', // Replace with dynamic customer name
//       });

//       if (response.success) {
//         // Redirect to success page or show a success message
//         alert('Payment successful!');
//       } else {
//         alert('Payment failed: ' + response.error);
//       }
//     } catch (error) {
//       alert('Error processing payment: ' + error.message);
//     } finally {
//       setPaymentLoading(false);
//     }
//   };

//   // Mock ClickPay payment request
//   const initiateClickPayPayment = async (paymentDetails) => {
//     // Replace with ClickPay API integration logic
//     console.log('Initiating payment with details:', paymentDetails);
//     return { success: true }; // Simulating successful payment
//   };

//   return (
//     <div className={styles.maincontainer}>
//       <div className={styles.container}>
//         <div className={styles.card}>
//           <img src={imageSrc} alt="Course Image" className={styles.image} />
//           <h2 className={styles.price}>{cardDetails[0]?.title}</h2> {/* Price */}
//           <h3 className={styles.title}>{cardDetails[1]?.title}</h3> {/* Course title */}
//           <hr />
//           <div className={styles.paymentCard}>
//             <p className={styles.titles}>{cardDetails[2]?.title}</p> {/* Payment Method */}
//             <img src={cardDetails[3]?.imageUrl} alt="NotFound" />
//             <img src={cardDetails[4]?.imageUrl} alt="NotFound" />
//             <img src={cardDetails[5]?.imageUrl} alt="NotFound" />
//           </div>
//           <hr />

//           <form className={styles.form} onSubmit={handlePayment}>
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

//             <button type="submit" className={styles.payBtn} disabled={paymentLoading}>
//               {paymentLoading ? 'Processing...' : cardDetails[11]?.title}
//             </button>
//             <p className={styles.paras}>{cardDetails[12]?.title}</p>
//           </form>
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
//     </div>
//   );
// };


// export default PaymentForm;





// import styles from './PaymentForm.module.css';
// import { cardDetails } from '../../assets/Assests';
// import { Link } from 'react-router-dom';
// // import { cardDetails } from '../../assets/assests';

// const PaymentForm = () => {


//   return (
//     <div className={styles.maincontainer}>
   
//     <div className={styles.container}>
     
//       <div className={styles.card}>
//         <img src={cardDetails.imageSrc} alt="Course Image" className={styles.image} />
//         <h2 className={styles.price}>{cardDetails.priceHead}</h2>
//         <h3 className={styles.title}>{cardDetails.title}</h3>
//         <hr />
//         <div className={styles.paymentCard}> <p className={styles.titles}>{cardDetails.title2}</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         <img src={cardDetails.cardImg} alt="NotFound" />
//         <img src={cardDetails.cardImg1} alt="NotFound" />
//         <img src={cardDetails.cardImg2} alt="NotFound" /></div>
//         <hr />

//         <form className={styles.form}>
//           <div className={styles.inputGroup}>
//             <label>Name on card</label>
//             <input type="text" placeholder="Name on card" />
//           </div>
          
//           <div className={styles.inputGroup}>
//             <label>Card Number</label>
//             <input type="text" placeholder="XXX XXX XXX XXX" />
//           </div>

//           <div className={styles.inputGroupHalf}>
//             <div>
//               <label>Security Code</label>
//               <input type="text" placeholder="CVV" />
//             </div>
//             <div>
//               <label>Expiration Date</label>
//               <input type="text" placeholder="MM/YY" />
//             </div>
//           </div>
// {/* 
//           <div className={styles.inputGroup}> 
//             <label>Coupon</label>
//             <div className={styles.coupon}><input type="text" placeholder="Enter Coupon" />
//             <button type="button" className={styles.sendBtn}>Send</button></div>
//           </div> */}

// <div className={styles.inputGroup}> 
//   <label>Coupon</label>
//   <div className={styles.coupon}>
//     <input type="text" placeholder="Enter Coupon" />
//     <button type="button" className={styles.sendBtn}>Send</button>
//   </div>
// </div>


//           <button type="submit" className={styles.payBtn}> {cardDetails.price}</button>
//         <p className={styles.paras}> {cardDetails.para} </p>
//         </form>


//       </div>
//       <div>   <p className={styles.termconditions}> {cardDetails.termcondition} </p></div>
//       <div>   <p className={styles.termconditions1}> {cardDetails.termcondition1} <Link to="/terms&condition"> Terms and Conditions  </Link>  {cardDetails.termcondition2} <Link To="">  Privacy Policy .</Link> </p></div>
//       </div>
     
//     </div>
 
   
//   );
// };

// export default PaymentForm;