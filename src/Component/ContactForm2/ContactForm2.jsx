import React, { useState } from "react";
import styles from "./ContactForm2.module.css";
import downloadIcon from "../../assets/downloadIcon.png";

const ContactForm2 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    age: "",
    nationality: "",
    city: "",
    degree: "",
    email: "",
    phoneNumber: "",
    experience: "",
    trainingField: [],
    workingHours: "",
    reasonForInternship: "",
    university: "",
    trainingHoursRequired: "",
    trainingCompletionDate: "",
    trainingWeeks: "",
    startDate: { day: "", month: "", year: "" },
    referralSource: "",
    resumeFile: null,
    portfolioFile: null,
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Trigger file input by button click
  const triggerFileUpload = (inputId) => {
    document.getElementById(inputId).click();
  };

  // Handle file upload and set file in form data
  const handleFileUpload = (e, setFileField) => {
    setFormData((prevData) => ({
      ...prevData,
      [setFileField]: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Apply for Maflam Training Program</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="fullName">
            Full name<span>*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Full name"
          />
        </div>

        {/* Gender */}
        <div className={styles.inputGroup}>
          <label>
            Gender<span>*</span>
          </label>
          <div className={styles.options}>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.gender === "Male" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, gender: "Male" })}
            >
              Male
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.gender === "Female" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, gender: "Female" })}
            >
              Female
            </button>
          </div>
        </div>

        {/* Age */}
        <div className={styles.inputGroup}>
          <label>
            Age<span>*</span>
          </label>
          <div className={styles.options}>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.age === "Under 18" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, age: "Under 18" })}
            >
              Under 18
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.age === "18 to 20" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, age: "18 to 20" })}
            >
              From 18 to 20
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.age === "20 to 30" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, age: "20 to 30" })}
            >
              From 20 to 30
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.age === "Over 30" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, age: "Over 30" })}
            >
              Over 30
            </button>
          </div>
        </div>

        {/* Nationality */}
        <div className={styles.inputGroup}>
          <label>
            Nationality<span>*</span>
          </label>
          <div className={styles.options}>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.nationality === "Saudi" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, nationality: "Saudi" })}
            >
              Saudi
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.nationality === "Non-Saudi" ? styles.active : ""
              }`}
              onClick={() =>
                setFormData({ ...formData, nationality: "Non-Saudi" })
              }
            >
              Non-Saudi resident in Saudi Arabia
            </button>
            <input
              type="text"
              name="nationality"
              placeholder="Other"
              className={styles.input}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* City */}
        <div className={styles.inputGroup}>
          <label>
            City<span>*</span>
          </label>
          <div className={styles.options}>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.city === "Jeddah" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, city: "Jeddah" })}
            >
              Jeddah
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.city === "Riyadh" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, city: "Riyadh" })}
            >
              Riyadh
            </button>
            <input
              type="text"
              name="city"
              placeholder="Other"
              className={styles.input}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Your Degree */}
        <div className={styles.inputGroup}>
          <label>
            Your Degree<span>*</span>
          </label>
          <div className={styles.options}>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.degree === "Secondary" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, degree: "Secondary" })}
            >
              Secondary
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.degree === "Diploma" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, degree: "Diploma" })}
            >
              Diploma
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.degree === "Bachelor's" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, degree: "Bachelor's" })}
            >
              Bachelor's
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.degree === "Masters" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, degree: "Masters" })}
            >
              Masters
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.degree === "PhD" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, degree: "PhD" })}
            >
              PhD
            </button>
          </div>
        </div>

        {/* Email */}
        <div className={styles.inputGroup}>
          <label htmlFor="email">
            Email<span>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Email"
          />
        </div>

        {/* Phone Number */}
        <div className={styles.inputGroup}>
          <label htmlFor="phoneNumber">
            Phone Number<span>*</span>
          </label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Phone Number"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="experience">
            Do you have previous experience in your chosen field?<span>*</span>
          </label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Answer"
          />
        </div>
        <div className={styles.inputGroup}>
          <label>
            Required Training Field<span>*</span>
          </label>
          <div className={styles.options}>
            {[
              "Camera Department",
              "Editing Department",
              "Production Department",
              "Content Writing Department",
              "Sound Department",
              "Directing Department",
              "Acting Department",
              "Voiceover Department",
              "Research Department",
              "Marketing Department",
              "Design/Graphics Department",
            ].map((field) => (
              <button
                type="button"
                key={field}
                className={`${styles.optionButton} ${
                  formData.trainingField.includes(field) ? styles.active : ""
                }`}
                onClick={() => handleTrainingFieldChange(field)}
              >
                {field}
              </button>
            ))}
          </div>
        </div>

        {/* Current Working Hours */}
        <div className={styles.inputGroup}>
          <label>
            Current Working Hours<span>*</span>
          </label>
          <div className={styles.options}>
            {[
              "Employed",
              "I am Not Currently Working",
              "About to Graduate",
              "Student",
            ].map((status) => (
              <button
                type="button"
                key={status}
                className={`${styles.optionButton} ${
                  formData.workingHours === status ? styles.active : ""
                }`}
                onClick={() =>
                  setFormData({ ...formData, workingHours: status })
                }
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Reason for Internship */}
        <div className={styles.inputGroup}>
          <label htmlFor="reasonForInternship">
            Why would you like to have an internship opportunity at Maflam?
            <span>*</span>
          </label>
          <input
            type="text"
            id="reasonForInternship"
            name="reasonForInternship"
            value={formData.reasonForInternship}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Reason"
          />
        </div>

        {/* University */}
        <div className={styles.inputGroup}>
          <label htmlFor="university">
            University<span>*</span>
          </label>
          <input
            type="text"
            id="university"
            name="university"
            value={formData.university}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="University"
          />
        </div>

        {/* Number of Training Hours Required */}
        <div className={styles.inputGroup}>
          <label htmlFor="trainingHoursRequired">
            Number of Training Hours Required<span>*</span>
          </label>
          <input
            type="number"
            id="trainingHoursRequired"
            name="trainingHoursRequired"
            value={formData.trainingHoursRequired}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Enter hours"
          />
        </div>

        {/* Specific Date for Training Completion */}
        <div className={styles.inputGroup}>
          <label>
            Is There a Specific Date by Which You Need to Complete the Training
            Hours?
          </label>
          <input
            type="date"
            name="trainingCompletionDate"
            value={formData.trainingCompletionDate}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="trainingWeeks">
            How many weeks do you want to train?<span>*</span>
          </label>
          <input
            type="number"
            id="trainingWeeks"
            name="trainingWeeks"
            value={formData.trainingWeeks}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Enter number of weeks"
          />
        </div>

        {/* Start Date */}
        <div className={styles.inputGroup}>
          <label>
            When will you be able to start?<span>*</span>
          </label>
          <div className={styles.dateInputs}>
            <input
              type="number"
              name="day"
              value={formData.startDate.day}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  startDate: { ...formData.startDate, day: e.target.value },
                })
              }
              className={styles.input}
              placeholder="Day"
            />
            <input
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
            <input
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
              placeholder="Year"
            />
          </div>
        </div>

        {/* Referral Source */}
        <div className={styles.inputGroup}>
          <label htmlFor="referralSource">
            How did you know about Maflam?<span>*</span>
          </label>
          <input
            type="text"
            id="referralSource"
            name="referralSource"
            value={formData.referralSource}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Answer"
          />
        </div>

        {/* Resume Upload */}
        <div className={styles.inputGroup}>
          <label htmlFor="resumeUpload">
            Resume<span>*</span>
          </label>
          <button
            type="button"
            onClick={() => triggerFileUpload("resumeUpload")}
            className={styles.downloadIcon}
          >
            <img src={downloadIcon} alt="Upload Resume" />
          </button>
          <input
            type="file"
            id="resumeUpload"
            style={{ display: "none" }}
            onChange={(e) => handleFileUpload(e, "resumeFile")}
          />
        </div>

        {/* Portfolio Upload */}
        <div className={styles.inputGroup}>
          <label htmlFor="portfolioUpload">Portfolio</label>
          <button
            type="button"
            onClick={() => triggerFileUpload("portfolioUpload")}
            className={styles.downloadIcon}
          >
            <img src={downloadIcon} alt="Upload Portfolio" />
          </button>
          <input
            type="file"
            id="portfolioUpload"
            style={{ display: "none" }}
            onChange={(e) => handleFileUpload(e, "portfolioFile")}
          />
        </div>

        {/* Submit Button */}
        <div className={styles.inputGroup}>
          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm2;
