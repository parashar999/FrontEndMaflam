

import React from 'react';
import styles from './MyProfileCertificate.module.css';
import Arrow from "../../assets/Arrow.png";
import profilecoursefirst from "../../assets/profilecoursefirst.png";
import profilecourse from "../../assets/profilecourse.png";
import { Link } from 'react-router-dom';

function MyProfileCertificate() {
  return (
    <div className={styles.profileContainer}>
      <header className={styles.profileHeader}>
        <h1>My Profile</h1>
      </header>

      <nav>
        <ul className={styles.profileTabs}>
          <li className={styles.activeTab1}><a href="#">Personal Information</a></li>
          <li className={styles.activeTab1}><Link to="/mycourses">My Courses</Link></li>
          <li className={styles.activeTab}><a href="/mycertificate">My Certificates</a></li>
          <li className={styles.activeTab1}><a href="mywishlist">My Wishlist</a></li>
        </ul>
        <hr className={styles.footerHr} />

      </nav>

      <div className={styles.certificateSection}>
        <h2>Finished Courses</h2>

        {/* Course 1 */}
        <div className={styles.courseCard}>
          <div className={styles.getCertificateDiv}>
            Get the Certificate
            <img src={Arrow} alt="Arrow" className={styles.resetlogo} />
          </div>

          <div className={styles.courseImageWrapper}>
            <img src={profilecoursefirst} alt="Course" className={styles.courseImage} />
          </div>

          <div className={styles.courseInfo}>
            <p className={styles.courseCategory}>Course Type and Category</p>
            <h3 className={styles.courseTitle}>Full Course Name</h3>
            <div className={styles.progressBarWrapper}>
              <div className={styles.progress}>
                <div className={styles.progressText}>100%</div>
              </div>
            </div>
            <p className={styles.courseProgress}>Overall Progress</p>
          </div>
        </div>

        {/* Course 2 */}
        <div className={styles.courseCard}>
          <div className={styles.getCertificateDiv}>
            Get the Certificate
            <img src={Arrow} alt="Arrow" className={styles.resetlogo} />
          </div>

          <div className={styles.courseImageWrapper}>
            <img src={profilecourse} alt="Course" className={styles.courseImage} />
          </div>

          <div className={styles.courseInfo}>
            <p className={styles.courseCategory}>Course Type and Category</p>
            <h3 className={styles.courseTitle}>Full Course Name</h3>
            <div className={styles.progressBarWrapper}>
              <div className={styles.progress}>
                <div className={styles.progressText}>100%</div>
              </div>
            </div>
            <p className={styles.courseProgress}>Overall Progress</p>
          </div>
        </div>

        {/* Course 3 */}
        <div className={styles.courseCard}>
          <div className={styles.getCertificateDiv}>
            Get the Certificate
            <img src={Arrow} alt="Arrow" className={styles.resetlogo} />
          </div>

          <div className={styles.courseImageWrapper}>
            <img src={profilecourse} alt="Course" className={styles.courseImage} />
          </div>

          <div className={styles.courseInfo}>
            <p className={styles.courseCategory}>Course Type and Category</p>
            <h3 className={styles.courseTitle}>Full Course Name</h3>
            <div className={styles.progressBarWrapper}>
              <div className={styles.progress}>
                <div className={styles.progressText}>100%</div>
              </div>
            </div>
            <p className={styles.courseProgress}>Overall Progress</p>
          </div>
        </div>

        {/* Add more course cards as needed */}
      </div>
    </div>
  );
}
export default MyProfileCertificate;

