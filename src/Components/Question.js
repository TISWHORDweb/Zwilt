import React, { useEffect } from 'react'
import Icon from '../Assets/Icons/icon10.png'


function Question(props) {
 
    return (
        <div>
            <div className="container-xxl">

                <div className="Question">
                    <div className="row">
                        <div className="col-md-2 p-0">
                            <div className={`general ${props.gright} ${props.dark}`}>
                                <span>{props.general}</span>
                            </div>
                        </div>
                        <div className="col-md-2 p-0">
                            <div className={`process ${props.right} ${props.left} `}>
                            <span>{props.process}</span>
                            </div>
                        </div>
                        <div className="col-md-6 p-0">
                            <div className="title">
                                <span>{props.title}</span>
                            </div>
                        </div>
                        <div className="col-md-2 p-0 ">
                            <div className="icon">
                                <img src={Icon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question