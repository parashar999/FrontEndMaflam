
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


export default function SocialMediaPage() {
  return (
    <div className={styles.bgcointainer}>
        <LanguageProvider>
            <HomePageProvider>
              <AboutusPageProvider>
        <Navbar></Navbar>
        <SocialMediaHeroPage></SocialMediaHeroPage>
        <HomeScreenCarousel />
        <YouTubeChannel></YouTubeChannel>
        {/*<Podcost></Podcost>*/}
        <EducationaPost></EducationaPost>
        {/* <FilmProduction></FilmProduction> */}
        <JoinUs></JoinUs>
        <Footer></Footer>
        </AboutusPageProvider>
        </HomePageProvider>
        </LanguageProvider>

    </div>
  )
}
