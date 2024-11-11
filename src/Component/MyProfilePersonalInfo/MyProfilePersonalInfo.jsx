import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./MyProfilePersonalInfo.module.css";
import { assests } from "../../assets/assests.js";
import { Link } from "react-router-dom";

function MyProfilePersonalInfo() {
  const [userImage, setUserImage] = useState("default-image-url.png");
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dobYear: "",
    dobMonth: "",
    dobDay: "",
    profession: "",
    email: "",
    phone: "",
    links: ["", "", ""],
    skills: "",
    skillLevel: "",
    interestedInLearning: "",
    skillPreviews: [],
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenderSelect = (gender) => {
    setFormData({
      ...formData,
      gender,
    });
  };

  const handleLinkChange = (index, e) => {
    const newLinks = [...formData.links];
    newLinks[index] = e.target.value;
    setFormData({
      ...formData,
      links: newLinks,
    });
  };

  const handleSkillChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "skills" || e.target.name === "skillLevel") {
      const { skills, skillLevel, skillPreviews } = formData;
      if (formData.skills && formData.skillLevel) {
        const newSkill = `${formData.skills} - ${formData.skillLevel}`;
        if (!skillPreviews.includes(newSkill)) {
          setFormData((prevState) => ({
            ...prevState,
            skillPreviews: [...prevState.skillPreviews, newSkill],
            skills: "",
            skillLevel: "",
          }));
        }
      }
    }
  };

  const handleSkillRemove = (skillToRemove) => {
    setFormData((prevState) => ({
      ...prevState,
      skillPreviews: prevState.skillPreviews.filter(
        (skill) => skill !== skillToRemove
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className={styles.profileContainer}>
      <header className={styles.profileHeader}>
        <h1>My Profile</h1>
      </header>

      {/* <nav>
                <ul className={styles.profileTabs}>
                    <li className={styles.activeTab}>Personal Information</li>
                    
                    <li>My Courses</li>
                    <li>My Certificates</li>
                    <li>My Wishlist</li>
                </ul>
                <hr className={styles.footerHr} />
            </nav> */}
      <nav>
        <ul className={styles.profileTabs}>
          <li className={styles.activeTab}>
            <Link to="/personal-info">Personal Information</Link>
          </li>
          <li>
            <Link to="/my-courses">My Courses</Link>
          </li>
          <li>
            <Link to="/mycertificate">My Certificates</Link>
          </li>
          <li>
            <Link to="/my-wishlist">My Wishlist</Link>
          </li>
        </ul>
        <hr className={styles.footerHr} />
      </nav>

      <form onSubmit={handleSubmit} className={styles.profileForm}>
        <div className={styles.imageUploadContainer}>
          <h2> Personal Information</h2>
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
                <img
                  src={assests.editicon}
                  alt="Edit"
                  className={styles.editIcon}
                />
              </label>
            </div>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Gender</label>
          <div className={styles.genderContainer}>
            <div
              className={`${styles.genderBox} ${
                formData.gender === "male" ? styles.active : ""
              }`}
              onClick={() => handleGenderSelect("male")}
            >
              Male
            </div>
            <div
              className={`${styles.genderBox} ${
                formData.gender === "female" ? styles.active : ""
              }`}
              onClick={() => handleGenderSelect("female")}
            >
              Female
            </div>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Date of Birth</label>
          <div className={styles.dobGroup}>
            <select
              name="dobDay"
              value={formData.dobDay}
              onChange={handleChange}
            >
              <option value="">Day</option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              name="dobMonth"
              value={formData.dobMonth}
              onChange={handleChange}
            >
              <option value="">Month</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              name="dobYear"
              value={formData.dobYear}
              onChange={handleChange}
            >
              <option value="">Year</option>
              {Array.from({ length: 101 }, (_, i) => (
                <option key={i} value={2023 - i}>
                  {2023 - i}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Profession</label>
          <select
            name="profession"
            value={formData.profession}
            onChange={handleChange}
          >
            <option value="">Select Profession</option>
            <option value="student">Student</option>
            <option value="engineer">Engineer</option>
            <option value="teacher">Teacher</option>
            <option value="developer">Developer</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Link to business/website/social media accounts</label>
          <div className={styles.linksGroup}>
            {formData.links.map((link, index) => (
              <input
                key={index}
                type="text"
                placeholder="https://maflam.com"
                value={link}
                onChange={(e) => handleLinkChange(index, e)}
              />
            ))}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Skills</label>
          <div className={styles.skillsContainer}>
            <select
              name="skills"
              value={formData.skills}
              onChange={handleSkillChange}
            >
              <option value="">Select Skill</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Python">Python</option>
            </select>
            <select
              name="skillLevel"
              value={formData.skillLevel}
              onChange={handleSkillChange}
            >
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        </div>

        <div className={styles.skillPreviewContainer}>
          {formData.skillPreviews.map((skill, index) => (
            <div key={index} className={styles.skillPreview}>
              {skill}
              <FaTimes
                className={styles.closeIcon}
                onClick={() => handleSkillRemove(skill)}
              />
            </div>
          ))}
        </div>

        <div className={styles.formGroup}>
          <label>Interested in Learning</label>
          <select
            name="interestedInLearning"
            value={formData.interestedInLearning}
            onChange={handleChange}
          >
            <option value="">Select Topic</option>
            <option value="Data Science">Data Science</option>
            <option value="Web Development">Web Development</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Cybersecurity">Cybersecurity</option>
          </select>
        </div>

        <button type="submit" className={styles.submitButton}>
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default MyProfilePersonalInfo;
