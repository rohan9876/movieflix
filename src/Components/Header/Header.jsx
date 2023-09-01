import React from 'react'
import logo from "../../moviflix.jpg"
import "./header.css"
import { Link } from "react-router-dom"
import { ImSearch } from "react-icons/im"

const Header = () => {
    return (
        <nav className="header">

            
        <Link to="/movies" ><img className="logo-img" src={logo} alt="logo" /></Link>

            <div>
                <Link to="/movies" >Movies</Link>
                <Link to="/tvshows" >TV Shows</Link>
                <Link to="/recent" >Recently Added</Link>
                <Link to="/mylist" >My List</Link>
            </div>

            <ImSearch />

        </nav>
    )
}

export default Header