import React from 'react'
import Logo from '../Assets/images/logo.png'

function Footer() {
    return (
        <div>
            <div className="Footer pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="first mt-5">
                                <img src={Logo} alt="" /> <br />
                                <small className='white '>We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.</small> <br />
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-8">
                            <div className="second">
                                <h3 className='white f40 mt-5'>Connecting the right people to the right businesses.</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 pb-5">
                        <div className="col-md-3 mb-3">
                            <div className="first ">
                                <p className='mt-3'>LINKS AND REDIRECTS</p>
                                <div className="btns">
                                    <button className='btn-lights me-3'>Hire now</button>
                                    <button className='btn-lights'>Apply now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-8">
                            <div className="second">
                                <div className="row">
                                    <div className="col-md-3">
                                        <ul>
                                            <li className='dark'>PLATFORM</li>
                                            <li>Find Work</li>
                                            <li>Find Talent</li>
                                            <li>Categories</li>
                                            <li>About Us</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <ul>
                                            <li className='dark'>CATEGORIES</li>
                                            <li>Data Science</li>
                                            <li>IT & Networking</li>
                                            <li>Web & Mobile</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <ul>
                                            <li className='dark'>HELP</li>
                                            <li>FAQ’s</li>
                                            <li>Contact Us</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <ul>
                                            <li className='dark'>GET IN TOUCH @</li>
                                            <li>Instagram</li>
                                            <li>LinkedIn</li>
                                            <li>Twitter</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="down">
                        <p>All rights reserved  by Zwilt</p>
                        <div className="">
                            <span>Privacy Policy</span>
                            <span>Terms and Conditions</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer