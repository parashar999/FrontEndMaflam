import { useState } from "react";
import styles from "./ContactForm2.module.css";

const ContactForm2 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    phoneNumber: "",
    gender: "",
    city: "",
    country: "",
    currentProgram: "",
    experience: "",
    preferredField: [],
    availability: "",
    language: "",
    source: "",
    reason: "",
    contribution: "",
    referral: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      preferredField: prevState.preferredField.includes(value)
        ? prevState.preferredField.filter((field) => field !== value)
        : [...prevState.preferredField, value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Apply for Maflam Training Program</h2>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className={styles.inputGroup}>
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
            />
          </div>

          {/* Email */}
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>

          {/* Age */}
          <div className={styles.inputGroup}>
            <label htmlFor="age">Age *</label>
            <input
              type="text"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
            />
          </div>

          {/* Phone Number */}
          <div className={styles.inputGroup}>
            <label htmlFor="phoneNumber">Phone Number *</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>

          {/* Gender */}
          <div className={styles.inputGroup}>
            <label>Gender *</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === "Other"}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
          </div>

          {/* City */}
          <div className={styles.inputGroup}>
            <label htmlFor="city">City *</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
            />
          </div>

          {/* Country */}
          <div className={styles.inputGroup}>
            <label htmlFor="country">Country *</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
            />
          </div>

          {/* Current Program */}
          <div className={styles.inputGroup}>
            <label htmlFor="currentProgram">Current Program *</label>
            <input
              type="text"
              id="currentProgram"
              name="currentProgram"
              value={formData.currentProgram}
              onChange={handleChange}
              placeholder="e.g., School, College, Job"
            />
          </div>

          {/* Previous Experience */}
          <div className={styles.inputGroup}>
            <label>Previous Experience *</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="experience"
                  value="Yes"
                  checked={formData.experience === "Yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="experience"
                  value="No"
                  checked={formData.experience === "No"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          {/* Preferred Training Field */}
          <div className={styles.inputGroup}>
            <label>Preferred Training Field *</label>
            <div className={styles.checkboxGroup}>
              <label>
                <input
                  type="checkbox"
                  value="Directing"
                  onChange={handleCheckboxChange}
                />
                Directing
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Editing"
                  onChange={handleCheckboxChange}
                />
                Editing
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Cinematography"
                  onChange={handleCheckboxChange}
                />
                Cinematography
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Scriptwriting"
                  onChange={handleCheckboxChange}
                />
                Scriptwriting
              </label>
              {/* Add more fields as needed */}
            </div>
          </div>

          {/* Availability */}
          <div className={styles.inputGroup}>
            <label htmlFor="availability">Availability *</label>
            <input
              type="text"
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              placeholder="Enter your availability"
            />
          </div>

          {/* Language Proficiency */}
          <div className={styles.inputGroup}>
            <label>Language Proficiency *</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="language"
                  value="Arabic"
                  checked={formData.language === "Arabic"}
                  onChange={handleChange}
                />
                Arabic
              </label>
              <label>
                <input
                  type="radio"
                  name="language"
                  value="English"
                  checked={formData.language === "English"}
                  onChange={handleChange}
                />
                English
              </label>
              {/* Add more languages if needed */}
            </div>
          </div>

          {/* How did you hear about the program? */}
          <div className={styles.inputGroup}>
            <label htmlFor="source">How did you hear about the program?</label>
            <input
              type="text"
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              placeholder="e.g., Social Media, Friend"
            />
          </div>

          {/* Reason for Joining */}
          <div className={styles.inputGroup}>
            <label htmlFor="reason">Why do you want to join? *</label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Enter your reason for joining"
            />
          </div>

          {/* Contribution */}
          <div className={styles.inputGroup}>
            <label htmlFor="contribution">How can you contribute? *</label>
            <textarea
              id="contribution"
              name="contribution"
              value={formData.contribution}
              onChange={handleChange}
              placeholder="Explain how you can contribute"
            />
          </div>

          {/* Referral */}
          <div className={styles.inputGroup}>
            <label>Referral *</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="referral"
                  value="Yes"
                  checked={formData.referral === "Yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="referral"
                  value="No"
                  checked={formData.referral === "No"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          {/* File Uploads */}
          <div className={styles.inputGroup}>
            <label>Portfolio *</label>
            <input type="file" name="portfolio" />
          </div>
          <div className={styles.inputGroup}>
            <label>CV *</label>
            <input type="file" name="cv" />
          </div>

          {/* Submit Button */}
          <div className={styles.submitGroup}>
            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm2;
