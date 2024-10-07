// import React, { useState } from "react";
// import styles from "./Navbar.module.css";
// import logo from "../../assets/logo.svg";
// import navbarBackground from "../../assets/NavbarBackground.png";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleSubMenu = () => {
//     setIsSubMenuOpen(!isSubMenuOpen);
//   };

//   return (
//     <nav
//       className={styles.navbar}
//       style={{ backgroundImage: `url(${navbarBackground})` }}
//     >
//       <img src={logo} alt="Logo" className={styles.logo} />
//       <div className={styles.leftLinks}>
//         <a href="/aboutus">About Maflam</a>
//         <a href="#pricing">
//           Courses <span className={styles.arrow}>&#8595;</span>
//         </a>
//         <a href="#about">
//           Packages <span className={styles.arrow}>&#8595;</span>
//         </a>
//         <div className={styles.dropdown}>
//           <a href="#training" onClick={toggleSubMenu}>
//             Resources <span className={styles.arrow}>&#8595;</span>
//           </a>
//           {isSubMenuOpen && (
//             <div className={styles.submenu}>
//               <a href="#">Maflam Blog</a>
//               <a href="#">Social Media</a>
//               <a href="#">E-Booklet</a>
//             </div>
//           )}
//         </div>
//         {/* <a href="#resources">
//           Contact Us <span className={styles.arrow}>&#8595;</span>
//         </a> */}
//           <div className={styles.dropdown}>
//           <a href="#training" onClick={toggleSubMenu}>
//             Contact Us <span className={styles.arrow}>&#8595;</span>
//           </a>
//           {isSubMenuOpen && (
//             <div className={styles.submenu}>
//               <a href="#">Maflam Blog</a>
//               <a href="#">Social Media</a>
//               <a href="#">E-Booklet</a>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className={styles.searchContainer}>
//         <input type="text" placeholder="Search for courses...!" />
//       </div>
//       <div className={styles.rightLinks}>
//         <a href="#" target="_blank" className={styles.signupButton}>
//           Create an Account
//         </a>
//         <a href="#login">
//           <span className={styles.arrow}>&#8592; </span> log in
//         </a>
//       </div>
//       <div className={styles.hamburger} onClick={toggleMenu}>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
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








const Navbar = () => {
  // State to track which dropdown is currently open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Handle opening and closing a specific dropdown
  const toggleDropdown = (dropdownName) => {
    if (openDropdown === dropdownName) {
      // If the dropdown is already open, close it
      setOpenDropdown(null);
    } else {
      // Otherwise, open the selected dropdown
      setOpenDropdown(dropdownName);
    }
  };

  return (
    <nav
      className={styles.navbar}
      style={{ backgroundImage: `url(${navbarBackground})` }}
    >
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.leftLinks}>
        <a href="/aboutus">About Maflam</a>

        {/* Courses Dropdown */}
        <div className={styles.dropdown}>
          <a href="#courses" onClick={() => toggleDropdown("courses")}>
            Courses <span className={styles.arrow}>&#8595;</span>
          </a>
          {openDropdown === "courses" && (
            <div className={styles.submenu}>
              <a href="#">
                <PiSuitcaseSimpleFill />&nbsp;&nbsp;Full Package
              </a>
              <a href="#">
                <RiMovie2Line />&nbsp;&nbsp;Scriptwriting Courses
              </a>
              <a href="#">
                <BiSolidMovie />&nbsp;&nbsp;Directing
              </a>
              <a href="#">
                <ImVideoCamera />&nbsp;&nbsp;Cinematography
              </a>
              <a href="#">
                <PiDiscDuotone />&nbsp;&nbsp;Recording Courses
              </a>
              <a href="#">
                <MdInsertPhoto />&nbsp;&nbsp;Acting Courses
              </a>
              <a href="#">
                <BiSolidMoviePlay />&nbsp;&nbsp;Editing Courses
              </a>
            </div>
          )}
        </div>

        {/* Packages Link */}
        <a href="#about">
          Packages <span className={styles.arrow}>&#8595;</span>
        </a>

        {/* Resources Dropdown */}
        <div className={styles.dropdown}>
          <a href="#resources" onClick={() => toggleDropdown("resources")}>
            Resources <span className={styles.arrow}>&#8595;</span>
          </a>
          {openDropdown === "resources" && (
            <div className={styles.submenu}>
              <a href="#">Maflam Blog</a>
              <a href="#">Social Media</a>
              <a href="#">E-Booklet</a>
            </div>
          )}
        </div>

        {/* Contact Us Dropdown */}
        <div className={styles.dropdown}>
          <a href="#contact" onClick={() => toggleDropdown("contact")}>
            Contact Us <span className={styles.arrow}>&#8595;</span>
          </a>
          {openDropdown === "contact" && (
            <div className={styles.submenu}>
              <a href="#">
                <MdLiveTv />&nbsp;&nbsp;Maflam Training Program
              </a>
              <a href="#">
                <GrGroup />&nbsp;&nbsp;Join our Team
              </a>
              <a href="#">
                <FaPhoneAlt />&nbsp;&nbsp;Contact Information
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Search Container */}
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search for courses...!" />
      </div>

      {/* Right Links */}
      <div className={styles.rightLinks}>
        <a href="#" target="_blank" className={styles.signupButton}>
          Create an Account
        </a>
        <a href="#login">
          <span className={styles.arrow}>&#8592; </span> log in
        </a>
      </div>

      {/* Hamburger Menu */}
      <div className={styles.hamburger} onClick={() => {}}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
