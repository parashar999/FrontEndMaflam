import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo1 from "../../assets/logo1.png";
import navbarBackground from "../../assets/NavbarBackground.png";
import { FaPhoneAlt } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { MdLiveTv } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { MdInsertPhoto } from "react-icons/md";
import { PiDiscDuotone } from "react-icons/pi";
import { ImVideoCamera } from "react-icons/im";
import { BiSolidMovie } from "react-icons/bi";
import { RiMovie2Line } from "react-icons/ri";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { TfiMobile } from "react-icons/tfi";
import { BiSolidBookAlt } from "react-icons/bi";
import { assests } from "../../assets/assests";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext/LanguageContext";
import axios from "axios";

// const Navbar = ({ language, direction, toggleLanguage }) => {
const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const { language, direction, toggleLanguage } = useContext(LanguageContext);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const [navItems1, setNavItems1] = useState([]);

  const FooterGetApi = (lang) => {
    // Fetch footer data based on the selected language
    axios
      // .get(`http://192.168.1.39:3001/maflam/fetch-footerdata?lang=${lang}`)
      .get(`http://3.29.25.216/maflam//fetch-nav-item?lang=${lang}`)
      .then((response) => {
        setNavItems1(response.data); // Set the fetched data in state
        console.log("Footer data fetched successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching footer data:", error);
      });
  };

  useEffect(() => {
    // Call the API when the component loads or when language changes
    FooterGetApi(language === "ar" ? 0 : 1);
  }, [language]);
  const iconMap = {
    FaPhoneAlt: <FaPhoneAlt />,
    GrGroup: <GrGroup />,
    MdLiveTv: <MdLiveTv />,
    BiSolidMoviePlay: <BiSolidMoviePlay />,
    MdInsertPhoto: <MdInsertPhoto />,
    PiDiscDuotone: <PiDiscDuotone />,
    ImVideoCamera: <ImVideoCamera />,
    BiSolidMovie: <BiSolidMovie />,
    RiMovie2Line: <RiMovie2Line />,
    PiSuitcaseSimpleFill: <PiSuitcaseSimpleFill />,
    HiOutlineClipboardDocumentList: <HiOutlineClipboardDocumentList />,
    TfiMobile: <TfiMobile />,
    BiSolidBookAlt: <BiSolidBookAlt />,
  };

  return (
    <nav
      className={`${styles.navbar} ${isHamburgerOpen ? styles.active : ""}`}
      style={{ backgroundImage: `url(${navbarBackground})` }}
    >
      <button className={styles.langbtn} onClick={toggleLanguage}>
        {language === "ar" ? "English" : "العربية"}
      </button>
      <img src={logo1} alt="Logo" className={styles.logo} />
      <div className={styles.leftLinks}>
        {navItems1.map((item, index) => (
          <div key={index} className={styles.dropdown}>
            {item.hasDropdown ? (
              <>
                <a href="#" onClick={() => toggleDropdown(item.name)}>
                  {item.name}{" "}
                  <span
                    className={`${styles.arrow} ${
                      openDropdown === item.name ? styles.rotate : ""
                    }`}
                  >
                    &#8595;
                  </span>
                </a>
                {openDropdown === item.name && (
                  <div className={styles.submenu}>
                    {item.dropdownItems.map((subItem, subIndex) => (
                      <a href="#" key={subIndex}>
                        {/* {subItem.icon}
                        &nbsp;&nbsp;{subItem.name} */}
                        {iconMap[subItem.icon]}&nbsp;&nbsp;{subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <a href={item.href}>{item.name}</a>
            )}
          </div>
        ))}
      </div>

      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search for courses...!" />
        <img src={assests.Magnifine} alt="Search Icon" />
      </div>
      <div className={styles.searchContainerGlobe}>
        <img src={assests.Globe} alt="Globe Icon" />
      </div>
      <div className={styles.rightLinks}>
        {navItems1.find((item) => item.createAccount) && (
          <a href="#" className={styles.signupButton}>
            {navItems1.find((item) => item.createAccount).createAccount.name}
          </a>
        )}
        {navItems1.find((item) => item.logIn) && (
          <a href="#login">
            <span className={styles.arrow}>&#8592; </span>
            {navItems1.find((item) => item.logIn).logIn.name}
          </a>
        )}
      </div>
      <div className={styles.hamburger} onClick={toggleHamburger}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
