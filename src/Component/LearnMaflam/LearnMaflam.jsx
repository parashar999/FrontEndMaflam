import styles from "./LearnMaflam.module.css";
import { useContext } from "react";
import { HomePageContext } from "../../store/HomePageContext.jsx";

const LearnMaflam = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  // Extracting title and video URL from the API response
  const title =
    homeScreenDetails?.homeScreenDetailsSec2?.title || "Default Title";
  const videoUrl = homeScreenDetails?.homeScreenDetailsSec2?.videoUrl || "";

  return (
    <div className={styles.courseContainer}>
      <div className={styles.coursesContainer}>
        <h2>{title}</h2>
        <div className={styles.LearnMaflam}>
          {videoUrl && <video src={videoUrl} autoPlay loop controls />}
        </div>
      </div>
    </div>
  );
};

export default LearnMaflam;
