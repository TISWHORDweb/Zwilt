// import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
// import { toggleText } from '../Redux/Actions';
// import Screening from '../Data/Screening.json'
// import Icon1 from '../Assets/Icons/icon8.png'
// import Icon2 from '../Assets/Icons/icon9.png'

// const Card = ({ showText, toggleText }) => {
//     const [screening, setScreening] = useState()
//     useEffect(() => {
//         setScreening(Screening.screening)
//     }, [])

//     return (
//         <div>
//             {screening ?
//                 <> 
//                     <div className="screening">
//                         <ul>
//                             {screening ? 
//                             <>
//                             {screening.map((each))
//                               <li className={showText ? null : "shadow"}>
//                                 <div className="flex">
//                                     <div className="flex">
//                                         {showText ? null :
//                                             <div className="light-blue" onClick={toggleText}>
//                                                 <img src={Icon1} alt="" />
//                                             </div>}
//                                         {showText ?
//                                             <div className="light" onClick={toggleText}>
//                                                 <img src={Icon2} alt="" />
//                                             </div> : null}
//                                     </div>
//                                     <p className='m-0 ms-4'><b>Step 1: </b> Resume Screening</p>
//                                 </div>
//                                 {showText ? null : <div className="mt-3">
//                                     <small className=''>Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.</small>
//                                 </div>}

//                             </li>
//                             </>
//                            : null }
//                         </ul>
//                     </div>
//                 </> : null}

//         </div>
//     );
// };

// const mapStateToProps = state => {
//     return { showText: state.showText };
// };

// export default connect(mapStateToProps, { toggleText })(Card);