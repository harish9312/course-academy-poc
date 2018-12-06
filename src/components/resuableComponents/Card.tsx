import * as React from 'react';

export interface ICardProps {
    className?: string;
}

export class Card extends React.PureComponent<ICardProps, {}> {
    constructor(props: ICardProps) {
        super(props);
    }

    render() {
        return <div className={this.props.className} style={{ padding: '20px', boxShadow: 'rgba(169, 169, 169, 0.25) 0px 1px 4px' }} >
            {this.props.children}
        </div>;
    }
}
