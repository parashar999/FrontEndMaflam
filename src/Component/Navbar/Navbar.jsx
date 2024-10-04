import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import navbarBackground from "../../assets/NavbarBackground.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <nav
      className={styles.navbar}
      style={{ backgroundImage: `url(${navbarBackground})` }}
    >
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.leftLinks}>
        <a href="/aboutus">About Maflam</a>
        <a href="#pricing">
          Courses <span className={styles.arrow}>&#8595;</span>
        </a>
        <a href="#about">
          Packages <span className={styles.arrow}>&#8595;</span>
        </a>
        <div className={styles.dropdown}>
          <a href="#training" onClick={toggleSubMenu}>
            Resources <span className={styles.arrow}>&#8595;</span>
          </a>
          {isSubMenuOpen && (
            <div className={styles.submenu}>
              <a href="#">Maflam Blog</a>
              <a href="#">Social Media</a>
              <a href="#">E-Booklet</a>
            </div>
          )}
        </div>
        <a href="#resources">
          Contact Us <span className={styles.arrow}>&#8595;</span>
        </a>
      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search for courses...!" />
      </div>
      <div className={styles.rightLinks}>
        <a href="#" target="_blank" className={styles.signupButton}>
          Create an Account
        </a>
        <a href="#login">
          <span className={styles.arrow}>&#8592; </span> log in
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
