import React from 'react';
import logo from '../../assets/logowr.svg';
import '../Navigation/Navigation.css';
export default Navigation;

function Navigation() {
    return (
    <nav>
        <img className="App-logo" src={logo} alt="logo"></img>
    </nav>
    );
}