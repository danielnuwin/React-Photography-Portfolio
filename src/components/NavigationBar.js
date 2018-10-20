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
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });

        // if(this.props.location.pathname !== '/'){
        //     console.log("redirect");
        //     <Redirect to='/'/>
        // }
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
        var image1 = require('../images/slider2.jpg');
        const headerData = {
            bgImage: image1,
            title: "All Projects",
            date: "September 10th, 2018",
            desc: "Test Description Dawgs"
        };
        const headerData2 = {
            bgImage: image1,
            title: "March For Our Livs",
            date: "March 29th, 2018",
            desc: "Protest Against Gun Violence in San Francisco"
        };
        return (
            // <Router>

            <div id="navigation">
                <Navbar color="white" light expand="md" fixed="top" scrolling >
                    {/* <Container> */}
                    <NavbarBrand href="/">
                        <strong className="brand">Daniel NuWin | Photo</strong>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.onClick} />
                    <Collapse isOpen={this.state.collapse} navbar>
                        <NavbarNav left>
                            <NavItem active>
                                {/* <NavLink className="brand" to="/">Home</NavLink> */}
                                <AnchorLink onClick={this.onClick} className="nav-link " href='#section1'>Home</AnchorLink>
                            </NavItem>
                            <NavItem>
                                {/* <NavLink className="brand" to="/template">GalleryContainer</NavLink> */}
                                <AnchorLink offset={() => 0} onClick={this.onClick} className="nav-link" href='#headerbox'>Portfolio</AnchorLink>
                            </NavItem>
                            <NavItem>
                                {/* <NavLink className="brand" to="/blogpage">Blog Page</NavLink> */}
                                {/* <AnchorLink onClick={this.onClick} className="nav-link " href='#section3'>About </AnchorLink> */}
                            </NavItem>
                            <NavItem>
                                {/* <NavLink onClick={this.onClick} className="" to="/about">About Me</NavLink> */}
                                <AnchorLink onClick={this.onClick} className="nav-link " href='#section3'>About Me </AnchorLink>
                            </NavItem>
                            {/* <NavItem>
                                    <NavLink className="brand" to="/slideshow">Slideshow</NavLink>
                                </NavItem> */}
                            <NavItem>
                                <NavLink onClick={this.onClick} className="" to="/projects">Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.onClick} className="" to="/blog">Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                {/* <NavLink onClick={this.onClick} className="" to="/about">About Me</NavLink> */}
                                {/* <AnchorLink className="nav-link brand" href='#section4'>WoodPage</AnchorLink> */}
                            </NavItem>
                            <NavItem>
                                {/* <NavLink onClick={this.onClick} className="" to="/testpage">Test Page</NavLink> */}
                            </NavItem>
                            {/* <NavItem>
                                    <Dropdown>
                                        <DropdownToggle className="brand" nav caret>Projects</DropdownToggle>
                                        <DropdownMenu>
                                            <NavbarNav>
                                                <NavItem className="">
                                                    <NavLink className="" to="/march">March4OLives</NavLink>
                                                </NavItem>
                                            </NavbarNav>
                                            <DropdownItem href="#">San Francisco 2018</DropdownItem>
                                            <DropdownItem href="#">Cbass Maui Wedding</DropdownItem>
                                            <DropdownItem href="#">Suzzane Graduation</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </NavItem> */}
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
                    {/* </Container> */}
                </Navbar>
                {/************************** Routes *************************/}
                {/* <Route exact path="/" component={Home} />
                    <Route path="/template" component={GalleryContainer} />
                    <Route path="/blogpage" component={BlogPage} />
                    <Route path="/testpage" component={TestPage} />
                    <Route path="/slideshow" component={Slideshow} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" render={() =>
                        <ProjectContainer
                            // imageArray={ImageArray}
                            headerInfo={headerData}
                            renderType="allprojects" />
                    }
                    />
                     <Route path="/march" render={() =>
                        <ProjectContainer
                            showFilter={false}
                            imageArray={proj1}
                            headerInfo={headerData2}
                            renderType="gallery" />
                    }
                    /> */}
                {/* <Routes/> */}

                {this.state.collapse && overlay}
            </div>
            // </Router>
        );
    }
};

export default withRouter(NavigationBar);