import  { useState } from "react";
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

const Navbar = ({ language, direction, toggleLanguage }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleDropdown = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <nav
      className={`${styles.navbar} ${isHamburgerOpen ? styles.active : ""}`}
      style={{ backgroundImage: `url(${navbarBackground})` }}
    >
       <button className={styles.langbtn}  onClick={toggleLanguage}>
        {language === "ar" ? "English" : "العربية"}
      </button>
      <img src={logo1} alt="Logo" className={styles.logo} />
      <div className={styles.leftLinks}>
        <a href="/aboutus">About Maflam</a>

        <div className={styles.dropdown}>
          <a href="#courses" onClick={() => toggleDropdown("courses")}>
            Courses{" "}
            <span
              className={`${styles.arrow} ${
                openDropdown === "courses" ? styles.rotate : ""
              }`}
            >
              &#8595;
            </span>
          </a>
          {openDropdown === "courses" && (
            <div className={styles.submenu}>
              <a href="#">
              <img src={assests.FullCourse} alt=""  />

                {/* <PiSuitcaseSimpleFill /> */}
                &nbsp;&nbsp;Full Package
              </a>
              <a href="#">
              <img src={assests.ScriptingWriting} alt=""  />

                {/* <RiMovie2Line /> */}
                &nbsp;&nbsp;Scriptwriting Courses
              </a>
              <a href="#">
              <img src={assests.Production} alt=""  />

                {/* <RiMovie2Line /> */}
                &nbsp;&nbsp;Production
              </a>

              <a href="#">
              <img src={assests.Directing} alt=""  />

                {/* <BiSolidMovie /> */}
                &nbsp;&nbsp;Directing
              </a>
              <a href="#">
              <img src={assests.Cinematography} alt=""  />


                {/* <ImVideoCamera /> */}
                &nbsp;&nbsp;Cinematography
              </a>
              <a href="#">
              <img src={assests.RecordingCourse} alt=""  />

                {/* <PiDiscDuotone /> */}
                &nbsp;&nbsp;Recording Courses
              </a>
              <a href="#">
              <img src={assests.ActingCourse} alt=""  />

                {/* <MdInsertPhoto /> */}
                &nbsp;&nbsp;Acting Courses
              </a>
              <a href="#">
              <img src={assests.EditingCourse} alt=""  />


                {/* <BiSolidMoviePlay /> */}
                &nbsp;&nbsp;Editing Courses
              </a>
            </div>
          )}
        </div>

        <a href="#">
          Packages{" "}
          <span
            className={`${styles.arrow} ${
              openDropdown === "packages" ? styles.rotate : ""
            }`}
            onClick={() => toggleDropdown("packages")}
          >
            &#8595;
          </span>
        </a>

        <div className={styles.dropdown}>
          <a href="#resources" onClick={() => toggleDropdown("resources")}>
            Resources{" "}
            <span
              className={`${styles.arrow} ${
                openDropdown === "resources" ? styles.rotate : ""
              }`}
            >
              &#8595;
            </span>
          </a>
          {openDropdown === "resources" && (
            <div className={styles.submenu}>
              <a href="#">
              <img src={assests.MaflamBlog} alt=""  />


                 {/* <HiOutlineClipboardDocumentList /> */}
               &nbsp;&nbsp; Maflam Blog</a>
              <a href="#">
              <img src={assests.SocialMedia} alt=""  />

                 {/* <TfiMobile /> */}
                  &nbsp;&nbsp; Social Media</a>
              <a href="#">
              <img src={assests.ebook} alt=""  />

                 {/* <BiSolidBookAlt /> */}
                  &nbsp;&nbsp; E-Booklet</a>
            </div>
          )}
        </div>

        <div className={styles.dropdown}>
          <a href="#contact" onClick={() => toggleDropdown("contact")}>
            Contact Us{" "}
            <span
              className={`${styles.arrow} ${
                openDropdown === "contact" ? styles.rotate : ""
              }`}
            >
              &#8595;
            </span>
          </a>
          {openDropdown === "contact" && (
            <div className={styles.submenu}>
              <a href="#">
              <img src={assests.TraningProgramLogo} alt=""  />


                {/* <MdLiveTv /> */}
                &nbsp;&nbsp;Maflam Training Program
              </a>
              <a href="#">
              <img src={assests.joinOurTeam} alt=""  />


                {/* <GrGroup /> */}
                &nbsp;&nbsp;Join our Team
              </a>
              <a href="#">
              <img src={assests.ContactInfoLogo} alt=""  />

                {/* <FaPhoneAlt /> */}
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
          <span className={styles.arrow}>&#8592; </span> Log in
        </a>
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
