import * as React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Card } from '../resuableComponents/Card';

export interface ICompletedTaskProps {
}

export class CompletedTask extends React.PureComponent<ICompletedTaskProps, {}> {
    constructor(props: ICompletedTaskProps) {
        super(props);
    }

    render() {
        return <Col xs={12} className="completed-task-container" >
            <div className="inline-dark-gray font-16" >COMPLETED TASKS</div>
            <Card className="task-card-container" >
                <div className="flex-container" >
                    <div className="inline-dark-gray font-11">
                        FULL STACK WEB DEVELOPMENT &nbsp;&nbsp;&nbsp; 30 JAN 2018
                    </div>
                    <div className="font-16" >Complete the Introduction to programming course</div>
                </div>
                <Button className="primary">
                    <i className="fa fa-check" aria-hidden="true"></i>
                    &nbsp;Completed
                </Button>
            </Card>
            <Card className="task-card-container" >
                <div className="flex-container" >
                    <div className="inline-dark-gray font-11">
                        FULL STACK WEB DEVELOPMENT &nbsp;&nbsp;&nbsp; 30 JAN 2018
                    </div>
                    <div className="font-16" >Complete the Introduction to programming course</div>
                </div>
                <Button className="primary">
                    <i className="fa fa-check" aria-hidden="true"></i>
                    &nbsp;Completed
                </Button>
            </Card>
            <Card className="task-card-container" >
                <div className="flex-container" >
                    <div className="inline-dark-gray font-11">
                        FULL STACK WEB DEVELOPMENT &nbsp;&nbsp;&nbsp; 30 JAN 2018
                    </div>
                    <div className="font-16" >Complete the Introduction to programming course</div>
                </div>
                <Button className="primary">
                    <i className="fa fa-check" aria-hidden="true"></i>
                    &nbsp;Completed
                </Button>
            </Card>
        </Col>;
    }
}
