// MaflanContent.js
import { useContext } from 'react';
import { AboutusPageContext } from '../../store/AboutUsPageContext';
import styles from './MaflanContent.module.css';
import { Link } from 'react-router-dom';

const MaflanContent = () => {
  const { aboutusScreenDetails, loading, error } = useContext(AboutusPageContext);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Destructure the aboutUsDetails1 data
  const aboutUsDetails1 = aboutusScreenDetails?.aboutUsDetails1 || [];

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  return (
    <div className={styles.maincontainer}>
      <div className={styles.container}>
        <div className={styles.JoinUsBox}>
          {/* Rendering the first title and image */}
          <h2 className={styles.heading}>{aboutUsDetails1[0]?.title || ''}</h2>

          <div className={styles.serachoption}>
            <button className={styles.button} onClick={handleScrollToTop}>
              <Link to="/prc">{aboutUsDetails1[1]?.title || ''}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaflanContent;



// import styles from './MaflanContent.module.css';

// const MaflanContent = () => {
//   return (
//   <div className={styles.maincontainer } >
//       <div className={styles.container}>
     
//      <div className={styles.JoinUsBox}>
//        <h2 className={styles.heading}>Maflam's content is available 24/7. </h2>
//        <div className={styles.serachoption}>
//        <button className={styles.button}>Start Learning</button>
      
//        </div>
      
//      </div></div>
//   </div>
    
//   );
// };

// export default MaflanContent;
