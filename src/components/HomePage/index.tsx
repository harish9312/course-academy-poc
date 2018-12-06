import * as React from 'react';
import { BasePage } from '../resuableComponents/BasePage';
import { Col, Jumbotron, Button, ProgressBar, Row } from 'react-bootstrap';
import './homePage.scss';
import { Card } from '../resuableComponents/Card';
import { QuizSideBar } from './QuizSideBar';
import { RankBar } from './RankBar';
import { ContactUs } from './ContactUs';
import { TaskIntroduction } from './TaskIntroduction';
import { UpcomingTask } from './UpcomingTask';
import { CompletedTask } from './CompletedTask';

export interface IHomePageProps {
}
export interface IHomePageState {
    isExp: boolean;
}

export class HomePage extends React.Component<IHomePageProps, IHomePageState> {
    constructor(props: IHomePageProps) {
        super(props);
        this.state = { isExp: false };
    }

    render() {
        const { isExp } = this.state;
        return <BasePage>
            <div className="home-page-container row" >
                <div className="left-container" >
                    <Col xs={12} >
                        <Jumbotron>
                            <h1 className="title">Learn javascript in 30 days with great resource.</h1>
                            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                            <div className="bottom" >
                                <Button className="default"><i className="fa fa-play-circle-o" aria-hidden="true"></i>Overview</Button>
                                <Button className="primary">Start Quiz</Button>
                                <div className="pull-right" >
                                    Share On: &nbsp;
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                                    &nbsp;
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                                    &nbsp;
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                </div>
                            </div>
                        </Jumbotron>
                    </Col>
                    <TaskIntroduction />
                    <UpcomingTask />
                    <CompletedTask />
                </div>
                <div className="right-container">
                    <QuizSideBar />
                    <RankBar />
                    <ContactUs />
                </div>
            </div >
        </BasePage >;
    }
}
