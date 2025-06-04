import  { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo1 from "../../assets/logo1.png";
import navbarBackground from "../../assets/NavbarBackground.png";
import PopUp from "../LogIn/PopUp.jsx";
import { assests } from "../../assets/assests";
import { LanguageContext } from "../LanguageContext/LanguageContext";
import axios from "axios";
import loginarrow from "../../assets/Arrow.png";
import auth from "../../Auth/Auth.js";
import { ScaleLoader } from "react-spinners";
import { usePopupContext } from "../LogIn/PopupContext.jsx";




const Navbar = () => {
  const userDetails = auth.getAuthData();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [navItems1, setNavItems1] = useState([]);
  const [user, setUser] = useState(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [profileMenuItems, setProfileMenuItems] = useState([]);
  const navigate = useNavigate();
  const { language, direction, toggleLanguage } = useContext(LanguageContext);
  const [isErrorComponentVisible, setIsErrorComponentVisible] = useState(false);
  const { popupData, setPopupValues } = usePopupContext();
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
    language === "ar" ? "ابحث عن دورات تدريبية..." : "Search for courses...";

  const arrow =
    language === "ar" ? (
      <img src={loginarrow} alt="" style={{ marginRight: "10px" }} />
    ) : (
      <img src={loginarrow} alt="" style={{ marginRight: "10px" }} />
    );

  const FooterGetApi = (lang) => {
    axios
      .get(`https://backend.maflam.com/maflam/fetch-nav-item?lang=${lang}`)
      .then((response) => {
        setNavItems1(response.data);
        console.log(response.data, "nav")
        const profileData = response.data.find(
          (item) => item.headerSubCategory
        );
        if (profileData) {
          setProfileMenuItems(profileData.headerSubCategory);
        }
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


  return (
    <div
      className={styles.navmenu}
      
      style={{ backgroundImage: `url(${navbarBackground})` }}
    >
            {isErrorComponentVisible && (
        <div style={{position:'absolute', top:'0px', width:'100%', margin:'auto'}}><PopUp
        titleEN={popupData.titleEN}
        titleAR={popupData.titleAR}
        descriptionEN={popupData.descriptionEN}
        descriptionAR={popupData.descriptionAR}
        buttonText1EN={popupData.buttonText1EN}
        buttonText1AR={popupData.buttonText1AR}
        buttonText2EN={popupData.buttonText2EN}
        buttonText2AR={popupData.buttonText2AR}
        linkText1EN={popupData.linkText1EN}
        linkText1AR={popupData.linkText1AR}
        linkText2EN={popupData.linkText2EN}
        linkText2AR={popupData.linkText2AR}
        button1Link={popupData.button1Link}
        button2Link={popupData.button2Link}
      /></div>     )}
      <nav
        className={`${styles.navbar} ${isHamburgerOpen ? styles.active : ""}`}
      >
        <Link onClick={() => { setOpenDropdown(null); setIsHamburgerOpen(false) }} to="/">
          <img src={logo1} alt="Logo" className={styles.logo} />
        </Link>
        <div className={styles.menuelements}>
          <div className={styles.leftLinks}>
            {navItems1.map((item, index) => (
              <div key={index} className={styles.dropdown}>
                {item.hasDropdown ? (
                  <>
                    <h1
                      style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                      to="#"
                      onClick={() => toggleDropdown(item.name)}
                      className={
                        openDropdown === item.name ? styles.activeLink : ""
                      }
                    >
                      {item.name}
                      <span
                        className={`${styles.arrow} ${openDropdown === item.name
                            ? language === "ar"
                              ? styles.rotate
                              : styles.rotate1
                            : ""
                          }`}
                      >
                        &#8595;
                      </span>
                    </h1>
                    {openDropdown === item.name && (
                      <div className={styles.submenu}>
                        {item.dropdownItems?.map((subItem, subIndex) => (
                          <Link
                            to={subItem.href}
                            key={subIndex}
                            className={styles.dropdownitems}
                            onClick={() => { setOpenDropdown(null); setIsHamburgerOpen(false) }}
                          >
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
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={item.href} onClick={() => { setOpenDropdown(null); setIsHamburgerOpen(false); }} >{item.name}</Link>
                )}
              </div>
            ))}
          </div>
          <div className={styles.searchContainer}>
            <input type="text" placeholder={placeHolderTitle} />
            <Link to="/R2/R3/prc/All">
              <img src={assests.Magnifine} alt="Search Icon" />
            </Link>
          </div>
          <div className={styles.rightLinks}>
            {user ? (
              <div  className={styles.profileContainer}>
                <div className={styles.profile}>
                 <span style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', textAlign:'center'}}  onClick={() => { toggleProfileMenu(); setOpenDropdown(null);  }}>
                  <img
                    src={userDetails.userPhoto}
                    alt="Profile"
                    className={styles.profileImage}
                  />
                  <span className={styles.username}>{`${userDetails.usernameInEng || userDetails.usernameInArb
                    }`}</span>
                 </span>
                  <span>

                    {profileMenuItems.length > 0 && (
                      <span key={0}>
                        <img                      
                          src={profileMenuItems[0].icon}
                          alt={profileMenuItems[0].name}
                          className={styles.subIcon}
                        />
                        &nbsp;
                        {profileMenuItems[0].name === "Log out" || profileMenuItems[0].name === "تسجيل الخروج" ? (
                          <span onClick={handleLogoutClick}>{profileMenuItems[0].name}</span>
                        ) : (
                          <a
                          href={
                            localStorage.getItem("courseCount") > 0
                              ? "https://learn.maflam.com/my/courses.php?lang=ar"
                              : "#"
                          }
                            onClick={() => {
                              console.log(localStorage.getItem("courseCount"));
                              if (localStorage.getItem("courseCount") == 0) {
                                console.log("It's zero");
                                setIsErrorComponentVisible(true);
                                setPopupValues("NotASubscriber");
                              }
                         
                              setIsHamburgerOpen(false);
                           
                            }}
                          >
                            {profileMenuItems[0].name}
                          </a>
                        )}
                      </span>
                    )}
                  </span>
                </div>
                {isProfileMenuOpen && (
                  <div className={styles.profileMenu}  onClick={() => { toggleProfileMenu(); setOpenDropdown(null);  }} >
                    <ul>
                      {profileMenuItems.slice(1,profileMenuItems.length).filter((item) =>  item.name != "My Certificates" && item.name != "My Subscriptions" && item.name != "شهاداتي" && item.name != "اشتراكاتي").map((item, index) => (
                        <li key={index}>
                          <img
                            src={item.icon}
                            alt={item.name}
                            className={styles.subIcon}
                          />
                          &nbsp;
                          {item.name === "Log out" || item.name === "تسجيل الخروج" ? (
                            <span onClick={handleLogoutClick}>{item.name}</span>
                          ) : (



                            <a href={localStorage.getItem("courseCount") > 0
                              ? "https://learn.maflam.com/user/profile.php"
                              : "#"} onClick={() => {                           
                                if (localStorage.getItem("courseCount") == 0) {
                                  console.log("It's zero");
                                  setIsErrorComponentVisible(true);
                                  setPopupValues("canteditProfile");
                                }
                           toggleProfileMenu(); setOpenDropdown(null); setIsHamburgerOpen(false); }}  >{item.name}</a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>                 
            ) : (
              <>
              {/*
                {navItems1.find((item) => item.createAccount) && (
                  <Link

                    to="/signup"
                    onClick={() => { setOpenDropdown(null); setIsHamburgerOpen(false); }}
                    className={`${styles.signupButton} ${styles.navButton}`}
                  >
                    {
                      navItems1.find((item) => item.createAccount).createAccount
                        .name
                    }
                  </Link>
                )}
                */}
                {navItems1.find((item) => item.logIn) && (
                  <span style={{ display: 'flex', flexDirection: 'row-reverse', paddingLeft:'10px', paddingRight: '10px' }}>
                    <span style={{ marginLeft: "10px",  transform: language == 'ar' ? "" : 'scaleX(-1)' }}>{arrow}</span>
                    <Link
                      to="/login"
                      onClick={() => { setOpenDropdown(null); setIsHamburgerOpen(false); }}
                      className={`${styles.loginButton} ${styles.navButton}`}
                    >
                      {direction=="rtl"?"تسجيل الدخول":"Sign In"}
                    </Link>
                    
                  </span>
                  
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