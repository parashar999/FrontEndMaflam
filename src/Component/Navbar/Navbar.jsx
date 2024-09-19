import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import navbarBackground from "../../assets/NavbarBackground.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={styles.navbar}
      style={{ backgroundImage: `url(${navbarBackground})` }}
    >
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={`${styles.leftLinks} ${isMenuOpen ? styles.active : ""}`}>
        <a href="#courses">Courses</a>
        <a href="#about">About Maflam</a>
        <a href="#packages">Packages</a>
        <a href="#resources">Resources</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search for courses...!" />
      </div>
      <div className={styles.rightLinks}>
        <a href="#login">log in</a>
        <a href="#" target="_blank" className={styles.signupButton}>
          Create an Account
        </a>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
