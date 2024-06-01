import React from 'react'
import Icon from '../Assets/Icons/icon1.png'

function Search() {
    return (
        <div>
            <div className="col-md-5">
            <div className="Search">
                <div className="flex">
                    <p className='mb-0'>Looking for <span>design |</span></p>
                    <input type="text" />
                </div>
                <button className='btn-yellow'><img src={Icon} alt="" /></button>
            </div>
            </div>
        </div>
    )
}

export default Search