import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import { SubscribeFundamentalPackage } from "../Component";
// Page Imports
import {
    FilmProduction,
    SocialMediaPage,
} from "../Pages";


// Context and State Management Imports
import {
    AboutusPageProvider,
    FilmProductionProvider,
    SocialMediaPageProvider,
    HomePageProvider,
    LanguageProvider
} from '../store';



export default function Route4() {
    return (
        <LanguageProvider>
            <HomePageProvider>
                <AboutusPageProvider>
                    <div>
                        <Routes>
                            <Route path="filmproduction/:courseId" element={<FilmProductionProvider><AboutusPageProvider><FilmProduction /></AboutusPageProvider></FilmProductionProvider>} />
                            <Route path="socialmedia" element={<AboutusPageProvider><SocialMediaPageProvider><SocialMediaPage /></SocialMediaPageProvider></AboutusPageProvider>} />
                        </Routes>
                        <SubscribeFundamentalPackage/>
                    </div>
                </AboutusPageProvider>
            </HomePageProvider>
        </LanguageProvider>

    )
}
