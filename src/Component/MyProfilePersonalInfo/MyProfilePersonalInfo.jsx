

// import React from 'react';
// import styles from './MyProfilePersonalInfo.module.css';


// function MyProfilePersonalInfo() {
//   return (
//     <div className={styles.profileContainer}>
//       <header className={styles.profileHeader}>
//         <h1>My Profile</h1>
//       </header>

//       <nav>
//         <ul className={styles.profileTabs}>
//           <li className={styles.activeTab}>Personal Information</li>
//           <li>My Courses</li>
//           <li>My Certificates</li>
//           <li>My Wishlist</li>
//         </ul>
//         <hr className={styles.footerHr} />
//       </nav>

      
//     </div>
//   );
// }

// export default MyProfilePersonalInfo;



import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa'; // Importing edit icon from react-icons
import styles from './MyProfilePersonalInfo.module.css';

function MyProfilePersonalInfo() {
  const [userImage, setUserImage] = useState('default-image-url.png'); // Default image state
  const formData = {
    gender: '',
    dob: '',
    profession: '',
    email: '',
    phone: '',
    links: '',
    skills: '',
    interestedInLearning: ''
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result); // Set the user image to the uploaded file
      };
      reader.readAsDataURL(file); // Read file as data URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Logic to save changes goes here
  };

  return (
    <div className={styles.profileContainer}>
      <header className={styles.profileHeader}>
        <h1>My Profile</h1>
      </header>

      <nav>
        <ul className={styles.profileTabs}>
          <li className={styles.activeTab}>Personal Information</li>
          <li>My Courses</li>
          <li>My Certificates</li>
          <li>My Wishlist</li>
        </ul>
        <hr className={styles.footerHr} />
      </nav>

      <form onSubmit={handleSubmit} className={styles.profileForm}>
        {/* Circular Image Section with Edit Icon */}
        <div className={styles.imageUploadContainer}>
          <div className={styles.imagePreview}>
            <img src={userImage} alt=" " />
            <div className={styles.editIconContainer}>
              <input
                type="file"
                accept="image/*"
                id="image-upload"
                className={styles.fileInput}
                onChange={handleImageChange}
              />
              <label htmlFor="image-upload" className={styles.editIconLabel}>
                <FaEdit className={styles.editIcon} />
              </label>
            </div>
          </div>
        </div>

        {/* Other form fields as defined previously */}
        <div className={styles.formGroup}>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="profession">Profession:</label>
          <input type="text" id="profession" name="profession" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="links">Links (Business/Social Media):</label>
          <input type="text" id="links" name="links" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="skills">Skills:</label>
          <input type="text" id="skills" name="skills" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="interestedInLearning">Interested in Learning:</label>
          <input type="text" id="interestedInLearning" name="interestedInLearning" />
        </div>

        <button type="submit" className={styles.saveButton}>Save Changes</button>
      </form>
    </div>
  );
}

export default MyProfilePersonalInfo;
