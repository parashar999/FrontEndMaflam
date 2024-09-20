
import styles from './JoinUs.module.css';

const JoinUs = () => {
  return (

    <div className={styles.maincontainer}>
    <div className={styles.container}>
      <div className={styles.JoinUsBox}>
        <h2 className={styles.heading}>Join our newslatter now </h2>
        <div className={styles.serachoption}>
        <div ><button className={styles.button}>Send</button></div>
       <div className={styles.inputBox}>
       
          <input
            type="email"
            className={styles.inputField}
            placeholder="Your email address..."
          />
        
        </div>
        </div>
       
      </div></div>
      </div>
    
  );
};

export default JoinUs;
