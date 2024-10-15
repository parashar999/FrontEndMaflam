// // SuccessPartners.js

// // import { successPartners } from './SuccessPartnersData';
// import styles from './SuccessPartners.module.css';
// import { successPartnerss } from '../../assets/assests';

// import { HomePageContext } from "../../store/HomePageContext.jsx"; 
// import OurSuccessStory from '../OurSuccessStory/OurSuccessStory';


  
// const SuccessPartners = () => {
//   const { homeScreenDetails, loading, error } = useContext(HomePageContext);

//   if (loading) return <p>Loading...</p>; // Handle loading state
//   if (error) return <p>Error loading data</p>; // Handle error state

//   // Ensure that the API data exists before rendering
//   const countData = homeScreenDetails?.countData || [];
  
//   const title1 = countData[0]?.title || "Default Title";
//   const description1 = countData[1]?.description || "No Description";
//   const description2 = countData[2]?.description || "No Description";
//   const description3 = countData[3]?.description || "No Description";
//   const testimonial = countData[4]?.title || "No Testimonial";

//   return (
//    <div  >
//   <div className={styles.success}>   <OurSuccessStory /> </div>
//     <div className={styles.successPartnersSection}>
       
//       <h2 className={styles.successPartnersTitle}>Success Partners</h2>
//       <div className={styles.partnersLogos}>
//         {successPartnerss.map((partner, index) => (
//           <div key={index} className={styles.partnerLogo}>
//             <img src={partner.logo} alt={partner.name} />
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default SuccessPartners;


import { useContext } from "react";
import styles from './SuccessPartners.module.css';
import { HomePageContext } from "../../store/HomePageContext.jsx"; 
import OurSuccessStory from '../OurSuccessStory/OurSuccessStory';

const SuccessPartners = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Ensure that the API data exists before rendering
  const successPartnersData = homeScreenDetails?.successPartnersData || [];

  return (
    <div>
      <div className={styles.success}>   
        <OurSuccessStory /> 
      </div>
      
      <div className={styles.successPartnersSection}>
        <h2 className={styles.successPartnersTitle}>Success Partners</h2>
        <div className={styles.partnersLogos}>
          {successPartnersData.map((partner, index) => (
            <div key={index} className={styles.partnerLogo}>
              <img src={partner.logoUrl} alt="Image Not Found " />
              <p>{partner.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessPartners;
