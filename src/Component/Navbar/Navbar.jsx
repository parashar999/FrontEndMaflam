import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import navbarBackground from "../../assets/NavbarBackground.png";

const Navbar = () => {
  return (
    <nav
      className={styles.navbar}
      style={{ backgroundImage: `url(${navbarBackground})` }}
    >
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.leftLinks}>
        <a href="#pricing">Courses</a>
        <a href="#pricing">About Maflam</a>
        <a href="#about">Packages</a>
        <a href="#training">Resources</a>
        <a href="#resources">Contact Us</a>
      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search for courses..." />
      </div>
      <div className={styles.rightLinks}>
        <a href="#" target="_blank" className={styles.signupButton}>
          Create an Account
        </a>
        <a href="#login">log in</a>
      </div>
    </nav>
  );
};

export default Navbar;
