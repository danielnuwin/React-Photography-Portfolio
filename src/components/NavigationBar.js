import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter, Redirect } from "react-router-dom";
import {
    Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Container, FormInline,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'mdbreact';
import './css/App.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// ******** Routes ******** //
import Home from './Home'
import GalleryContainer from './GalleryContainer';
import BlogPage from './BlogPage'
import Slideshow from './Slideshow';
import TestPage from './TestPage'
import About from './AboutPage'
import ProjectHeader from './Projects/ProjectHeader'
import ProjectContainer from './Projects/ProjectContainer'
import Routes from './Routes'

// ******** Project Routes ******** //

class NavigationBar extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                collapse: false,
                showFullNav: true
            }
        this.onClick = this.onClick.bind(this);
        this.handleNavbarClick = this.handleNavbarClick.bind(this);
        this.showNav = this.showNav.bind(this);
        this.scrollHome = this.scrollHome.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });

        // if (this.props.location.pathname === '/') {
        //     window.scroll({
        //         top: 0,
        //         behavior: "smooth"
        //     });
        // }
        // if(this.props.location.pathname !== '/'){
        //     console.log("redirect");
        //     <Redirect to='/'/>
        // }
    }

    scrollHome() {
        window.scrollTo(0, 0);
    }

    showNav() {
        if (this.props.location.pathname === '/') {
            return
            <div>
                <NavItem active>
                    {/* <NavLink className="brand" to="/">Home</NavLink> */}
                    <AnchorLink onClick={this.onClick} className="nav-link " href='#section1'>Home</AnchorLink>
                </NavItem>
                <NavItem>
                    {/* <NavLink className="brand" to="/template">GalleryContainer</NavLink> */}
                    <AnchorLink offset={() => 0} onClick={this.onClick} className="nav-link " href='#headerbox'>Portfolio</AnchorLink>
                </NavItem>
                <NavItem>
                    {/* <NavLink className="brand" to="/blogpage">Blog Page</NavLink> */}
                    <AnchorLink onClick={this.onClick} className="nav-link " href='#section3'>About</AnchorLink>
                </NavItem>
            </div>
        }
    }

    handleNavbarClick() {
        this.setState({
            collapse: false
        });
    }

    render() {
        const overlay = <div id="sidenav-overlay" style={{ backgroundColor: 'transparent' }} onClick={this.handleNavbarClick} />

        return (
            // <Router>
            <div id="navigation">
                <Navbar color="white" light expand="md" fixed="top" scrolling >
                    <NavbarBrand href="/">
                        <strong className="brand">Daniel NuWin | Photos</strong>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.onClick} />
                    <Collapse isOpen={this.state.collapse} navbar>
                        <NavbarNav left>
                            <NavItem>
                                {/* <NavLink className="brand" to="/">Home</NavLink> */}
                                <NavLink onClick={this.onClick} className="" to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <AnchorLink offset={() => 0} onClick={this.onClick} className="nav-link" href='#headerbox'>Portfolio</AnchorLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.onClick} className="" to="/projects">Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.onClick} className="" to="/about">About Me</NavLink>
                            </NavItem>
                            <NavItem>
                                {/* <NavLink onClick={this.onClick} className="" to="/blog">Blog</NavLink> */}
                            </NavItem>
                            <NavItem>
                                {/* <NavLink onClick={this.onClick} className="" to="/testpage">Test Page</NavLink> */}
                                {/* <NavLink onClick={this.onClick} className="" to="/contactcard">ContactCard</NavLink> */}
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                            <NavItem >
                                <FormInline waves>
                                    <div className="md-form my-0">
                                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                    </div>
                                </FormInline>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>

                {this.state.collapse && overlay}
            </div>
            // </Router>
        );
    }
};

export default withRouter(NavigationBar);