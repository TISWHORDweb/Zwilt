import React from 'react'
import Icon2 from '../../Assets/Icons/icon5.png'
import One from '../../Assets/Layers/1.png'
import Two from '../../Assets/Layers/2.png'
import Three from '../../Assets/Layers/3.png'
import Lay1 from '../../Assets/Layers/crop.png'
import Lay2 from '../../Assets/Layers/crop2.png'
import Lay3 from '../../Assets/Layers/crop3.png'


function Section4() {
  return (
    <div>
        <div className="Section4">
            <div className="container">
                <center>
                    <h2>Start your journey today.</h2>
                </center>
                <div className="margin50"></div>
                <div className="purp">
                    <div className="row">
                        <div className="col-md-1 ">
                            <div className="only">
                            <img src={One} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4 pt-5 pb-5">
                            <div className="text">
                                <h4>Find your next star performer.</h4>
                                <p>Explore the vast Zwilt marketplace to find the candidate that meets your needs.</p>
                                <div className="flex pt-3">
                                <button className='btn-small-dark'><img src={Icon2} alt="" /></button>
                                <span className='ms-3'>Join Now</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5">
                            <img src={Lay1} alt="" className='w100' />
                        </div>
                    </div>
                </div>
                <div className="yell">
                    <div className="row">
                        <div className="col-md-1 ">
                            <div className="only">
                            <img src={Two} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4 pt-5 pb-5">
                            <div className="text">
                                <h4>Evaluate to your heart’s content.</h4>
                                <p>Assess the candidate through work history, transparent tests and video interviews.</p>
                                <div className="flex pt-3">
                                <button className='btn-small-dark'><img src={Icon2} alt="" /></button>
                                <span className='ms-3'>Browse More</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5">
                            <img src={Lay2} alt="" className='w100' />
                        </div>
                    </div>
                </div>
                <div className="light">
                    <div className="row">
                        <div className="col-md-1 ">
                            <div className="only">
                            <img src={Three} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4 pt-5 pb-5">
                            <div className="text">
                                <h4>Start building your team.</h4>
                                <p>Onboard your candidate right away and start creating the next big thing.</p>
                                <div className="flex pt-3">
                                <button className='btn-small-dark'><img src={Icon2} alt="" /></button>
                                <span className='ms-3'>Join Now</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5">
                            <img src={Lay3} alt="" className='w100' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section4