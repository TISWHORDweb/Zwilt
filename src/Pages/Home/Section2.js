import React from 'react'
import Jason from '../../Assets/Background/jason.png'
import Groove from '../../Assets/Logo/groove.png'
import Groove1 from '../../Assets/Logo/groove1.png'
import Left from '../../Assets/Icons/icon7.png'
import Right from '../../Assets/Icons/icon6.png'
import Vec from '../../Assets/Layers/vec.png'


function Section2() {
    return (
        <div>
            <div className="Section2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mb-3">
                            <div className="first">
                                <h2>How it worked for Jason <span><img src={Jason} className='w45' alt="" /></span>  at</h2>
                                <img src={Groove} className='img mt-3' alt="" />
                                <p>Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.</p>
                                <div className="flex">
                                    <button className='btn-small-white me-3'><img src={Left} alt="" /></button>
                                    <button className='btn-small-white'><img src={Right} alt="" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5 mb-3">
                            <div className="top mt-5">
                                <img src={Groove1} alt="" />
                                <div className="">
                                    <h3><b>Jason Makki</b></h3>
                                    <p>Engineer at GROOVE <br /> San Francisco</p>
                                </div>
                            </div>
                            <p className='mt-5 white f20'>Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.Zwilt enabled us to deliver on time and they’ve been heavy hitters.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={Vec} alt="" className='w100 patch' />
        </div>
    )
}

export default Section2