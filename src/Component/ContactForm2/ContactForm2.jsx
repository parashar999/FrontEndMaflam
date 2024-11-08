

import  { useState } from "react";
import { useContext } from "react";
import styles from "./ContactForm2.module.css";
import downloadIcon from "../../assets/downloadIcon.png";
import { LanguageContext } from "../LanguageContext/LanguageContext";
import axios from "axios";
import { toast } from "react-toastify";

const ContactForm2 = () => {
  const [formData, setFormData] = useState({
    fullNameInEng: "",
     genderInEng: "",
    age: "",
    nationalityInEng: "",
    cityInEng: "",
    degreeInEng: "",
    email: "",
    phoneNo: "",
    hasPreviousExperienceInEng: "",
    trainingFieldsInEng: [],
    currentWorkingHoursInEng: "",
    reasonForMaflamInEng: "",
    universityInEng: "",
    requiredTrainingHours: "",
    dateForTraining: "",
    weeksForTraining: "",
    startDate: { day: "", month: "", year: "" },
    howDidYouKnowMaflamInEng: "",
    // resumeFile: null,
    // portfolioFile: null,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("fullNameInEng", formData.fullNameInEng);
    payload.append("email", formData.email);
    payload.append("phoneNo", formData.phoneNo);
    payload.append("genderInEng", formData.genderInEng);
    payload.append("ageInEng", formData.ageInEng);
    payload.append("nationalityInEng", formData.nationalityInEng);
    payload.append("cityInEng", formData.cityInEng);
    payload.append("degreeInEng", formData.degreeInEng);
    payload.append("email", formData.email);
    payload.append("hasPreviousExperienceInEng", formData.hasPreviousExperienceInEng);
    payload.append("trainingFieldsInEng", formData.trainingFieldsInEng);
    payload.append("currentWorkingHoursInEng", formData.currentWorkingHoursInEng);
    payload.append("reasonForMaflamInEng", formData.reasonForMaflamInEng);
    payload.append("universityInEng", formData.universityInEng);
    payload.append("requiredTrainingHours", formData.requiredTrainingHours);
    payload.append("dateForTraining", formData.dateForTraining);
    payload.append("weeksForTraining", formData.weeksForTraining);
    payload.append("startDate", formData.startDate);
    payload.append("howDidYouKnowMaflamInEng", formData.howDidYouKnowMaflamInEng);


    // // Include files if present
    // if (resume) payload.append("resume", resume);
    // if (portfolio) payload.append("portfolio", portfolio);

    try {
      await axios.post("https://backend.maflam.com/maflam/create-internship-form", payload);
      toast.success("Form submitted successfully!");
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message;
      toast.error(`Error: ${errorMessage}`);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };
  const { language, direction, toggleLanguage } = useContext(LanguageContext);
  const btnText = language === "en" ? "Upload file" : "تحميل الملف";
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Apply for Maflam Training Program</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="fullNameInEng">
            Full name<span>*</span>
          </label>
          <input
            type="text"
            id="fullNameInEng"  
            required
            name="fullNameInEng"
            value={formData.fullNameInEng}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Full name"
          />
        </div>

        {/*  genderInEng */}
        <div className={styles.inputGroup}>
          <label>
             Gender<span>*</span>
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
              Male
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData. genderInEng === "Female" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData,  genderInEng: "Female" })}
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
              required
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

        {/* nationalityInEng */}
        <div className={styles.inputGroup}>
          <label>
            Nationality<span>*</span>
          </label>
          <div className={styles.options}>
            <button
              type="button"
              required
              className={`${styles.optionButton} ${
                formData.nationalityInEng === "Saudi" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, nationalityInEng: "Saudi" })}
            >
              Saudi
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.nationalityInEng === "Non-Saudi" ? styles.active : ""
              }`}
              onClick={() =>
                setFormData({ ...formData, nationalityInEng: "Non-Saudi" })
              }
            >
              Non-Saudi resident in Saudi Arabia
            </button>
            <input
              type="text"
              name="nationalityInEng"
              placeholder="Other"
              className={styles.input}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* cityInEng */}
        <div className={styles.inputGroup}>
          <label>
            City<span>*</span>
          </label>
          <div className={styles.options}>
            <button
              type="button"
              required
              className={`${styles.optionButton} ${
                formData.cityInEng === "Jeddah" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, cityInEng: "Jeddah" })}
            >
              Jeddah
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.cityInEng === "Riyadh" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, cityInEng: "Riyadh" })}
            >
              Riyadh
            </button>
            <input
              type="text"
              name="cityInEng"
              placeholder="Other"
              className={styles.input}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Your degreeInEng */}
        <div className={styles.inputGroup}>
          <label>
            Your degree<span>*</span>
          </label>
          <div className={styles.options}>
            <button
              type="button"
              required
              className={`${styles.optionButton} ${
                formData.degreeInEng === "Secondary" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, degreeInEng: "Secondary" })}
            >
              Secondary
            </button>
            <button
              type="button"
              required
              className={`${styles.optionButton} ${
                formData.degreeInEng === "Diploma" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, degreeInEng: "Diploma" })}
            >
              Diploma
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.degreeInEng === "Bachelor's" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, degreeInEng: "Bachelor's" })}
            >
              Bachelor's
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.degreeInEng === "Masters" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, degreeInEng: "Masters" })}
            >
              Masters
            </button>
            <button
              type="button"
              className={`${styles.optionButton} ${
                formData.degreeInEng === "PhD" ? styles.active : ""
              }`}
              onClick={() => setFormData({ ...formData, degreeInEng: "PhD" })}
            >
              PhD
            </button>
          </div>
        </div>

        {/* email */}
        <div className={styles.inputGroup}>
          <label htmlFor="email">
            Email<span>*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="email"
          />
        </div>

        {/* Phone Number */}
        <div className={styles.inputGroup}>
          <label htmlFor="phoneNo">
            Phone Number<span>*</span>
          </label>
          <input
            type="number"
            id="phoneNo"
            required 
            maxLength={16}
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Phone Number"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="hasPreviousExperienceInEng">
            Do you have previous hasPreviousExperienceInEng in your chosen field?<span>*</span>
          </label>
          <input
            type="text"
            id="hasPreviousExperienceInEng"
            name="hasPreviousExperienceInEng"
            value={formData.hasPreviousExperienceInEng}
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
                required
                className={`${styles.optionButton} ${
                  formData.trainingFieldsInEng.includes(field) ? styles.active : ""
                }`}
                onClick={() => handletrainingFieldsInEngChange(field)}
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
                  formData.currentWorkingHoursInEng === status ? styles.active : ""
                }`}
                onClick={() =>
                  setFormData({ ...formData, currentWorkingHoursInEng: status })
                }
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Reason for Internship */}
        <div className={styles.inputGroup}>
          <label htmlFor="reasonForMaflamInEng">
            Why would you like to have an internship opportunity at Maflam?
            <span>*</span>
          </label>
          <input
            type="text"
            id="reasonForMaflamInEng"
            required
            name="reasonForMaflamInEng"
            value={formData.reasonForMaflamInEng}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Reason"
          />
        </div>

        {/* universityInEng */}
        <div className={styles.inputGroup}>
          <label htmlFor="universityInEng">
            University<span>*</span>
          </label>
          <input
            type="text"
            id="universityInEng"
            required
            maxLength={70}
            name="universityInEng"
            value={formData.universityInEng}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="universityInEng"
          />
        </div>

        {/* Number of Training Hours Required */}
        <div className={styles.inputGroup}>
          <label htmlFor="requiredTrainingHours">
            Number of Training Hours Required<span>*</span>
          </label>
          <input
            type="number"
            id="requiredTrainingHours"
            name="requiredTrainingHours"
            value={formData.requiredTrainingHours}
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
            name="dateForTraining"
            value={formData.dateForTraining}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="weeksForTraining">
            How many weeks do you want to train?<span>*</span>
          </label>
          <input
            type="number"
            id="weeksForTraining"
            name="weeksForTraining"
            value={formData.weeksForTraining}
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
              required
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
          <label htmlFor="howDidYouKnowMaflamInEng">
            How did you know about Maflam?<span>*</span>
          </label>
          <input
            type="text"
            id="howDidYouKnowMaflamInEng"
            name="howDidYouKnowMaflamInEng"
            value={formData.howDidYouKnowMaflamInEng}
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
          <div className={styles.imgUpload}>
            <button
              type="button"
              required
              onClick={() => triggerFileUpload("resumeUpload")}
              className={styles.downloadIcon}
            >
              <img src={downloadIcon} alt="Upload Resume" />
            </button>
            <p>{btnText}</p>
          </div>
          <input
            type="file"
            id="resumeUpload"
            style={{ display: "none" }}
            onChange={(e) => handleFileUpload(e, "resumeFile")}
          />
        </div>

        {/* Portfolio Upload */}
        <div className={styles.inputGroup}>
          <label htmlFor="portfolioUpload">Portfolio</label>{" "}
          <div className={styles.imgUpload}>
            <button
              type="button"
              required
              onClick={() => triggerFileUpload("portfolioUpload")}
              className={styles.downloadIcon}
            >
              <img src={downloadIcon} alt="Upload Portfolio" />
            </button>
            <p>{btnText}</p>
          </div>
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





// import React, { useState } from "react";
// import { useContext } from "react";
// import styles from "./ContactForm2.module.css";
// import downloadIcon from "../../assets/downloadIcon.png";
// import { LanguageContext } from "../LanguageContext/LanguageContext";
// import { MdDelete } from "react-icons/md";

// const ContactForm2 = () => {
//   const [formData, setFormData] = useState({
//     fullNameInEng: "",
//      genderInEng: "",
//     age: "",
//     nationalityInEng: "",
//     cityInEng: "",
//     degreeInEng: "",
//     email: "",
//     phoneNo: "",
//     hasPreviousExperienceInEng: "",
//     trainingFieldsInEng: [],
//     currentWorkingHoursInEng: "",
//     reasonForMaflamInEng: "",
//     universityInEng: "",
//     requiredTrainingHours: "",
//     dateForTraining: "",
//     weeksForTraining: "",
//     startDate: { day: "", month: "", year: "" },
//     howDidYouKnowMaflamInEng: "",
//     resumeFile: null,
//     portfolioFile: null,
//   });
//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };



//   const [resume , setResume ] = useState(null)
//   // Trigger file input by button click
//   const triggerFileUpload = (inputId) => {
//     document.getElementById(inputId).click();
//   };


//   const handleDeleteFile = (setter) => {
//     setter(null); // Clear the selected file
//   };

//   // Handle file upload and set file in form data
//   const handleFileUpload = (e, setFileField) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [setFileField]: e.target.files[0],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };
//   const { language, direction, toggleLanguage } = useContext(LanguageContext);
//   const btnText = language === "en" ? "Upload file" : "تحميل الملف";
//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Apply for Maflam Training Program</h2>
//       <form onSubmit={handleSubmit}>
//         <div className={styles.inputGroup}>
//           <label htmlFor="fullNameInEng">
//             Full name<span>*</span>
//           </label>
//           <input
//             type="text"
//             id="fullNameInEng"
//             name="fullNameInEng"
//             value={formData.fullNameInEng}
//             onChange={handleInputChange}
//             className={styles.input}
//             placeholder="Full name"
//           />
//         </div>

//         {/*  genderInEng */}
//         <div className={styles.inputGroup}>
//           <label>
//              genderInEng<span>*</span>
//           </label>
//           <div className={styles.options}>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData. genderInEng === "Male" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData,  genderInEng: "Male" })}
//             >
//               Male
//             </button>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData. genderInEng === "Female" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData,  genderInEng: "Female" })}
//             >
//               Female
//             </button>
//           </div>
//         </div>

//         {/* Age */}
//         <div className={styles.inputGroup}>
//           <label>
//             Age<span>*</span>
//           </label>
//           <div className={styles.options}>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData.age === "Under 18" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData, age: "Under 18" })}
//             >
//               Under 18
//             </button>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData.age === "18 to 20" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData, age: "18 to 20" })}
//             >
//               From 18 to 20
//             </button>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData.age === "20 to 30" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData, age: "20 to 30" })}
//             >
//               From 20 to 30
//             </button>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData.age === "Over 30" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData, age: "Over 30" })}
//             >
//               Over 30
//             </button>
//           </div>
//         </div>

//         {/* nationalityInEng */}
//         <div className={styles.inputGroup}>
//           <label>
//             nationalityInEng<span>*</span>
//           </label>
//           <div className={styles.options}>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData.nationalityInEng === "Saudi" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData, nationalityInEng: "Saudi" })}
//             >
//               Saudi
//             </button>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData.nationalityInEng === "Non-Saudi" ? styles.active : ""
//               }`}
//               onClick={() =>
//                 setFormData({ ...formData, nationalityInEng: "Non-Saudi" })
//               }
//             >
//               Non-Saudi resident in Saudi Arabia
//             </button>
//             <input
//               type="text"
//               name="nationalityInEng"
//               placeholder="Other"
//               className={styles.input}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>

//         {/* cityInEng */}
//         <div className={styles.inputGroup}>
//           <label>
//             cityInEng<span>*</span>
//           </label>
//           <div className={styles.options}>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData.cityInEng === "Jeddah" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData, cityInEng: "Jeddah" })}
//             >
//               Jeddah
//             </button>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData.cityInEng === "Riyadh" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData, cityInEng: "Riyadh" })}
//             >
//               Riyadh
//             </button>
//             <input
//               type="text"
//               name="cityInEng"
//               placeholder="Other"
//               className={styles.input}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>

//         {/* Your degreeInEng */}
//         <div className={styles.inputGroup}>
//           <label>
//             Your degreeInEng<span>*</span>
//           </label>
//           <div className={styles.options}>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData.degreeInEng === "Secondary" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData, degreeInEng: "Secondary" })}
//             >
//               Secondary
//             </button>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData.degreeInEng === "Diploma" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData, degreeInEng: "Diploma" })}
//             >
//               Diploma
//             </button>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData.degreeInEng === "Bachelor's" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData, degreeInEng: "Bachelor's" })}
//             >
//               Bachelor's
//             </button>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData.degreeInEng === "Masters" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData, degreeInEng: "Masters" })}
//             >
//               Masters
//             </button>
//             <button
//               type="button"
//               className={`${styles.optionButton} ${
//                 formData.degreeInEng === "PhD" ? styles.active : ""
//               }`}
//               onClick={() => setFormData({ ...formData, degreeInEng: "PhD" })}
//             >
//               PhD
//             </button>
//           </div>
//         </div>

//         {/* email */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="email">
//             email<span>*</span>
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             className={styles.input}
//             placeholder="email"
//           />
//         </div>

//         {/* Phone Number */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="phoneNo">
//             Phone Number<span>*</span>
//           </label>
//           <input
//             type="number"
//             id="phoneNo"
//             name="phoneNo"
//             value={formData.phoneNo}
//             onChange={handleInputChange}
//             className={styles.input}
//             placeholder="Phone Number"
//           />
//         </div>
//         <div className={styles.inputGroup}>
//           <label htmlFor="hasPreviousExperienceInEng">
//             Do you have previous hasPreviousExperienceInEng in your chosen field?<span>*</span>
//           </label>
//           <input
//             type="text"
//             id="hasPreviousExperienceInEng"
//             name="hasPreviousExperienceInEng"
//             value={formData.hasPreviousExperienceInEng}
//             onChange={handleInputChange}
//             className={styles.input}
//             placeholder="Answer"
//           />
//         </div>
//         <div className={styles.inputGroup}>
//           <label>
//             Required Training Field<span>*</span>
//           </label>
//           <div className={styles.options}>
//             {[
//               "Camera Department",
//               "Editing Department",
//               "Production Department",
//               "Content Writing Department",
//               "Sound Department",
//               "Directing Department",
//               "Acting Department",
//               "Voiceover Department",
//               "Research Department",
//               "Marketing Department",
//               "Design/Graphics Department",
//             ].map((field) => (
//               <button
//                 type="button"
//                 key={field}
//                 className={`${styles.optionButton} ${
//                   formData.trainingFieldsInEng.includes(field) ? styles.active : ""
//                 }`}
//                 onClick={() => handletrainingFieldsInEngChange(field)}
//               >
//                 {field}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Current Working Hours */}
//         <div className={styles.inputGroup}>
//           <label>
//             Current Working Hours<span>*</span>
//           </label>
//           <div className={styles.options}>
//             {[
//               "Employed",
//               "I am Not Currently Working",
//               "About to Graduate",
//               "Student",
//             ].map((status) => (
//               <button
//                 type="button"
//                 key={status}
//                 className={`${styles.optionButton} ${
//                   formData.currentWorkingHoursInEng === status ? styles.active : ""
//                 }`}
//                 onClick={() =>
//                   setFormData({ ...formData, currentWorkingHoursInEng: status })
//                 }
//               >
//                 {status}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Reason for Internship */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="reasonForMaflamInEng">
//             Why would you like to have an internship opportunity at Maflam?
//             <span>*</span>
//           </label>
//           <input
//             type="text"
//             id="reasonForMaflamInEng"
//             name="reasonForMaflamInEng"
//             value={formData.reasonForMaflamInEng}
//             onChange={handleInputChange}
//             className={styles.input}
//             placeholder="Reason"
//           />
//         </div>

//         {/* universityInEng */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="universityInEng">
//             universityInEng<span>*</span>
//           </label>
//           <input
//             type="text"
//             id="universityInEng"
//             name="universityInEng"
//             value={formData.universityInEng}
//             onChange={handleInputChange}
//             className={styles.input}
//             placeholder="universityInEng"
//           />
//         </div>

//         {/* Number of Training Hours Required */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="requiredTrainingHours">
//             Number of Training Hours Required<span>*</span>
//           </label>
//           <input
//             type="number"
//             id="requiredTrainingHours"
//             name="requiredTrainingHours"
//             value={formData.requiredTrainingHours}
//             onChange={handleInputChange}
//             className={styles.input}
//             placeholder="Enter hours"
//           />
//         </div>

//         {/* Specific Date for Training Completion */}
//         <div className={styles.inputGroup}>
//           <label>
//             Is There a Specific Date by Which You Need to Complete the Training
//             Hours?
//           </label>
//           <input
//             type="date"
//             name="dateForTraining"
//             value={formData.dateForTraining}
//             onChange={handleInputChange}
//             className={styles.input}
//           />
//         </div>

//         <div className={styles.inputGroup}>
//           <label htmlFor="weeksForTraining">
//             How many weeks do you want to train?<span>*</span>
//           </label>
//           <input
//             type="number"
//             id="weeksForTraining"
//             name="weeksForTraining"
//             value={formData.weeksForTraining}
//             onChange={handleInputChange}
//             className={styles.input}
//             placeholder="Enter number of weeks"
//           />
//         </div>

//         {/* Start Date */}
//         <div className={styles.inputGroup}>
//           <label>
//             When will you be able to start?<span>*</span>
//           </label>
//           <div className={styles.dateInputs}>
//             <input
//               type="number"
//               name="day"
//               value={formData.startDate.day}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   startDate: { ...formData.startDate, day: e.target.value },
//                 })
//               }
//               className={styles.input}
//               placeholder="Day"
//             />
//             <input
//               type="number"
//               name="month"
//               value={formData.startDate.month}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   startDate: { ...formData.startDate, month: e.target.value },
//                 })
//               }
//               className={styles.input}
//               placeholder="Month"
//             />
//             <input
//               type="number"
//               name="year"
//               value={formData.startDate.year}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   startDate: { ...formData.startDate, year: e.target.value },
//                 })
//               }
//               className={styles.input}
//               placeholder="Year"
//             />
//           </div>
//         </div>

//         {/* Referral Source */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="howDidYouKnowMaflamInEng">
//             How did you know about Maflam?<span>*</span>
//           </label>
//           <input
//             type="text"
//             id="howDidYouKnowMaflamInEng"
//             name="howDidYouKnowMaflamInEng"
//             value={formData.howDidYouKnowMaflamInEng}
//             onChange={handleInputChange}
//             className={styles.input}
//             placeholder="Answer"
//           />
//         </div>

//         {/* Resume Upload */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="resumeUpload">
//             resume<span>*</span>
//           </label>
//           <div className={styles.imgUpload}>
//             {/* <button
//               type="button"
//               onClick={() => triggerFileUpload("resumeUpload")}
//               className={styles.downloadIcon}
//             >
//               <img src={downloadIcon} alt="Upload Resume" />
//             </button>
//             <p>{btnText}</p> */}
//             {resume ? (
//                 <>
//                   <span>{resume.name}</span>
//                   <button type="button" onClick={() => handleDeleteFile(setResume)} className={styles.deleteButton}>
//                   <MdDelete />
//                   </button>
//                 </>
//               ) : ( 
//                 <div className={styles.btnstyles}>
//                 <button
//                   type="button"
//                   onClick={() => triggerFileUpload("resumeUpload")}
//                   className={styles.downloadIcon}
//                 >
//                   <img src={downloadIcon} alt="Upload Resume" />
               
//                 </button>
//                     <p className="uploadFile">{btnText}</p>
//                     </div>
//               )}
//           </div>
//           <input
//             type="file"
//             id="resumeUpload"
//             style={{ display: "none" }}
//             onChange={(e) => handleFileUpload(e, "resumeUpload")}
//           />
//         </div>

//         {/* Portfolio Upload */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="portfolioUpload">Portfolio</label>{" "}
//           <div className={styles.imgUpload}>
//             <button
//               type="button"
//               onClick={() => triggerFileUpload("portfolioUpload")}
//               className={styles.downloadIcon}
//             >
//               <img src={downloadIcon} alt="Upload Portfolio" />
//             </button>
//             <p>{btnText}</p>
//           </div>
//           <input
//             type="file"
//             id="portfolioUpload"
//             style={{ display: "none" }}
//             onChange={(e) => handleFileUpload(e, "portfolioFile")}
//           />
//         </div>

//         {/* Submit Button */}
//         <div className={styles.inputGroup}>
//           <button type="submit" className={styles.submitButton}>
//             Send
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm2;



