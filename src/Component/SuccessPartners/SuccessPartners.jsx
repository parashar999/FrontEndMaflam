// SuccessPartners.js

// import { successPartners } from './SuccessPartnersData';
import styles from './SuccessPartners.module.css';
import { successPartnerss } from '../../assets/assests';


  
const SuccessPartners = () => {
  return (
    <div className={styles.successPartnersSection}>
      <h2 className={styles.successPartnersTitle}>Success Partners</h2>
      <div className={styles.partnersLogos}>
        {successPartnerss.map((partner, index) => (
          <div key={index} className={styles.partnerLogo}>
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessPartners;
