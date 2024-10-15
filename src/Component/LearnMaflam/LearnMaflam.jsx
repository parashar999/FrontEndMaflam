import styles from "./LearnMaflam.module.css";
import { useContext } from "react";
import { HomePageContext } from "../../store/HomePageContext.jsx";

const LearnMaflam = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  // Extracting title and image URL from the API response
  const title =
    homeScreenDetails?.homeScreenDetailsSec2?.title || "Default Title";
  const imageUrl = homeScreenDetails?.homeScreenDetailsSec2?.imageUrl || ""; // Fallback to an empty string

  return (
    <div className={styles.courseContainer}>
      <div className={styles.coursesContainer}>
        <h2>{title}</h2>
        <div className={styles.LearnMaflam}>
          {imageUrl && <img src={imageUrl} alt="Learn Maflam" />}
        </div>
      </div>
    </div>
  );
};

export default LearnMaflam;
