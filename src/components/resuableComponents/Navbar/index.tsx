import * as React from 'react';
import { Button } from 'react-bootstrap';
import {
    Collapse, Input, DropdownToggle, Dropdown,
    DropdownItem, DropdownMenu, InputGroup, InputGroupAddon, Nav, Navbar as RBNavbar, NavbarBrand, NavbarToggler, NavItem, NavLink
} from 'reactstrap';
import './navbar.scss';
export interface INavbarProps {
}

export interface INavbarState {
    isOpen: boolean;
    dropdownOpen: boolean;
}

export class Navbar extends React.PureComponent<INavbarProps, INavbarState> {
    constructor(props: INavbarProps) {
        super(props);
        this.state = {
            dropdownOpen: false,
            isOpen: false
        };
    }

    toggleDropDown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <div className="navbar-container" >
            <RBNavbar color="light" light expand="md">
                <NavbarBrand href="/">Course academy</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <InputGroup>
                                <InputGroupAddon addonType="search">
                                    <i className="fa fa-search" aria-hidden="true">
                                    </i>
                                </InputGroupAddon>
                                <Input placeholder="Search..." />
                            </InputGroup>
                        </NavItem>
                        <NavItem>
                            <i className="fa fa-home" aria-hidden="true"></i>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem className="inline-green" >
                            <i className="fa fa-certificate" aria-hidden="true"></i>
                            <NavLink className="inline-green" style={{ color: '#028F68' }} href="#">Courses</NavLink>
                        </NavItem>
                        <NavItem>
                            <i className="fa fa-gift" aria-hidden="true"></i>
                            <NavLink href="#">Referrals</NavLink>
                        </NavItem>
                        <NavItem>
                            <i className="fa fa-question-circle" aria-hidden="true"></i>
                            <NavLink href="#">Help</NavLink>
                        </NavItem>
                        <NavItem>
                            <Button><i className="fa fa-bell" aria-hidden="true"></i></Button>
                        </NavItem>
                        <NavItem>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                                <DropdownToggle caret>
                                    <img src="https://harish9312.github.io/static/media/myImg.21393c7c.jpg" />
                                    <div className="username">Harish Soni</div>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>Header</DropdownItem>
                                    <DropdownItem>Profile</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Logout</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                    </Nav>
                </Collapse>
            </RBNavbar>
        </div>;
    }
}
