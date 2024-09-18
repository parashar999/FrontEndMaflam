import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSide}>
        <button className={styles.createAccountBtn}>Create an Account</button>
        <button className={styles.loginBtn}>Log In</button>
      </div>
      <div className={styles.centerSide}>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Search for courses..."
        />
      </div>
      <div className={styles.rightSide}>
        <a href="#" className={styles.navLink}>
          Contact Us
        </a>
        <a href="#" className={styles.navLink}>
          Resources
        </a>
        <a href="#" className={styles.navLink}>
          Packages
        </a>
        <a href="#" className={styles.navLink}>
          About Mafam
        </a>
        <a href="#" className={styles.navLink}>
          Courses
        </a>
        <div className={styles.logo}>Logo</div>
      </div>
    </nav>
  );
};

export default Navbar;
