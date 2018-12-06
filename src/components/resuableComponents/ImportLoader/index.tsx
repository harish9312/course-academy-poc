import * as React from 'react';
import './importLoader.scss';

export interface IImportLoaderProps {
}

export class ImportLoader extends React.PureComponent<IImportLoaderProps, {}> {
    constructor(props: IImportLoaderProps) {
        super(props);
    }

    render() {
        return <div className="loader">
            <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>;
    }
}
