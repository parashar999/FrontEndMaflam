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
      .get(`http://3.29.25.216:3001/maflam//fetch-nav-item?lang=${lang}`)
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
  // Define navigation items and dropdown content
  // const navItems = [
  //   {
  //     name: "About Maflam",
  //     href: "/aboutus",
  //     hasDropdown: false,
  //   },
  //   {
  //     name: "Courses",
  //     hasDropdown: true,
  //     dropdownItems: [
  //       { name: "Full Package", icon: <PiSuitcaseSimpleFill /> },
  //       { name: "Scriptwriting Courses", icon: <RiMovie2Line /> },
  //       { name: "Directing", icon: <BiSolidMovie /> },
  //       { name: "Cinematography", icon: <ImVideoCamera /> },
  //       { name: "Recording Courses", icon: <PiDiscDuotone /> },
  //       { name: "Acting Courses", icon: <MdInsertPhoto /> },
  //       { name: "Editing Courses", icon: <BiSolidMoviePlay /> },
  //     ],
  //   },
  //   {
  //     name: "Packages",
  //     href: "#",
  //     hasDropdown: false,
  //   },
  //   {
  //     name: "Resources",
  //     hasDropdown: true,
  //     dropdownItems: [
  //       { name: "Maflam Blog", icon: <HiOutlineClipboardDocumentList /> },
  //       { name: "Social Media", icon: <TfiMobile /> },
  //       { name: "E-Booklet", icon: <BiSolidBookAlt /> },
  //     ],
  //   },
  //   {
  //     name: "Contact Us",
  //     hasDropdown: true,
  //     dropdownItems: [
  //       { name: "Maflam Training Program", icon: <MdLiveTv /> },
  //       { name: "Join our Team", icon: <GrGroup /> },
  //       { name: "Contact Information", icon: <FaPhoneAlt /> },
  //     ],
  //   },
  // ];

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

      {/* <div className={styles.rightLinks}>
        <a href="#" target="_blank" className={styles.signupButton}>
          Create an Account
        </a>
        <a href="#login">
          <span className={styles.arrow}>&#8592; </span> Log in
        </a>
      </div> */}
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

// import  { useState } from "react";
// import styles from "./Navbar.module.css";
// import logo1 from "../../assets/logo1.png";
// import navbarBackground from "../../assets/NavbarBackground.png";
// import { FaPhoneAlt } from "react-icons/fa";
// import { GrGroup } from "react-icons/gr";
// import { MdLiveTv } from "react-icons/md";
// import { BiSolidMoviePlay } from "react-icons/bi";
// import { MdInsertPhoto } from "react-icons/md";
// import { PiDiscDuotone } from "react-icons/pi";
// import { ImVideoCamera } from "react-icons/im";
// import { BiSolidMovie } from "react-icons/bi";
// import { RiMovie2Line } from "react-icons/ri";
// import { PiSuitcaseSimpleFill } from "react-icons/pi";
// import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
// import { TfiMobile } from "react-icons/tfi";
// import { BiSolidBookAlt } from "react-icons/bi";

// import { assests } from "../../assets/assests";

// const Navbar = ({ language, direction, toggleLanguage }) => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

//   const toggleDropdown = (dropdownName) => {
//     if (openDropdown === dropdownName) {
//       setOpenDropdown(null);
//     } else {
//       setOpenDropdown(dropdownName);
//     }
//   };

//   const toggleHamburger = () => {
//     setIsHamburgerOpen(!isHamburgerOpen);
//   };

//   return (
//     <nav
//       className={`${styles.navbar} ${isHamburgerOpen ? styles.active : ""}`}
//       style={{ backgroundImage: `url(${navbarBackground})` }}
//     >
//        <button className={styles.langbtn}  onClick={toggleLanguage}>
//         {language === "ar" ? "English" : "العربية"}
//       </button>
//       <img src={logo1} alt="Logo" className={styles.logo} />
//       <div className={styles.leftLinks}>
//         <a href="/aboutus">About Maflam</a>

//         <div className={styles.dropdown}>
//           <a href="#courses" onClick={() => toggleDropdown("courses")}>
//             Courses{" "}
//             <span
//               className={`${styles.arrow} ${
//                 openDropdown === "courses" ? styles.rotate : ""
//               }`}
//             >
//               &#8595;
//             </span>
//           </a>
//           {openDropdown === "courses" && (
//             <div className={styles.submenu}>
//               <a href="#">
//                 <PiSuitcaseSimpleFill />
//                 &nbsp;&nbsp;Full Package
//               </a>
//               <a href="#">
//                 <RiMovie2Line />
//                 &nbsp;&nbsp;Scriptwriting Courses
//               </a>
//               <a href="#">
//                 <BiSolidMovie />
//                 &nbsp;&nbsp;Directing
//               </a>
//               <a href="#">
//                 <ImVideoCamera />
//                 &nbsp;&nbsp;Cinematography
//               </a>
//               <a href="#">
//                 <PiDiscDuotone />
//                 &nbsp;&nbsp;Recording Courses
//               </a>
//               <a href="#">
//                 <MdInsertPhoto />
//                 &nbsp;&nbsp;Acting Courses
//               </a>
//               <a href="#">
//                 <BiSolidMoviePlay />
//                 &nbsp;&nbsp;Editing Courses
//               </a>
//             </div>
//           )}
//         </div>

//         <a href="#">
//           Packages{" "}
//           <span
//             className={`${styles.arrow} ${
//               openDropdown === "packages" ? styles.rotate : ""
//             }`}
//             onClick={() => toggleDropdown("packages")}
//           >
//             &#8595;
//           </span>
//         </a>

//         <div className={styles.dropdown}>
//           <a href="#resources" onClick={() => toggleDropdown("resources")}>
//             Resources{" "}
//             <span
//               className={`${styles.arrow} ${
//                 openDropdown === "resources" ? styles.rotate : ""
//               }`}
//             >
//               &#8595;
//             </span>
//           </a>
//           {openDropdown === "resources" && (
//             <div className={styles.submenu}>
//               <a href="#"> <HiOutlineClipboardDocumentList /> &nbsp;&nbsp; Maflam Blog</a>
//               <a href="#"> <TfiMobile /> &nbsp;&nbsp;
//               Social Media</a>
//               <a href="#"> <BiSolidBookAlt /> &nbsp;&nbsp;
//               E-Booklet</a>
//             </div>
//           )}
//         </div>

//         <div className={styles.dropdown}>
//           <a href="#contact" onClick={() => toggleDropdown("contact")}>
//             Contact Us{" "}
//             <span
//               className={`${styles.arrow} ${
//                 openDropdown === "contact" ? styles.rotate : ""
//               }`}
//             >
//               &#8595;
//             </span>
//           </a>
//           {openDropdown === "contact" && (
//             <div className={styles.submenu}>
//               <a href="#">
//                 <MdLiveTv />
//                 &nbsp;&nbsp;Maflam Training Program
//               </a>
//               <a href="#">
//                 <GrGroup />
//                 &nbsp;&nbsp;Join our Team
//               </a>
//               <a href="#">
//                 <FaPhoneAlt />
//                 &nbsp;&nbsp;Contact Information
//               </a>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className={styles.searchContainer}>
//         <input type="text" placeholder="Search for courses...!" />
//         <img src={assests.Magnifine} alt="" />
//       </div>
//       <div className={styles.searchContainerGlobe}>
//         <img src={assests.Globe} alt="" />
//       </div>

//       <div className={styles.rightLinks}>
//         <a href="#" target="_blank" className={styles.signupButton}>
//           Create an Account
//         </a>
//         <a href="#login">
//           <span className={styles.arrow}>&#8592; </span> Log in
//         </a>
//       </div>
//       <div className={styles.hamburger} onClick={toggleHamburger}>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
