
import React, { useContext,useState } from 'react';
import { FaEdit } from 'react-icons/fa'; // Importing edit icon from react-icons
import styles from './MyProfilePersonalInfo.module.css';
import { Link } from 'react-router-dom';
import { MdHeight } from 'react-icons/md';

function MyProfilePersonalInfo() {
   const [userImage, setUserImage] = useState('default-image-url.png'); // Default image state
  //const contactDetailsSec3 = contactUs2ContextDetails?.contactDetails2Sec3 || [];
  
  //const contactDetailsSec3 = contactUs2ContextDetails?.contactDetails2Sec3 || [];

  const title = "";
  const fullNameTitle =  "Full Name";
  const profession =  "Profession";
  const emailTitle =  "Email";
  const emailPlaceholder = "adi.abed@gmail.com";
  const phoneTitle = "Phone Number";
  const phonePlaceholder = "966-354-2011";
  const linksTitile = "Link to business/website/social media accounts";
  const link1place = "https://maflam.com";
  const link2place = "https://maflam.com";
  const link3place = "https://maflam.com";
  const submitButtonTitle = "Save";
  const maletitle =  "Gender";
  const skillTitle = "Skills";
  const skillplace = "My skills";
  const levelplace = "Level";
  const categoryMale = "Male";
  const categoryFemale =  "Female";
  const interestedinText =  "Interested in learning";
  const InterestedinPlace =  "Interested In";
  const buttonText =  "Save Changes";



  const formData = {
    startDate: { day: "", month: "", year: "" },
    gender: '',
    dob: '',
    profession: '',
    email: '',
    phone: '',
    links: '',
    skills: '',
    interestedInLearning: '',
    link1: '',
    link2: '',
    link3: ''
  };
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
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
          <li className={styles.activeTab}><Link to="/mycourses"> Personal Information</Link></li>
          <li>My Courses</li>
          <li className={styles.activeTab1}><Link to="/mycertificate"> My Certificates</Link></li>
          <li>My Wishlist</li>
        </ul>
        <hr className={styles.footerHr} />
      </nav>
      <div className={styles.container}>
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
        
        <div className={styles.inputGroup}>
            <label htmlFor="fullNameInEng">
              {fullNameTitle} <span>*</span>
            </label>
            
            <input autoFocus
              type="text"
              required
              id="fullNameInEng"
              maxLength={50}
              placeholder="Full Name"
              value={formData.fullNameInEng}
              onChange={handleInputChange}
            />
          </div>

        
        <div className={styles.inputGroup}>
          <label>
             {maletitle}<span>*</span>
          </label>
          <div className={styles.options}>
            <button
              type="button"
              required
              className={`${styles.optionButton} ${
                formData. genderInEng === "Male" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData,  genderInEng: "Male" })}
            >
          {categoryMale}
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData. genderInEng === "Female" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData,  genderInEng: "Female" })}
            >
            {categoryFemale}
            </button>
          </div>
        </div>
     
     
        {/* <div className={styles.formGroup}>
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" />
        </div> */}

        <div className={styles.inputGroup}>
          <label>Date of Birth<span>*</span>
          </label>
          <div className={styles.dateInputs}>
            <input style={{width:'153px', background:'#1A374B', textAlign:'right'}}
              type="number"
              name="day"
              required
              value={formData.startDate.day}
              className={styles.input}
              placeholder="Day"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  startDate: { ...formData.startDate, month: e.target.value },
                })
              }
            />
            <input style={{width:'153px', backgroundColor:'#1A374B', color:'white', textAlign:'right'}}
              type="number"
              name="month"
              value={formData.startDate.month}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  startDate: { ...formData.startDate, month: e.target.value },
                })
              }
              className={styles.input}
              placeholder="Month"
            />
            <input style={{width:'200px', background:'#1A374B', textAlign:'right'}}
              type="number"
              name="year"
              value={formData.startDate.year}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  startDate: { ...formData.startDate, year: e.target.value },
                })
              }
              className={styles.input}
              placeholder="year"
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
            <label htmlFor="fullNameInEng">
              {profession} <span>*</span>
            </label>
            
            <input 
              type="text"
              required
              id="profession"
              maxLength={50}
              placeholder="Profession"
              value={formData.profession}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="fullNameInEng">
              {emailTitle} <span>*</span>
            </label>
            
            <input 
              type="text"
              required
              id="email"
              maxLength={50}
              placeholder={emailPlaceholder}
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="fullNameInEng">
              {phoneTitle} <span>*</span>
            </label>
            
            <input 
              type="text"
              required
              id="email"
              maxLength={50}
              placeholder={phonePlaceholder}
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
         
          <div className={styles.inputGroup}>
            <label htmlFor="fullNameInEng">
              {linksTitile} <span>*</span>
            </label>
            
            <input
              type="text"
              required
              id="linktos0"
              maxLength={50}
              placeholder={link1place}
              value={formData.phone}
              onChange={handleInputChange}
            />
            <input
              type="text"
              required
              id="linktos1"
              maxLength={50}
              placeholder={link2place}
              value={formData.phone}
              onChange={handleInputChange}
            />
          
            <input
              type="text"
              required
              id="linktos2"
              maxLength={50}
              placeholder={link3place}
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          
          
          <div className={styles.inputGroup}>
          <label>
             {skillTitle}<span>*</span>
          </label>
          <div className={styles.options}>
          <input 
              type="text"
              required
              id="skill"
              maxLength={50}
              placeholder={skillplace}
              value={formData.skills}
              onChange={handleInputChange}
            />
            <input 
              type="text"
              required
              id="level"
              maxLength={50}
              placeholder={levelplace}
              value={formData.levelplace}
              onChange={handleInputChange}
            />
          </div>
          
  

        </div>
        
       
        <div className={styles.inputGroup}>
        
          <label>
          {interestedinText}
          </label>
         
         
          <input
              type="text"
              id="skill"
              maxLength={50}
              placeholder={InterestedinPlace}
              value={formData.interestedInLearning}
              onChange={handleInputChange}
            />
            
          
          </div>
          
        <div className={styles.inputGroup} >
          <button type="submit" className={styles.submitButton} style={{width:'185px'}}>
          {buttonText}
          </button>
        </div>
      
      </form>
      </div>
    </div>
  );
}

export default MyProfilePersonalInfo;
