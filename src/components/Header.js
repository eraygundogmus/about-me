import React from 'react'
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="navbar">
            <header className="my-header"> 
                    <h3 className="my-logo"> Front End Developer</h3>
                <ul>
                    <li> <a href="/aboutme">About Me</a></li>
                    <li> <a href="works">Works</a> </li>
                    <li> <a href="comments">Comments</a> </li>
                    <li> <a href="contact">Contact</a></li>
                </ul>
            </header>            
       </div>
    )
}

export default Header
