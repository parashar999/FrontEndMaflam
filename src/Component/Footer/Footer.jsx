import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <hr style={{opacity:'0.2', marginBottom:'50px'}} className={styles.footerHr} />
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
                    <Link to={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr className={styles.footerHr} style={{opacity:'0.2', marginTop:'30px'}} />

      <div className={styles.footerLink}>
      <div className={styles.footerBottom}>
          <p>{copyrighttext}</p>
        </div>
        <ul className={styles.footerLinks}>
          <li>
            <Link to="/purchaseCancellation">{purchasePolicy}</Link>
          </li>
          <li>
            <Link to="/contentrequired">{helpCenter}</Link>
          </li>
          <li>
            <Link to="/CommunityGuidelines">{Community}</Link>
          </li>
          <li>
            <Link to="/privacypolicy">{PrivacyPolicy}</Link>
          </li>
          <li>
            <Link to="/terms&condition">{termsandcondition}</Link>
          </li>
        </ul>
   
      </div>
    </footer>
  );
};

export default Footer;
