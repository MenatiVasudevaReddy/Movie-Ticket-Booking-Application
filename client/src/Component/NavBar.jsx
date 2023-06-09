import React, { Component } from 'react';

class NavBar extends Component
{
    constructor(props)
    {
        super(props);
        this.routeHome = this.routeHome.bind(this);
        this.routeLogout = this.routeLogout.bind(this);
        this.routeMovies = this.routeMovies.bind(this);
    }
    routeHome()
    {
        window.location = '/home';
    }
    routeMovies()
    {
        window.location = '/movies';
    }
    routeLogout()
    {
        window.location = '/';
    }
    render() {
        return (
            <div className="navBar">
                <ul>
                    <li onClick={this.routeHome}>Home</li>
                    <li onClick={this.routeMovies}>Movies</li>
                    <li onClick={this.routeLogout}>Logout</li>
                </ul>
            </div>
        );
    }
}
export default NavBar;