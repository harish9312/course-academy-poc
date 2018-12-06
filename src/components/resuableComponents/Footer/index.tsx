import * as React from 'react';
import './footer.scss';
import { Row, Col } from 'react-bootstrap';

export interface IFooterProps {
}

export class Footer extends React.PureComponent<IFooterProps, {}> {
    constructor(props: IFooterProps) {
        super(props);
    }

    render() {
        return <div className="footer-container">
            <Row className="footer-row" >
                <Col md={3} xs={12} className="heading" >
                    Company
                <div className="subs" >
                        <Col md={12} xs={12}>
                            About Us
                    </Col>
                        <Col md={12} xs={12}>
                            Terms
                    </Col>
                        <Col md={12} xs={12}>
                            Pricing Policy
                    </Col>
                        <Col md={12} xs={12}>
                            Blog
                    </Col>
                    </div>
                </Col>
                <Col md={3} xs={12} className="heading" >
                    Help Center
                <div className="subs" >
                        <Col md={12} xs={12}>
                            Contacts Us
                    </Col>
                        <Col md={12} xs={12}>
                            Report Us
                    </Col>
                        <Col md={12} xs={12}>
                            FAQs
                    </Col>
                        <Col md={12} xs={12}>
                            Our Library
                    </Col>
                    </div>
                </Col>
                <Col md={3} xs={12} className="heading" >
                    Contact
                <div className="subs" >
                        <Col md={12} xs={12}>
                            Admissions
                    </Col>
                        <Col md={12} xs={12}>
                            Career Coach
                    </Col>
                        <Col md={12} xs={12}>
                            Instructor
                    </Col>
                    </div>
                </Col>
                <Col md={3} xs={12} className="heading" >
                    Download App
                <div className="subs" >
                        <Col className="store" md={12} xs={12}>
                            {/* tslint:disable-next-line */}
                            <img src="https://i.amz.mshcdn.com/K1p5PL4669x6LLyGzxlqe25Xtsc=/fit-in/1200x9600/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F475500%2Ff018ae30-f60a-43b7-a3fd-d9acec74849e.png" />
                            Playstore
                        </Col>
                        <Col className="store" md={12} xs={12}>
                            {/* tslint:disable-next-line */}
                            <img src="https://purepng.com/public/uploads/large/purepng.com-app-store-icon-ios-7symbolsiconsapple-iosiosios-7-iconsios-7-721522596490omztf.png" />
                            App Store
                        </Col>
                    </div>
                </Col>
            </Row>
        </div>;
    }
}
