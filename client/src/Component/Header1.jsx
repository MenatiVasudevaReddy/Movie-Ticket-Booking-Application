import React, { Component } from 'react';
import Search from './Search';
import logo from './Images/logo.png';
function Header1()
{
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <h1>MoviesNow</h1>
        
        </div>
    );
}

export default Header1;