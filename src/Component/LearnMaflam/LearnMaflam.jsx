import styles from "./LearnMaflam.module.css";
import LearnMaflamImage from "../../assets/LearnMaflamImage.png";
import { useContext } from "react";
import { HomePageContext } from "../../store/HomePageContext.jsx";

const LearnMaflam = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const title =
    homeScreenDetails?.homeScreenDetailsSec2?.titleDescriptionLogo?.title;

  return (
    <div className={styles.courseContainer}>
      <div className={styles.coursesContainer}>
        <h2>{title}</h2>
        <div className={styles.LearnMaflam}>
          <img src={LearnMaflamImage} alt="Learn Maflam" />
        </div>
      </div>
    </div>
  );
};

export default LearnMaflam;
