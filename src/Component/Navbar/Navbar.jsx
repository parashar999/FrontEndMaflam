import React, { useState } from "react";
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
import { assests } from "../../assets/assests";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false); // New state for hamburger

  const toggleDropdown = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen); // Toggle hamburger open/close
  };

  return (
    <nav
      className={`${styles.navbar} ${isHamburgerOpen ? styles.active : ""}`}
      style={{ backgroundImage: `url(${navbarBackground})` }}
    >
      <img src={logo1} alt="Logo" className={styles.logo} />
      <div className={styles.leftLinks}>
        <a href="/aboutus">About Maflam</a>
        <div claWssName={styles.dropdown}>
          <a href="#courses" onClick={() => toggleDropdown("courses")}>
            <p>Courses &#8595;</p>
            
          </a>
          {openDropdown === "courses" && (
          
            <div className={styles.submenu} >
              
              <a href="#">
                <PiSuitcaseSimpleFill />
                &nbsp;&nbsp;Full Package
              </a>
              <a href="#">
                <RiMovie2Line />
                &nbsp;&nbsp;Scriptwriting Courses
              </a>
              <a href="#">
                <BiSolidMovie />
                &nbsp;&nbsp;Directing
              </a>
              <a href="#">
                <ImVideoCamera />
                &nbsp;&nbsp;Cinematography
              </a>
              <a href="#">
                <PiDiscDuotone />
                &nbsp;&nbsp;Recording Courses
              </a>
              <a href="#">
                <MdInsertPhoto />
                &nbsp;&nbsp;Acting Courses
              </a>
              <a href="#">
                <BiSolidMoviePlay />
                &nbsp;&nbsp;Editing Courses
              </a>
            </div>
          )}
        </div>

        <a href="#about">
          Packages <span className={styles.arrow}>&#8595;</span>
        </a>

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

        <div className={styles.dropdown}>
          <a href="#contact" onClick={() => toggleDropdown("contact")}>
            Contact Us <span className={styles.arrow}>&#8595;</span>
          </a>
          {openDropdown === "contact" && (
            <div className={styles.submenu}>
              <a href="#">
                <MdLiveTv />
                &nbsp;&nbsp;Maflam Training Program
              </a>
              <a href="#">
                <GrGroup />
                &nbsp;&nbsp;Join our Team
              </a>
              <a href="#">
                <FaPhoneAlt />
                &nbsp;&nbsp;Contact Information
              </a>
            </div>
          )}
        </div>
      </div>

      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search for courses...!" />
        <img src={assests.Magnifine} alt="" />
      </div>
      <div className={styles.searchContainerGlobe}>
        <img src={assests.Globe} alt="" />
      </div>

      <div className={styles.rightLinks}>
        <a href="#" target="_blank" className={styles.signupButton}>
          Create an Account
        </a>
        <a href="#login">
          <span className={styles.arrow}>&#8592; </span> log in
        </a>
      </div>

      {/* Hamburger Menu */}
      <div className={styles.hamburger} onClick={toggleHamburger}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
