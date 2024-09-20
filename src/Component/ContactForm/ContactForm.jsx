import { useRef, useState } from "react";
import styles from "./ContactForm.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import { assests } from "../../assets/assests";

const ContactForm = () => {
  const recaptcha = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>We'd love to hear from you</h2>
        <form className={styles.contactForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Full name</label>
            <input type="text" id="name" placeholder="Full name" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="adi.abed@gmail.com" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phone">Phone number</label>
            <input type="text" id="phone" placeholder="966-354-2011" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your message starts here..." />
          </div>
          <div className={styles.captchaContainer}>
            <img src={assests.recapture} alt="" width={257} height={60} />
          </div>

          {/* <ReCAPTCHA ref={recaptcha} sitekey={process.env.REACT_APP_SITE_KEY} /> */}
          <button className={styles.submitButton} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
