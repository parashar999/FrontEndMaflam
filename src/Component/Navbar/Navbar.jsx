import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import loginarrow from "../../assets/Arrow.png";
import { LuHelpCircle } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { CiFlag1 } from "react-icons/ci";
import auth from "../../Auth/Auth.js";
const Navbar = () => {
  const userDetails = auth.getAuthData();
  // console.log("from Navbar", userDetails);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [navItems1, setNavItems1] = useState([]);
  const [user, setUser] = useState(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { language, direction, toggleLanguage } = useContext(LanguageContext);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const placeHolderTitle =
    language === "ar" ? "ابحث عن دورات تدريبية...|" : "Search for courses...!";

  const arrow =
    language === "ar" ? (
      <img src={loginarrow} alt="" style={{ marginRight: "10px" }} />
    ) : (
      <img src={loginarrow} alt="" style={{ marginRight: "10px" }} />
    );

  const FooterGetApi = (lang) => {
    axios
      // .get(`http://192.168.1.39:3001/maflam/fetch-nav-item?lang=${lang}`)
      // .get(`https://prominenttrades.in/maflam/fetch-nav-item?lang=${lang}`)
      .get(`https://backend.maflam.com/maflam/fetch-nav-item?lang=${lang}`)
      .then((response) => {
        // console.log(response.data);
        setNavItems1(response.data);
      })
      .catch((error) => {
        console.error("Error fetching footer data:", error);
      });
  };

  useEffect(() => {
    FooterGetApi(language === "ar" ? 0 : 1);

    const loggedInUser = auth.getAuthData();
    setUser(loggedInUser);
  }, [language]);

  const handleLogoutClick = () => {
    auth.logout();
    localStorage.removeItem("user");
    setUser(null);
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
    <div
      className={styles.navmenu}
      style={{ backgroundImage: `url(${navbarBackground})` }}
    >
      <nav
        className={`${styles.navbar} ${isHamburgerOpen ? styles.active : ""}`}
      >
      <Link to="/">
          <img src={logo1} alt="Logo" className={styles.logo} />
        </Link>

<div className={styles.menuelements}>
        
          <div className={styles.leftLinks}>
            {/* {console.log("check language", language)} */}
            {navItems1.map((item, index) => (
              <div key={index} className={styles.dropdown}  >
                {item.hasDropdown ? (
                  <>
                    <a style={{height:'100%', display:'flex', flexDirection:'row', alignItems:'center'}}href="#" onClick={() => toggleDropdown(item.name)} className={openDropdown === item.name ? styles.activeLink : ""}  >
                      {item.name}
                      <span
                        className={`${styles.arrow} ${
                          openDropdown === item.name ? language==="ar" ? styles.rotate : styles.rotate1:""
                        }`}
                            >
                        &#8595;
                      </span>
                    </a>
                    {openDropdown === item.name && (
                      <div className={styles.submenu}>
                        {item.dropdownItems?.map((subItem, subIndex) => (
                          <a href={subItem.href} key={subIndex} className={styles.dropdownitems}>
                            &nbsp;&nbsp;
                            <img
                              className={
                                language === "ar"
                                  ? styles.subIcon
                                  : styles.subIconArb
                              }
                              src={subItem.icon}
                              alt=""
                            />
                            {subItem.name}
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
            <input type="text" placeholder={placeHolderTitle} />
            <a href="/filmproduction">
              <img src={assests.Magnifine} alt="Search Icon" />
            </a>
          </div>
          {/* <div className={styles.searchContainerGlobe}>
        <img src={assests.Globe} alt="Globe Icon" />
      </div> */}
              <div>
        </div>
          <div className={styles.rightLinks}>
            {user ? (
              <div className={styles.profileContainer}>
                <div className={styles.profile} onClick={toggleProfileMenu}>
                  <img
                    src={userDetails.userPhoto}
                    alt="Profile"
                    className={styles.profileImage}
                  />
                  <span className={styles.username}>{`${
                    userDetails.usernameInEng || userDetails.usernameInArb
                  }`}</span>
                </div>

                {isProfileMenuOpen && (
                  <div className={styles.profileMenu}>
                    <ul>
                      <li className={styles.gappss}>
                        {" "}
                        <MdLiveTv />
                        <Link to="/mycourses"> My Courses</Link>
                      </li>
                      <li className={styles.iconstyle}>
                        {" "}
                        <FaRegUser /> &nbsp;{" "}
                        <Link to="/personalInformation"> My Profile</Link>
                      </li>
                      <li>
                        {" "}
                        <PiCertificateBold /> &nbsp;{" "}
                        <Link to="/mycertificate">My Certificates</Link>
                      </li>
                      <li>
                        {" "}
                        <FaRegHeart /> &nbsp; <Link to="/mywishlist">  My
                        Wishlist</Link>
                      </li>
                      <li>
                        {" "}
                        <CiFlag1 /> &nbsp;{" "}
                        <Link to="/contentrequired">My Subscriptions </Link>
                      </li>
                      <li>
                        {" "}
                        <LuHelpCircle /> &nbsp;
                        <Link to="/contentrequired">Help Center</Link>
                      </li>
                      <li onClick={handleLogoutClick}>
                        {" "}
                        <CgLogOut /> &nbsp; Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
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
                    href=""
                    className={`${styles.loginButton} ${styles.navButton}`}
                    onClick={() => navigate("/login")}
                  >
                    <span style={{ marginLeft: "20px" }}>{arrow}</span>

                    {navItems1.find((item) => item.logIn).logIn.name}
                  </a>
                )}
              </>
            )}
          </div>
        </div>
        <button className={styles.langbtn} onClick={toggleLanguage}>
            {language === "ar" ? "English" : "العربية"}
          </button>
        <div className={styles.hamburger} onClick={toggleHamburger}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
