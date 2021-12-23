import React from 'react'
import { Routes, Route, Link, Router } from "react-router-dom";
import ArchivedPage from '../pages/ArchivedPage';
import InvitesPage from '../pages/InvitesPage';
import MainPage from '../pages/MainPage';

export default function Navbar() {
    return (
        
            <Router>
                <div>       
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/invites" elements={<InvitesPage />} />
                    <Route path="/archive" elements={<ArchivedPage />} />
                </Routes>
                </div>
            </Router>
        
    )
}
