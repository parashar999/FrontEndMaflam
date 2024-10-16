





import { useContext } from 'react';
import { AboutusPageContext } from '../../store/AboutUsPageContext';
import styles from './JoinUs.module.css';

const JoinUs = () => {
  const { aboutusScreenDetails, loading, error } = useContext(AboutusPageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Destructure the aboutUsDetails60 data
  const aboutUsDetails60 = aboutusScreenDetails?.aboutUsDetails60 || [];

  // Extract the relevant titles
  const joinTitle = aboutUsDetails60[0]?.title || "Join our newsletter now";
  const emailPlaceholder = aboutUsDetails60[1]?.title || "Your email address...";
  const buttonText = aboutUsDetails60[2]?.title || "Send";

  // Extract imageUrl if available
  const imageUrl = aboutUsDetails60[0]?.imageUrl || '';

  return (
    <div className={styles.maincontainer} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className={styles.container}>
        <div className={styles.JoinUsBox}>
          <h2 className={styles.heading}>{joinTitle}</h2>
          <div className={styles.serachoption}>
            <div className={styles.inputBox}>
              <input
                type="email"
                className={styles.inputField}
                placeholder={emailPlaceholder}
              />
            </div>
            <div>
              <button className={styles.button}>{buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;

// import styles from './JoinUs.module.css';

// const JoinUs = () => {
//   return (

//     <div className={styles.maincontainer}>
//     <div className={styles.container}>
//       <div className={styles.JoinUsBox}>
//         <h2 className={styles.heading}>Join our newslatter now </h2>
//         <div className={styles.serachoption}>
        
//        <div className={styles.inputBox}>
       
//           <input
//             type="email"
//             className={styles.inputField}
//             placeholder="Your email address..."
//           />
        
//         </div>
//         <div ><button className={styles.button}>Send</button></div>
//         </div>
       
//       </div></div>
//       </div>
    
//   );
// };

// export default JoinUs;
