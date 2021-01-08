import React from 'react'
import { Link } from "react-router-dom"

function Header() {
    return (


              <div>  <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Front End Developer</a>
             

                   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarText">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" href="/">About me</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/works">Works</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/comments">Comments</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>

                    </div>
                </div>
                
                </nav>

      
                </div>

    )
}

export default Header
