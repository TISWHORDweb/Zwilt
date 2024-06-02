import React, { useEffect, useState } from 'react';
import Icon1 from '../../Assets/Icons/icon8.png'
import Icon2 from '../../Assets/Icons/icon9.png'
import Card from '../../Components/Card'
import Screening from '../../Data/Screening.json'
import ScreeningSteps from '../../Components/ScreeningStep';
import ScreeningStep from '../../Components/ScreeningStep';

function Section3() {
    const [screening, setScreening] = useState()
    useEffect(() => {
        setScreening(Screening.screening)
    }, [])
    console.log(screening);
    return (
        <div>
            <div className="Section3">
                <div className="container">
                    <div className="col-md-6">
                        <h2>How we ensure you're in good hands.</h2>
                        <p className='mt-3 f20'>With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days.</p>
                        {screening ?
                            <ScreeningSteps steps={screening} /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3