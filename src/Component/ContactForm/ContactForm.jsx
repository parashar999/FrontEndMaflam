import { useContext, useState } from "react";
import styles from "./ContactForm.module.css";
import { ContactUs2Context } from "../../store/ContactUs2Context";

const ContactForm = () => {
  const { contactUs2ContextDetails, loading, error } =
    useContext(ContactUs2Context);

  if (loading) return <p>Loading...</p>; // Handle loading state
  if (error) return <p>Error loading data</p>; // Handle error state

  // Fetch data from the context
  const contactDetailsSec3 =
    contactUs2ContextDetails?.contactDetails2Sec3 || [];
  const title = contactDetailsSec3[0]?.title || "";
  const fullNameTitle = contactDetailsSec3[1]?.title || "Full Name";
  const emailTitle = contactDetailsSec3[2]?.title || "Email";
  const emailPlaceholder =
    contactDetailsSec3[2]?.description || "adi.abed@gmail.com";
  const phoneTitle = contactDetailsSec3[3]?.title || "Phone Number";
  const phonePlaceholder = contactDetailsSec3[3]?.description || "966-354-2011";
  const jobRoleTitle =
    contactDetailsSec3[4]?.title ||
    "I Would Like to Join the world of Maflam as:";
  const jobRoleCategories = contactDetailsSec3[4]?.category || [];
  const currentJobTitle = contactDetailsSec3[5]?.title || "Current Job Title";
  const experienceTitle = contactDetailsSec3[6]?.title || "Years of experience";
  const experienceCategories = contactDetailsSec3[6]?.category || [];
  const coverLetterTitle = contactDetailsSec3[7]?.title || "Cover Letter";
  const coverLetterPlaceholder =
    contactDetailsSec3[7]?.description || "Write...";
  const resumeTitle = contactDetailsSec3[8]?.title || "Resume";
  const portfolioTitle = contactDetailsSec3[9]?.title || "Portfolio";
  const submitButtonTitle = contactDetailsSec3[10]?.title || "Send";

  const [resume, setResume] = useState(null);
  const [portfolio, setPortfolio] = useState(null);
  const [selectedJobRole, setSelectedJobRole] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleFileUpload = (e, setter) => {
    setter(e.target.files[0]);
  };

  const handlePhoneInput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, ""); // Allow only numeric input
  };
  const handleSelect = (index, setter) => {
    setter((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>{title}</h2>
        <form className={styles.contactForm}>
          {/* Full Name */}
          <div className={styles.inputGroup}>
            <label htmlFor="name">
              {fullNameTitle} <span>*</span>
            </label>
            <input type="text" id="name" placeholder="Full Name" />
          </div>

          {/* Email */}
          <div className={styles.inputGroup}>
            <label htmlFor="email">
              {emailTitle} <span>*</span>
            </label>
            <input type="email" id="email" placeholder={emailPlaceholder} />
          </div>

          {/* Phone Number */}
          <div className={styles.inputGroup}>
            <label htmlFor="phone">
              {phoneTitle} <span>*</span>
            </label>
            <input
              type="text"
              id="phone"
              placeholder={phonePlaceholder}
              onInput={handlePhoneInput}
            />
          </div>

          {/* Job Role Options */}
          <div className={styles.inputGroup}>
            <label>
              I Would Like to Join the world of Maflam as: <span>*</span>
            </label>
            <div className={styles.radioGroup}>
              {jobRoleCategories.map((role, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${styles.radioButton} ${
                    selectedJobRole === index ? styles.selected : ""
                  }`}
                  onClick={() => handleSelect(index, setSelectedJobRole)}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Current Job Title */}
          <div className={styles.inputGroup}>
            <label htmlFor="jobTitle">
              {currentJobTitle} <span>*</span>
            </label>
            <input type="text" id="jobTitle" placeholder="Answer" />
          </div>

          {/* Years of Experience */}
          <div className={styles.inputGroup}>
            <label>Years of experience</label>
            <div className={styles.radioGroup}>
              {experienceCategories.map((exp, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${styles.radioButton} ${
                    selectedExperience === index ? styles.selected : ""
                  }`}
                  onClick={() => handleSelect(index, setSelectedExperience)}
                >
                  {exp}
                </button>
              ))}
            </div>
          </div>

          {/* Cover Letter */}
          <div className={styles.inputGroup}>
            <label htmlFor="coverLetter">
              {coverLetterTitle} <span>*</span>
            </label>
            <textarea id="coverLetter" placeholder={coverLetterPlaceholder} />
          </div>

          {/* Resume */}
          <div className={styles.inputGroup}>
            <label htmlFor="resume">
              {resumeTitle} <span>*</span>
            </label>
            <input
              type="file"
              id="resume"
              onChange={(e) => handleFileUpload(e, setResume)}
            />
          </div>

          {/* Portfolio */}
          <div className={styles.inputGroup}>
            <label htmlFor="portfolio">{portfolioTitle}</label>
            <input
              type="file"
              id="portfolio"
              onChange={(e) => handleFileUpload(e, setPortfolio)}
            />
          </div>

          {/* Submit Button */}
          <button className={styles.submitButton} type="submit">
            {submitButtonTitle}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

// import { useRef, useState } from "react";
// import styles from "./ContactForm.module.css";
// import { assests } from "../../assets/assests";

// const ContactForm = () => {
//   const handleFileUpload = (e, setter) => {
//     setter(e.target.files[0]);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.formContainer}>
//         <h2 className={styles.title}>Apply to Become Part of a Movie World.</h2>
//         <form className={styles.contactForm}>
//           {/* Full Name */}
//           <div className={styles.inputGroup}>
//             <label htmlFor="name">
//               Full Name <span>*</span>
//             </label>
//             <input type="text" id="name" placeholder="Full Name" />
//           </div>

//           {/* Email */}
//           <div className={styles.inputGroup}>
//             <label htmlFor="email">
//               Email <span>*</span>
//             </label>
//             <input type="email" id="email" placeholder="adi.abed@gmail.com" />
//           </div>

//           {/* Phone Number */}
//           <div className={styles.inputGroup}>
//             <label htmlFor="phone">
//               Phone Number <span>*</span>
//             </label>
//             <input type="text" id="phone" placeholder="966-354-2011" />
//           </div>

//           {/* Job Role Options */}
//           <div className={styles.inputGroup}>
//             <label>
//               I Would Like to Join the World of Maflam as: <span>*</span>
//             </label>
//             <div className={styles.radioGroup}>
//               <button type="button" className={styles.radioButton}>
//                 Workshop and course trainer
//               </button>
//               <button type="button" className={styles.radioButton}>
//                 Employee
//               </button>
//               <button type="button" className={styles.radioButton}>
//                 Maflam show guest
//               </button>
//             </div>
//           </div>

//           {/* Current Job Title */}
//           <div className={styles.inputGroup}>
//             <label htmlFor="jobTitle">
//               Current Job Title <span>*</span>
//             </label>
//             <input type="text" id="jobTitle" placeholder="Answer" />
//           </div>

//           {/* Years of Experience */}
//           <div className={styles.inputGroup}>
//             <label>Years of Experience</label>
//             <div className={styles.radioGroup}>
//               <button type="button" className={styles.radioButton}>
//                 0 to 2
//               </button>
//               <button type="button" className={styles.radioButton}>
//                 3 to 5
//               </button>
//               <button type="button" className={styles.radioButton}>
//                 6 to 10
//               </button>
//               <button type="button" className={styles.radioButton}>
//                 Over 10
//               </button>
//             </div>
//           </div>

//           {/* Cover Letter */}
//           <div className={styles.inputGroup}>
//             <label htmlFor="coverLetter">
//               Cover Letter <span>*</span>
//             </label>
//             <textarea id="coverLetter" placeholder="Write..." />
//           </div>
//           <div className={styles.inputGroup}>
//             <label htmlFor="resume">
//               Resume <span>*</span>
//             </label>
//             <input
//               type="file"
//               id="resume"
//               onChange={(e) => handleFileUpload(e, setResume)}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label htmlFor="portfolio">Portfolio</label>
//             <input
//               type="file"
//               id="portfolio"
//               onChange={(e) => handleFileUpload(e, setPortfolio)}
//             />
//           </div>

//           {/* Submit Button */}
//           <button className={styles.submitButton} type="submit">
//             Send
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
