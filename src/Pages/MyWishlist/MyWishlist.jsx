import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import { LanguageProvider } from '../../Component/LanguageContext/LanguageContext'
import MyProfileWishlist from '../../Component/MyProfileWishlist/MyProfileWishlist'
import WishlistSpecializedCourses from '../../Component/WishlistSpecializedCourses/WishlistSpecializedCourses'
import WishlistArticle from '../../Component/WishlistArticle/WishlistArticle'


function MyWishlist() {
  return (
    <div>
      <LanguageProvider >
        <Navbar />
        <MyProfileWishlist />
        <WishlistSpecializedCourses />
        <WishlistArticle />
        <Footer />        
     </LanguageProvider>


    </div>
  )
}

export default MyWishlist;