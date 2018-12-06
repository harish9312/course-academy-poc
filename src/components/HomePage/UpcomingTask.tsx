import * as React from 'react';
import { Card } from '../resuableComponents/Card';
import { Col, Button } from 'react-bootstrap';

export interface IUpcomingTaskProps {
}

export class UpcomingTask extends React.PureComponent<IUpcomingTaskProps, {}> {
    constructor(props: IUpcomingTaskProps) {
        super(props);
    }

    render() {
        return <Col xs={12} className="upcoming-task-container" >
            <div className="inline-dark-gray font-14" >UPCOMING TASK</div>
            <Card className="task-card-container" >
                <div className="flex-container" >
                    <div className="inline-dark-gray font-11"> FULL STACK WEB DEVELOPMENT</div>
                    <div className="font-16" >Complete the Introduction to programming course</div>
                </div>
                <div className="inline-dark-gray font-11" >30 JAN 2018</div>
            </Card>
            <Card className="task-card-container hovered" >
                <div className="flex-container" >
                    <div className="inline-dark-gray font-11"> FULL STACK WEB DEVELOPMENT</div>
                    <div className="font-16" >Complete the Introduction to programming course</div>
                    <div className="inline-dark-gray font-14" >Prepare for the quiz by taking our intro to programming course.
                    Already have programming experience? Go ahead and start the quiz.</div>
                    <Button className="primary">Start Quiz</Button>
                    <Button className="default">Overview</Button>
                </div>
                <div className="inline-dark-gray font-11" >15 MAR 2018</div>
            </Card>
            <Card className="task-card-container" >
                <div className="flex-container" >
                    <div className="inline-dark-gray font-11"> FULL STACK WEB DEVELOPMENT</div>
                    <div className="font-16" >Complete the Introduction to programming course</div>
                </div>
                <div className="inline-dark-gray font-11" >15 MAR 2018</div>
            </Card>
        </Col>;
    }
}
