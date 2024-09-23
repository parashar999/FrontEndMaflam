


import styles from './PaymentForm.module.css';
import { cardDetails } from '../../assets/Assests';
import { Link } from 'react-router-dom';
// import { cardDetails } from '../../assets/assests';

const PaymentForm = () => {


  return (
    <div className={styles.maincontainer}>
   
    <div className={styles.container}>
     
      <div className={styles.card}>
        <img src={cardDetails.imageSrc} alt="Course Image" className={styles.image} />
        <h2 className={styles.price}>{cardDetails.priceHead}</h2>
        <h3 className={styles.title}>{cardDetails.title}</h3>
        <hr />
        <div className={styles.paymentCard}> <p className={styles.titles}>{cardDetails.title2}</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={cardDetails.cardImg} alt="NotFound" />
        <img src={cardDetails.cardImg1} alt="NotFound" />
        <img src={cardDetails.cardImg2} alt="NotFound" /></div>
        <hr />

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Name on card</label>
            <input type="text" placeholder="Name on card" />
          </div>
          
          <div className={styles.inputGroup}>
            <label>Card Number</label>
            <input type="text" placeholder="XXX XXX XXX XXX" />
          </div>

          <div className={styles.inputGroupHalf}>
            <div>
              <label>Security Code</label>
              <input type="text" placeholder="CVV" />
            </div>
            <div>
              <label>Expiration Date</label>
              <input type="text" placeholder="MM/YY" />
            </div>
          </div>
{/* 
          <div className={styles.inputGroup}> 
            <label>Coupon</label>
            <div className={styles.coupon}><input type="text" placeholder="Enter Coupon" />
            <button type="button" className={styles.sendBtn}>Send</button></div>
          </div> */}

<div className={styles.inputGroup}> 
  <label>Coupon</label>
  <div className={styles.coupon}>
    <input type="text" placeholder="Enter Coupon" />
    <button type="button" className={styles.sendBtn}>Send</button>
  </div>
</div>


          <button type="submit" className={styles.payBtn}> {cardDetails.price}</button>
        <p className={styles.paras}> {cardDetails.para} </p>
        </form>


      </div>
      <div>   <p className={styles.termconditions}> {cardDetails.termcondition} </p></div>
      <div>   <p className={styles.termconditions1}> {cardDetails.termcondition1} <Link to=""> Terms and Conditions  </Link>  {cardDetails.termcondition2} <Link To="">  Privacy Policy .</Link> </p></div>
      </div>
     
    </div>
 
   
  );
};

export default PaymentForm;
