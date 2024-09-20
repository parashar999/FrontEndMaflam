
import styles from './Checkout.module.css'; // Modular CSS

const paymentFields = [

  { label: 'Name on card', placeholder: 'Name on card', type: 'text', id: 'name' },
  { label: 'Card Number', placeholder: 'XXX XXX XXX XXX', type: 'text', id: 'cardNumber' },
  { label: 'Security code', placeholder: 'CVV', type: 'password', id: 'cvv' },
  { label: 'Expiration Date', placeholder: 'MM/YY', type: 'text', id: 'expiry' },
  { label: 'Coupon', placeholder: 'Enter coupon', type: 'text', id: 'coupon' },
];
// const ImageField =[{

// }]

const Checkout = () => {
  return (
    <div className={styles.paymentContainer}>
      <img
        src="path_to_image"
        alt="Course"
        className={styles.courseImage}
      />
      <h2 className={styles.price}>750.00 SAR</h2>
      <h3 className={styles.title}>Fundamentals of Acting</h3>
      <form className={styles.paymentForm}>
        <h4>Payment by credit or debit card</h4>
        <div   className={styles.cards}>
          <img src="path_to_mastercard_logo" alt="MasterCard" />
          <img src="path_to_visa_logo" alt="Visa" />
        </div>

       
        {paymentFields.map((field) => (
          <div key={field.id} className={styles.formGroup}>
            <label htmlFor={field.id}>{field.label}</label>
            <input
              type={field.type}
              id={field.id}
              placeholder={field.placeholder}
              className={styles.inputField}
            />
          </div>
        ))}

        <button type="submit" className={styles.submitButton}>Pay SAR 750.00</button>
      </form>
    </div>
  );
};

export default Checkout;
