import * as React from 'react';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

export interface IBasePageProps {
}

export class BasePage extends React.PureComponent<IBasePageProps, {}> {
    constructor(props: IBasePageProps) {
        super(props);
    }

    render() {
        return <div className="basepage-container" >
            <Navbar />
            {this.props.children}
            <Footer />
        </div>;
    }
}
