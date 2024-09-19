
import styles from './JoinUs.module.css';

const JoinUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.JoinUsBox}>
        <h2 className={styles.heading}>Join our JoinUs now</h2>
        <div className={styles.inputBox}>
          <input
            type="email"
            className={styles.inputField}
            placeholder="Your email address..."
          />
          <button className={styles.button}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
