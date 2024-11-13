
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import styles from "./SocialMediaPage.module.css"
import { LanguageProvider } from '../../Component/LanguageContext/LanguageContext'
import HomeScreenCarousel from '../../Component/HomeScreenCarousel/HomeScreenCarousel'
import { HomePageProvider } from '../../store/HomePageContext'
import SocialMediaHeroPage from '../../Component/SocialMediaHeroPage/SocialMediaHeroPage'
import YouTubeChannel from '../../Component/YouTubeChannel/YouTubeChannel'
import EducationaPost from '../../Component/EducationalPost/EducationaPost'
import JoinUs from '../../Component/JoinUs/JoinUs'
import { AboutusPageProvider } from '../../store/AboutUsPageContext'
import FilmProduction from '../../Component/FimlProduction/FilmProduction'
import Podcost from '../../Component/Podcast/Podcost'
import OSPCarousel from '../../Component/OSPCarousel/OSPCarousel'
import BTSCarousel from '../../Component/BTSCarousel/BTSCarousel'

export default function SocialMediaPage() {
  return (
    <div className={styles.bgcointainer}>
        <LanguageProvider>
            <HomePageProvider>
              <AboutusPageProvider>
        <Navbar></Navbar>
        <SocialMediaHeroPage></SocialMediaHeroPage>
        <OSPCarousel/>
        <YouTubeChannel></YouTubeChannel>
        {/*<Podcost></Podcost>*/}
        <EducationaPost></EducationaPost>
        <BTSCarousel/>
        <FilmProduction></FilmProduction> 
        <JoinUs></JoinUs>
        <Footer></Footer>
        </AboutusPageProvider>
        </HomePageProvider>
        </LanguageProvider>

    </div>
  )
}
