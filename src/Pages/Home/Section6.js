import React, { useEffect, useState } from 'react'
import Question from '../../Components/Question'
import Questions from '../../Data/Question.json'


function Section6() {
    const [questions, setQuestions] = useState()
    useEffect(() => {
        setQuestions(Questions.questions)
    })
    return (
        <div >
            <div className="Questions pt-4  pb-5">
                <div className="margin50"></div>
                <div className="container pt-5">
                    <center>
                        <h3 className='f45'><b>Frequently asked questions</b></h3>
                    </center>
                </div>
                {questions ?
                    <div className="mt-5 mb-5 pb-5">
                        {questions.map((question, i) => (
                            <div className="" key={i}>
                                <Question
                                    title={question.title}
                                    process={question.process === 0 ? null : "Joining Process "}
                                    general={question.general === 0 ? null : "General"}
                                    gright={question.general === 1 ? "br": null}
                                    right={question.process === 1 ? "br": null}
                                    dark={question.process  === 1 && question.general === 1  ? "dark" : null}
                                />
                            </div>
                        ))}

                    </div> :
                    null
                }
            </div>
        </div>
    )
}

export default Section6