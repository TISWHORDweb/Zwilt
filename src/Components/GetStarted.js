import React from 'react'
import Lay from '../Assets/images/vecs.png'
import Icon from '../Assets/images/icon11.png'

function GetStarted() {
    return (
        <div>
            <div className="GetStarted">
                <img src={Lay} alt="" className='w100 patch3' />
                <div className="startCard">
                    <center>
                        <div className="container">
                            <div className="contact p-5">
                                <div className="col-md-7 mt-5">
                                    <h2 className='f50 white'><b>Need a job done, and done well? Get started</b></h2>
                                    <button className='btn-small-dark mt-4'><img src={Icon} alt="" className='w10' /></button>
                                </div>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default GetStarted