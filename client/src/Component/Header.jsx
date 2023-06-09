import React, { Component } from 'react';
import Search from './Search';
import logo from './Images/logo.png';
function Header()
{
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <h1>MoviesNow</h1>
        <Search></Search>
        </div>
    );
}

export default Header;