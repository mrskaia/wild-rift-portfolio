import React from 'react';
import '../Header/Header.css';
import heroVideo from '../../assets/IMG_7941.mp4';
export default Header;

function Header() {
    return (
    <header className="headerContent__container">
        <h1>Hello</h1>
        <h2>The website for my wild rift game highlights, hi!</h2>
        <div className="videoContent__container">
            <video autoplay="true" loop="yes" muted="yes">
                <source src={heroVideo}></source>
            </video>
        </div>
        <span className="scrollContent__container">Scroll down</span>
    </header>
    );
}