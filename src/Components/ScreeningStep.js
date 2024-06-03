import React from 'react';
import { connect } from 'react-redux';
import { showDescription, hideAllDescriptions } from '../Redux/Actions';
import Icon1 from '../Assets/icons/icon8.png'
import Icon2 from '../Assets/icons/icon9.png'


const ScreeningSteps = ({ screeningData, descriptions, showDescription, hideAllDescriptions }) => (
    <div>
        <ul>
            {screeningData.map((step) => (

                <li key={step.step} className={descriptions[step.step] ? "shadow" : null}>
                    <div className="flex">
                        <div className="flex">
                            {descriptions[step.step] && <div className="light-blue" onClick={() => { hideAllDescriptions(); showDescription(step.step); }}>
                                <img src={Icon1} alt="" />
                            </div>}
                            {descriptions[step.step] ? null :
                                <div className="light" onClick={() => { hideAllDescriptions(); showDescription(step.step); }}>
                                    <img src={Icon2} alt="" />
                                </div>
                            }
                        </div>
                        <p className='m-0 ms-4'><b>Step {step.step}: </b> {step.title}</p>
                    </div>
                    <div className={descriptions[step.step] && "mt-3" }>
                        {descriptions[step.step] && <small className=''>{step.description}</small>}
                    </div>

                </li>
            ))}
        </ul>
    </div>
);

const mapStateToProps = (state) => ({
    screeningData: state.screeningData, // Access screening data directly
    descriptions: state.descriptions,
});

const mapDispatchToProps = {
    showDescription,
    hideAllDescriptions,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreeningSteps);
