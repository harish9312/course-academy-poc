import * as React from 'react';
import { Col, Tab, Tabs, DropdownButton, MenuItem } from 'react-bootstrap';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card } from '../resuableComponents/Card';

export interface IRankBarProps {
}

export interface IRankBarState {
    activeKey: number;
}

export class RankBar extends React.PureComponent<IRankBarProps, IRankBarState> {
    constructor(props: IRankBarProps) {
        super(props);
        this.state = { activeKey: 1 };
    }

    handleSelect = (key) => {
        this.setState({ activeKey: key });
    }

    data = [
        { name: '29', marks: 20, pv: 2400, amt: 2400 },
        { name: '30', marks: 30, pv: 1398, amt: 2210 },
        { name: '1', marks: 25, pv: 9800, amt: 2290 },
        { name: '2', marks: 60, pv: 3908, amt: 2000 },
        { name: '3', marks: 40, pv: 4800, amt: 2181 },
        { name: '4', marks: 35, pv: 3800, amt: 2500 },
    ];

    barData = [
        { name: '1', overAll: 40, pv: 2400, amt: 2400 },
        { name: '2', overAll: 30, pv: 1398, amt: 2210 },
        { name: '3', overAll: 150, pv: 9800, amt: 2290 },
        { name: '4', overAll: 130, pv: 3908, amt: 2000 },
        { name: '5', overAll: 200, pv: 4800, amt: 2181 },
        { name: '6', overAll: 120, pv: 3800, amt: 2500 },
        { name: '7', overAll: 250, pv: 4300, amt: 2100 },
        { name: '8', overAll: 110, pv: 4300, amt: 2100 },
        { name: '9', overAll: 100, pv: 4300, amt: 2100 },
        { name: '10', overAll: 30, pv: 4300, amt: 2100 },
        { name: '11', overAll: 100, pv: 4300, amt: 2100 },
        { name: '12', overAll: 50, pv: 4300, amt: 2100 },

    ];

    render() {
        return <Col style={{ marginTop: '20px' }} xs={12}>
            <Card>
                <Tabs
                    className="tabs"
                    activeKey={this.state.activeKey}
                    id="controlled-tab-example"
                    onSelect={this.handleSelect}
                >
                    <div className="points">
                        <div>
                            <div className="point">1208</div> &nbsp;
                            points earned in
                        </div>
                        <DropdownButton
                            title={'Last 30 Days'}
                            id={`dropdown-basic`}
                        >
                            <MenuItem eventKey="1">Action</MenuItem>
                            <MenuItem eventKey="2">Another action</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="4">Separated link</MenuItem>
                        </DropdownButton>
                    </div>
                    <Tab eventKey={1} title="Total Points">
                        <ResponsiveContainer>
                            <AreaChart data={this.data}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <XAxis axisLine={false} padding={{ left: 20 }} dataKey="name" />
                                <YAxis axisLine={false} padding={{ bottom: 20 }} />
                                <Tooltip />
                                <Area type="monotone" strokeWidth="2" dataKey="marks" stroke="#39BDFD" fill="#C8EDFF" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Tab>
                    <Tab eventKey={2} title="Overall Rank">
                        <ResponsiveContainer>
                            <BarChart data={this.barData}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <XAxis axisLine={false} padding={{ left: 20 }} dataKey="name" />
                                <YAxis axisLine={false} padding={{ bottom: 20 }} />
                                <Tooltip />
                                <Bar dataKey="overAll" type="monotone" strokeWidth="2" fill="#6CCCFA" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Tab>
                </Tabs>
            </Card>
        </Col >;
    }
}
