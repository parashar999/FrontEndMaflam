import React, { useEffect, useState } from "react";
// import FooterLogo from '../../assets/footerLogo.svg';
import styles from "./Footer.module.css";
import axios from "axios";
import { assests } from "../../assets/assests";
// import {  footerColumnData } from '../../assets/assests';
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext/LanguageContext";

// const Footer = () => {

const Footer = () => {
  const [footerColumnData1, setFooterColumnData1] = useState([]);
  const [footerSubColumnData1, setFooterSubColumnData1] = useState([]);
  const { language, direction, toggleLanguage } = useContext(LanguageContext);
  const FooterGetApi = (lang) => {
    // Fetch footer data based on the selected language
    // axios.get(`https://prominenttrades.in/maflam/fetch-footerdata?lang=${lang}`)
    axios
      .get(`https://backend.maflam.com/maflam/fetch-footerdata?lang=${lang}`)
      // get(`http://192.168.1.39:3001/maflam/fetch-footerdata?lang=${lang}`)

      // axios.get('http://3.29.240.167:3001/maflam/fetch-footerdata?lang=${lang}')
      .then((response) => {
        setFooterColumnData1(response.data);
        setFooterSubColumnData1(response.data[1]); // Set the fetched data in state
      })
      .catch((error) => {
        console.error("Error fetching footer data:", error);
      });
  };

  const purchasePolicy =
    language === "ar" ? "شروط الاستخدام" : "Purchase Policy";
  const helpCenter = language === "ar" ? "سياسة الخصوصية" : " Help Center";
  const Community =
    language === "ar" ? "مركز المساعدة" : "Community Guidelines";
  const PrivacyPolicy =
    language === "ar" ? "مبادئ مجتمع مفلم" : "Privacy Policy";
  const termsandcondition =
    language === "ar" ? "سياسة الشراء" : " Terms and Conditions";
  const copyrighttext =
    language === "ar"
      ? "جميع الحقوق محفوظة © مفلم 2023"
      : " All rights reserved © Maflam 2023";

  useEffect(() => {
    // Call the API when the component loads or when language changes
    FooterGetApi(language === "ar" ? 0 : 1);
  }, [language]);

  // const [footerColumnData1, setFooterColumnData1] = useState([])

  // const FooterGetApi = () =>{
  //   // axios.get('http://192.168.1.39:3001/maflam/get-footer-data')
  //   axios.get('http://192.168.1.39:3001/maflam/fetch-footerdata?lang=0')
  //   // axios.get('http://3.29.240.167:3001/maflam/get-footer-data')
  // .then(response => {
  //   setFooterColumnData1(response.data);
  //     console.log("Data fetched successfully:", response.data);
  // })
  // .catch(error => {
  //     console.error('Error fetching data:', error);
  // });
  // }

  // useEffect(()=>{
  //   FooterGetApi()
  // })

  return (
    <footer className={styles.footer}>
      <hr style={{maxWidth:'1580px', margin:'auto', marginBottom:'50px', opacity:'0.2'}} />

      <div className={styles.container}>
      <div className={styles.footerColumn}>
            <img
              src={assests.Footerlogo1}
              alt="Footer Logo"
              className={styles.footerLogo}
            />
          </div>
        <div className={styles.footerColumns}>
          {footerColumnData1.map((column, index) => (
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
      </div>

          <hr style={{maxWidth:'1580px', margin:'auto', marginTop:'20px', opacity:'0.2'}} />

      <div className={styles.footerLinks}>
     
     <ul className={styles.footerLinks}>
       <li>
         <a href="/purchaseCancellation">{purchasePolicy}</a>
       </li>
       <li>
         <a href="/contentrequired">{helpCenter}</a>
       </li>
       <li>
         <a href="/CommunityGuidelines">{Community}</a>
       </li>
       <li>
         <a href="/privacypolicy">{PrivacyPolicy}</a>
       </li>
       <li>
         <a href="/terms&condition">{termsandcondition}</a>
       </li>
     </ul>
     <div className={styles.footerBottom}>
       <p>{copyrighttext}</p>
     </div>
   </div>
    </footer>
  );
};

export default Footer;
