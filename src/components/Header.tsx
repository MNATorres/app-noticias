import React from "react";
import Slideshow from "./Slideshow";
import './Header.css';


function Header() {
    return (
        <div className="header">
            <Slideshow />
            <div className="header-title">
                <h1>News Matt</h1>
                <p>Always First</p>
            </div>
            
        </div>
    )
}

export default Header;