import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
import { LanguageContext } from "../LanguageContext/LanguageContext";
import axios from "axios";
import auth from "../../Auth/Auth.js";

const Navbar = () => {
  const userDetails = auth.getAuthData();
  console.log("from Navbar", userDetails);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [navItems1, setNavItems1] = useState([]);
  const [user, setUser] = useState(null); // Store user data here
  const navigate = useNavigate();
  const { language, direction, toggleLanguage } = useContext(LanguageContext);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  // Fetch nav items based on the language
  const FooterGetApi = (lang) => {
    axios
      .get(`https://prominenttrades.in/maflam/fetch-nav-item?lang=${lang}`)
      .then((response) => {
        setNavItems1(response.data);
      })
      .catch((error) => {
        console.error("Error fetching footer data:", error);
      });
  };

  useEffect(() => {
    FooterGetApi(language === "ar" ? 0 : 1);

    // Fetch user data from auth service
    const loggedInUser = auth.getAuthData();
    setUser(loggedInUser); // Set user state when logged in
  }, [language]);

  const handleLogoutClick = () => {
    auth.logout();
    localStorage.removeItem("user");
    setUser(null); // Clear user on logout
    navigate("/login");
  };

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
        {user ? (
          <>
            <div className={styles.profile}>
              <img
                src={userDetails.userPhoto}
                alt="Profile"
                className={styles.profileImage}
              />
              <span
                className={styles.username}
              >{`welcome, ${userDetails.username}`}</span>
            </div>
          </>
        ) : (
          <>
            {navItems1.find((item) => item.createAccount) && (
              <a
                href="#signup"
                className={`${styles.signupButton} ${styles.navButton}`}
                onClick={() => navigate("/signUp")}
              >
                {
                  navItems1.find((item) => item.createAccount).createAccount
                    .name
                }
              </a>
            )}
            {navItems1.find((item) => item.logIn) && (
              <a
                href="#login"
                className={`${styles.loginButton} ${styles.navButton}`}
                onClick={() => navigate("/login")}
              >
                {navItems1.find((item) => item.logIn).logIn.name}
              </a>
            )}
          </>
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
