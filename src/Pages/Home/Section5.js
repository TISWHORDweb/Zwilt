import React from 'react'
import Slider from '../../Components/Slider'
import Lays from '../../Assets/layers/lays.png'

function Section5() {
    return (
        <div>
            <div className="Section5 pb-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="text p-5 mt-5">
                                <h2><b>Why choose Zwilt?</b></h2>
                                <p className='f20'>We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.</p>
                            </div>
                        </div>
                        {/* <div className="col-md-1"></div> */}
                        <div className="col-md-8">
                            <Slider />
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <img src={Lays} alt="" className='w100 patch2' />
            </div>
        </div>
    )
}

export default Section5