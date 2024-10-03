
import React from 'react';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaSnapchat, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaThreads } from "react-icons/fa6";

import FooterLogo from '../../assets/footerLogo.svg';
import styles from './Footer.module.css';
import { footerColumnData } from '../../assets/assests';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerColumns}>
          {/* Logo and Social Icons in the First Column */}
          <div className={styles.footerColumn}>
            <img src={FooterLogo} alt="Footer Logo" className={styles.footerLogo} />
            <ul>
            <li className={styles.socialIcons}>
            <a href="#" aria-label="LinkedIn"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="33" height="33" rx="16.5" fill="#39FFFB"/>
<path d="M19.8236 13.8819C19.1489 13.8796 18.4803 14.0103 17.8562 14.2666C17.2321 14.523 16.6646 14.8998 16.1863 15.3757C15.708 15.8516 15.3282 16.4171 15.0687 17.0399C14.8092 17.6626 14.675 18.3305 14.6738 19.0052V24.1814C14.6738 24.3915 14.7573 24.593 14.9059 24.7416C15.0545 24.8902 15.256 24.9736 15.4661 24.9736H17.3147C17.5249 24.9736 17.7264 24.8902 17.8749 24.7416C18.0235 24.593 18.107 24.3915 18.107 24.1814V19.0052C18.1068 18.7652 18.1572 18.5279 18.2549 18.3087C18.3526 18.0896 18.4954 17.8934 18.674 17.7331C18.8525 17.5728 19.0629 17.452 19.2913 17.3784C19.5197 17.3048 19.7611 17.2803 19.9996 17.3062C20.4275 17.3601 20.8207 17.5691 21.1046 17.8937C21.3886 18.2182 21.5436 18.6356 21.5402 19.0668V24.1814C21.5402 24.3915 21.6236 24.593 21.7722 24.7416C21.9208 24.8902 22.1223 24.9736 22.3324 24.9736H24.1811C24.3912 24.9736 24.5927 24.8902 24.7413 24.7416C24.8899 24.593 24.9733 24.3915 24.9733 24.1814V19.0052C24.9722 18.3305 24.838 17.6626 24.5785 17.0399C24.3189 16.4171 23.9391 15.8516 23.4608 15.3757C22.9825 14.8998 22.4151 14.523 21.7909 14.2666C21.1668 14.0103 20.4983 13.8796 19.8236 13.8819Z" fill="#061C2B"/>
<path d="M12.298 14.6733H9.92118C9.48362 14.6733 9.12891 15.0281 9.12891 15.4656V24.1806C9.12891 24.6181 9.48362 24.9729 9.92118 24.9729H12.298C12.7355 24.9729 13.0903 24.6181 13.0903 24.1806V15.4656C13.0903 15.0281 12.7355 14.6733 12.298 14.6733Z" fill="#061C2B"/>
<path d="M11.1096 13.0888C12.2035 13.0888 13.0903 12.202 13.0903 11.1081C13.0903 10.0142 12.2035 9.12744 11.1096 9.12744C10.0157 9.12744 9.12891 10.0142 9.12891 11.1081C9.12891 12.202 10.0157 13.0888 11.1096 13.0888Z" fill="#061C2B"/>
</svg>
</a>
            <a href="#" aria-label="TikTok"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="33" height="33" rx="16.5" fill="#39FFFB"/>
<g clip-path="url(#clip0_9797_441)">
<path d="M19.3335 20.759V12.5696C19.3335 12.5696 20.2731 14.1087 23.6693 14.2027C23.8505 14.2077 24.0003 14.0613 24.0003 13.8832V11.5689C24.0003 11.3966 23.8606 11.2602 23.6854 11.2502C21.051 11.1038 19.7999 9.11804 19.6771 7.29699C19.6661 7.12811 19.5155 7 19.3436 7H16.6576C16.479 7 16.3334 7.14226 16.3334 7.31862V20.3372C16.3334 21.7514 15.2338 22.9818 13.7964 23.0484C12.1533 23.1249 10.8175 21.739 11.0207 20.1009C11.1646 18.9437 12.1093 17.9962 13.2843 17.8356C13.5179 17.804 13.7456 17.8015 13.9665 17.8256C14.1621 17.8473 14.3339 17.7042 14.3339 17.5112V15.191C14.3339 15.0263 14.2061 14.8832 14.0385 14.8732C13.7016 14.8516 13.3562 14.8591 13.0058 14.8982C10.4146 15.1877 8.32283 17.2483 8.03586 19.7956C7.65746 23.1557 10.324 26 13.6669 26C16.7965 26 19.3335 23.5068 19.3335 20.4312" fill="#061C2B"/>
</g>
<defs>
<clipPath id="clip0_9797_441">
<rect width="16" height="19" fill="white" transform="translate(8 7)"/>
</clipPath>
</defs>
</svg>
</a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>          
              </li>

              <li className={styles.socialIcons}>
                <a href="#" aria-label="Whatsapp"><FaWhatsapp /></a>
                <a href="#" aria-label="YouTube"><FaYoutube /></a>
                <a href="#" aria-label="Threads ">< FaThreads  /></a>
              </li>
            </ul>
          </div>

          {/* Render the remaining footer columns */}
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
        </div>

         <div className={styles.footerBottomContainer}>
          <ul className={styles.footerLinks}>
          <li><a href="#">Purchase policy</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Community Guidlines</a></li>
          <li><a href="#">Privacy Policy</a></li>
            <li><a href="/terms&condition">Terms and Condition</a></li>
          </ul>
          <div className={styles.footerBottom}>
            <p>All rights reserved © MAFALAM 2023</p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
