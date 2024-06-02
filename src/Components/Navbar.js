import React from 'react'
import Logo from '../Assets/Logo/logo.png'

function Navbar() {
    return (
        <div>
            <div class="container">
                <div className="Navbar mt-3">
                    <nav class="navbar navbar-expand-lg navbar-bg-dark ">

                        <span class="navbar-brand pt-0" href="#"><img src={Logo} alt="" /></span>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="" role="button" ><i class="fa fa-bars" aria-hidden="true" style={{color:"#e6e6ff"}}></i></span>
                        </button>
                        <div class="collapse navbar-collapse nav-list" id="navbarSupportedContent">
                            <ul class="navbar-nav m-auto mt-0 mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <span class="nav-link " aria-current="page" >Find Work</span>
                                </li>
                                <li class="nav-item">
                                    <span class="nav-link" href="#">Find Talent</span>
                                </li>
                                <li class="nav-item">
                                    <span class="nav-link " aria-current="page" >Articles</span>
                                </li>
                                <li class="nav-item">
                                    <span class="nav-link" href="#">About US</span>
                                </li>
                                <li class="nav-item">
                                    <span class="nav-link" href="#">Contact US</span>
                                </li>
                            </ul>
                            <div className="flex">
                                <span class="nav-link" >Log In</span>
                                <button class="btn-white flex animate__animated animate__fadeInRight" type="submit">Join Now</button>
                            </div>
                        </div>

                    </nav>
                </div>
            </div>
        </div >
    )
}

export default Navbar