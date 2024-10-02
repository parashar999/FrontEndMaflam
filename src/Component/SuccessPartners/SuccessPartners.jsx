// SuccessPartners.js

// import { successPartners } from './SuccessPartnersData';
import styles from './SuccessPartners.module.css';
import { successPartnerss } from '../../assets/assests';

import OurSuccessStory from '../OurSuccessStory/OurSuccessStory';


  
const SuccessPartners = () => {
  return (
   <div  >
  <div className={styles.success}>   <OurSuccessStory /> </div>
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
    </div>
  );
};

export default SuccessPartners;
