import * as React from 'react';
import { Col, Breadcrumb } from 'react-bootstrap';

export interface ITaskIntroductionProps {
}

export class TaskIntroduction extends React.PureComponent<ITaskIntroductionProps, {}> {
    constructor(props: ITaskIntroductionProps) {
        super(props);
    }

    render() {
        return <Col xs={12} className="task-intro-container" >
            <ul className="breadcrumb">
                <li className="inactive" >Courses</li>
                <li className="inactive" >JavaScript</li>
                <li className="active" >Learn JavaScript in 30 Days</li>
            </ul>
            <div className="task-title" >JavaScript Programming for Beginners - Part 1 </div>
            <div className="task-container">
                <div className="task-data">
                    <div className="header" >COURSE START DATE</div>
                    <div className="value" >24 Aug 2018</div>
                </div>
                <div className="task-data">
                    <div className="header" >DEADLINE</div>
                    <div className="value" >24 Aug 2018</div>
                </div>
                <div className="task-data">
                    <div className="header" >TASK STATUS</div>
                    <div className="value red" >Incomplete</div>
                </div>
                <div className="task-data">
                    <div className="header" >BADGES EARNED</div>
                    <div className="value red" >-</div>
                </div>
                <div className="task-data">
                    <div className="header" >QUIZZES PASSED</div>
                    <div className="value" >15</div>
                </div>
            </div>
            <div className="task-overview" >
                <div className="inline-dark-gray font-14" >TASK OVERVIEW</div>
                <div className="overview" >
                    Lorem ipsum dolor sit amet, eu latine quaestio sed, et brute facer impetus cum,
                     essent lucilius ne duo. No iudico exerci cum. Vel ad illud simul,
                      offendit evertitur sed eu, corpora hendrerit sed ne. Duo scripta
                       delenit reprimique te. Eos et iuvaret corrumpit prodesset.
                       Nec eros suscipit ei, per vero definiebas referrentur et, ei natum suscipit sadipscing per.
                </div>
            </div>
        </Col>;
    }
}
