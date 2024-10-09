

import Filmmaker from "../../Component/Filmmaker/Filmmaker";


import Footer from "../../Component/Footer/Footer";
import JoinUs from "../../Component/JoinUs/JoinUs";
import MaflamCard from "../../Component/MaflamCard/MaflamCard";

import MaflamInstructors from "../../Component/MaflamInstructors/MaflamInstructors";

import MaflanContent from "../../Component/MaflanContent/MaflanContent";
import Navbar from "../../Component/Navbar/Navbar";
import OurVisionData from "../../Component/OurVisionData/OurVisionData";

// import VariousCourse from "../../Component/VariousCourse/VariousCourse";
import styles from  "./AboutUs.module.css"


export default function AboutUs() {
  return (
    
    <div className={styles.container} >
        <Navbar></Navbar>

        <Filmmaker></Filmmaker>
        <OurVisionData></OurVisionData>
     
        {/* <VariousCourse></VariousCourse> */}
    
        <MaflamInstructors></MaflamInstructors>
        <MaflamCard></MaflamCard>
        <MaflanContent></MaflanContent>
        <JoinUs></JoinUs>
        <Footer></Footer>
    </div>
  )
}
