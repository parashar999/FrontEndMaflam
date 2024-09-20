

// import React from 'react';
// import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
// import styles from './Footer.module.css'; // Importing the CSS module
// import FooterLogo from '../../assets/footerLogo.svg';

// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.container}>
//         <div className={styles.footerColumns}>
//           <div className={styles.footerColumn}>
//             <h4>Why MaFlam?</h4>
//             <ul>
//               <li><a href="#">خدماتنا</a></li>
//               <li><a href="#">الدورات التدريبية</a></li>
//               <li><a href="#">الدورات</a></li>
//               <li><a href="#">الخبراء</a></li>
//             </ul>
//           </div>
//           <div className={styles.footerColumn}>
//             <h4>Experts</h4>
//             <ul>
//               <li><a href="#">الدورات التدريبية</a></li>
//               <li><a href="#">خدماتنا</a></li>
//               <li><a href="#">الخبراء</a></li>
//               <li><a href="#">الدورات</a></li>
//             </ul>
//           </div>
//           <div className={styles.footerColumn}>
//             <h4>Our Services</h4>
//             <ul>
//               <li><a href="#">الدورات التدريبية</a></li>
//               <li><a href="#">الخبراء</a></li>
//               <li><a href="#">الخبراء</a></li>
//               <li><a href="#">الدورات</a></li>
//             </ul>
//           </div>
//           <div className={styles.footerColumn}>
//             <h4>Courses</h4>
//             <ul>
//               <li><a href="#">خدماتنا</a></li>
//               <li><a href="#">الخبراء</a></li>
//               <li><a href="#">الدورات</a></li>
//               <li><a href="#">الخبراء</a></li>
//             </ul>
//           </div>
//           <div className={styles.footerColumn}>
//             <img src={FooterLogo} alt="Footer Logo" />
//             <ul>
//               <li>
//                 <a href="#">
//                   Our Vision is to become a leading online platform for all Arab students who want to learn the art of filmmaking.
//                 </a>
//               </li>
//               <li className={styles.socialIcons}>
//                 <a href="#" aria-label="Facebook">
//                   <FaFacebook />
//                 </a>
//                 <a href="#" aria-label="Twitter">
//                   <FaTwitter />
//                 </a>
//                 <a href="#" aria-label="LinkedIn">
//                   <FaLinkedin />
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className={styles.footerBottom}>
//           <p>All rights reserved © MAFALAM 2023</p> 
//           <ul className={styles.footerLinks}>
//             <li><a href="#">Terms and Condition</a></li>
//             <li><a href="#">Privacy Policy</a></li>
//             <li><a href="#">Help Center</a></li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import FooterLogo from '../../assets/footerLogo.svg';
import styles from './Footer.module.css';
import { footerColumnData } from '../../assets/assests';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerColumns}>
          {footerColumnData.map((column, index) => (
            <div key={index} className={styles.footerColumn}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className={styles.footerColumn}>
          <img src={FooterLogo} alt="Footer Logo" />
            <ul>
              <li>
                <a href="#">
                  Our Vision is to become a leading online platform for all Arab students who want to learn the art of filmmaking.
                </a>
              </li>
              <li className={styles.socialIcons}>
                <a href="#" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="#" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>All rights reserved © MAFALAM 2023</p>
          <ul className={styles.footerLinks}>
            <li><a href="#">Terms and Condition</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
