import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import styles from "./SocialMediaPage.module.css"
import { LanguageProvider } from '../../Component/LanguageContext/LanguageContext'
import HomeScreenCarousel from '../../Component/HomeScreenCarousel/HomeScreenCarousel'
import { HomePageProvider } from '../../store/HomePageContext'
import SocialMediaHeroPage from '../../Component/SocialMediaHeroPage/SocialMediaHeroPage'
import YouTubeChannel from '../../Component/YouTubeChannel/YouTubeChannel'

export default function SocialMediaPage() {
  return (
    <div className={styles.bgcointainer}>
        <LanguageProvider>
            <HomePageProvider>
        <Navbar></Navbar>
        <SocialMediaHeroPage></SocialMediaHeroPage>
        <HomeScreenCarousel />
        <YouTubeChannel></YouTubeChannel>
        <Footer></Footer>
        </HomePageProvider>
        </LanguageProvider>

    </div>
  )
}
