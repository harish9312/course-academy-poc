import * as React from 'react';
import { Card } from '../resuableComponents/Card';
import { Col, Button } from 'react-bootstrap';

export interface IContactUsProps {
}

export class ContactUs extends React.PureComponent<IContactUsProps, {}> {
    constructor(props: IContactUsProps) {
        super(props);
    }

    render() {
        return <Col xs={12} style={{ marginTop: '20px' }} className="contact-us-container">
            <Card>
                <div className="title" >Contact Us</div>
                <div className="data" >
                    <div >
                        <div className="data-title">
                            Adminssions
                        </div>
                        <div className="text" >
                            Lorem ipsum dolor sit amet, in urbanitas assueverit definitionem mea, et essent viderer qui.
                    </div>
                    </div>
                    <Button color="default">Contact</Button>
                </div>
                <div className="data" >
                    <div >
                        <div className="data-title">
                            Career Coach
                        </div>
                        <div className="text" >
                            Lorem ipsum dolor sit amet, in urbanitas assueverit definitionem mea, et essent viderer qui.
                    </div>
                    </div>
                    <Button color="default">Contact</Button>
                </div>
                <div className="data" >
                    <div >
                        <div className="data-title">
                            Instructor
                        </div>
                        <div className="text" >
                            Lorem ipsum dolor sit amet, in urbanitas assueverit definitionem mea, et essent viderer qui.
                    </div>
                    </div>
                    <Button color="default">Contact</Button>
                </div>
            </Card>
        </Col>;
    }
}
