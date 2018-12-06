import * as React from 'react';
import { Col, Row, ProgressBar } from 'react-bootstrap';
import { Card } from '../resuableComponents/Card';
const { taskData } = require('../../data.json');

export interface IQuizSideBarProps {
}

export interface IQuizSideBarState {
    isExp: boolean;
}

export class QuizSideBar extends React.PureComponent<IQuizSideBarProps, IQuizSideBarState> {
    constructor(props: IQuizSideBarProps) {
        super(props);
        this.state = { isExp: false };
    }
    render() {
        const { isExp } = this.state;
        return <Col xs={12} className="quiz-sidebar-container" >
            <Card>
                <Row>
                    <Col sm={7} xs={7} >
                        2 task <span className="inline-green">completed</span> out of 10
                    <ProgressBar now={20} />
                    </Col>
                    <Col className="mover" sm={5}>
                        <i className="left"></i>
                        <i className="right">   </i>
                    </Col>
                </Row>
                <div className="day">May 5, <span className="inline-gray" >Wednesday</span></div>
                <div className="week-container">
                    <div className="week">
                        <div className="inline-gray name">S</div>
                        <div className="number">3</div>
                        <div className="green-dot"></div>
                    </div>
                    <div className="week">
                        <div className="inline-gray name">M</div>
                        <div className="number">4</div>
                        <div className="green-dot"></div>
                        <div className="orange-dot"></div>
                    </div>
                    <div className="week">
                        <div className="inline-gray name">T</div>
                        <div className="number circle">5</div>
                    </div>
                    <div className="week inline-green">
                        <div className="name">W</div>
                        <div className="number">6</div>
                    </div>
                    <div className="week">
                        <div className="inline-gray name">T</div>
                        <div className="number">7</div>
                    </div>
                    <div className="week">
                        <div className="inline-gray name">F</div>
                        <div className="number">8</div>
                    </div>
                    <div className="week">
                        <div className="inline-gray name">S</div>
                        <div className="number">9</div>
                    </div>
                </div>
                <Row className={`${isExp ? 'quizes-expanded quizes' : 'quizes'}`}>
                    {taskData.map((taskData, index) => {
                        return <Col sm={12}>
                            <Col sm={9}>
                                <div className="task-name" >{taskData.taskName}</div>
                                <div className="task-date" >{taskData.taskDate}</div>
                            </Col>
                            <Col className={`status ${taskData.isCompleted ? 'completed' : 'incomplete'}`} sm={3}>{taskData.isCompleted ? 'Completed' : 'Incomplete'}</Col>
                        </Col>;
                    })}
                </Row>
                <div className="resizer" onClick={() => this.setState({ isExp: !isExp })} >
                    {!isExp ? 'LOAD MORE' : 'SHOW LESS'}
                </div>
            </Card>
        </Col>;
    }
}
