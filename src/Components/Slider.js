import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Dot from '../Assets/icons/dot.png'
import Dot1 from '../Assets/icons/dot2.png'
import Dot2 from '../Assets/icons/dot3.png'
import Img1 from '../Assets/layers/carousel1.png'
import Img2 from '../Assets/layers/carousel2.png'
import Img3 from '../Assets/layers/carousel3.png'
import Icon2 from '../Assets/icons/icon5.png'

import "swiper/css";

function Slider() {
    return (
        <div>
            <Swiper className="mySwiper">
                <SwiperSlide>
                    <div className="Slider1">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="text p-5 pe-0">
                                    <h2 className=''><b>Onboard without the risk.</b></h2>
                                    <ul>
                                        <li>
                                            <img src={Dot} alt="" />
                                            <p className=''>We pick the best for you to select.</p>
                                        </li>
                                        <li>
                                            <img src={Dot} alt="" />
                                            <p className=''>Thousands of vetted candidates in dozens of categories.</p>
                                        </li>
                                        <li>
                                            <img src={Dot} alt="" />
                                            <p className=''>Risk-free resource swapping for the best fit.</p>
                                        </li>
                                    </ul>
                                    <div className="flex mt-5">
                                        <button className='btn-small-dark'><img src={Icon2} alt="" /></button>
                                        <span className='ms-3'>Learn More</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="imageCard pt-5 pb-5">
                                    <img src={Img1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slider1">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="text p-5 pe-0 mt-5">
                                    <h2 className=''><b>An open book.</b></h2>
                                    <ul>
                                        <li>
                                            <img src={Dot1} alt="" />
                                            <p className=''>Easy and transparent one-to-one chat with candidates.</p>
                                        </li>
                                        <li>
                                            <img src={Dot1} alt="" />
                                            <p className=''>Simple and convenient payment methods.</p>
                                        </li>
                                        <li>
                                            <img src={Dot1} alt="" />
                                            <p className=''>Review past ratings.</p>
                                        </li>
                                    </ul>
                                    <div className="flex mt-5">
                                        <button className='btn-small-dark'><img src={Icon2} alt="" /></button>
                                        <span className='ms-3'>Learn More</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="imageCard pt-5 pb-4">
                                    <img src={Img2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slider1">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="text p-5 pe-0 mt-5">
                                    <h2 className=''><b>An open book.</b></h2>
                                    <ul>
                                        <li>
                                            <img src={Dot2} alt="" />
                                            <p className=''>Easy and transparent one-to-one chat with candidates.</p>
                                        </li>
                                        <li>
                                            <img src={Dot2} alt="" />
                                            <p className=''>Simple and convenient payment methods.</p>
                                        </li>
                                        <li>
                                            <img src={Dot2} alt="" />
                                            <p className=''>Review past ratings.</p>
                                        </li>
                                    </ul>
                                    <div className="flex mt-5">
                                        <button className='btn-small-dark'><img src={Icon2} alt="" /></button>
                                        <span className='ms-3'>Learn More</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="imageCard pt-5 pb-4">
                                    <img src={Img3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider