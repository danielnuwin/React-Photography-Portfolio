import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'mdbreact';
import '../css/App.css'
import ProjectTemplate from './ProjectTemplate'
import AllProjectsConfig from '../PhotoProjects/All_Projects_Config'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

class All_Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectObject: {}
        }
        this.renderAllProjects = this.renderAllProjects.bind(this);
        this.renderDropDown = this.renderDropDown.bind(this);
        this.renderFilter = this.renderFilter.bind(this);
        this.filterProjects = this.filterProjects.bind(this);
    }
    componentWillMount() {
        this.setState({
            // projectObject: AllProjectsConfig.imageArray
            projectObject: this.props.imageArray

        });
        // console.log("state: " + JSON.stringify(this.props.projectObject));
    }
    componentDidMount() {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
        // console.log("ALL PROJECTS: didMount: scrollUp");
    }

    renderAllProjects() {
        if (!this.state.projectObject) {
            return;
        }
        const projectGallery = this.state.projectObject.map((obj, i) => {
            return (
                <ProjectTemplate
                    key={i + obj.title}
                    projectObject={obj}
                />
            );
        });
        return projectGallery;
    }

    renderDropDown() {
        //***** */ allprojectmargintop change to -8em when using filter, default -5em

        return (
            <Dropdown style={{ left: "0.7em", bottom: " 3em" }}>
                <DropdownToggle caret color="white">
                    Filter
            </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem href="#">Newest</DropdownItem>
                    <DropdownItem href="#">Oldest</DropdownItem>
                    <DropdownItem href="#">Weddings</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }

    // THERE IS A DELAY OF SETTING STATE ON FILTER, Does not re render for some reason. 
    filterProjects(filter) {
        const projCopy = this.props.imageArray;
        const reverseCopy = projCopy.reverse();
       
        const filteredArray = projCopy.filter(function (proj) {
            let searchValue = proj.category;
            return searchValue.indexOf(filter) !== -1;
        });

        if (filter === "new") {
            this.setState({ projectObject: projCopy });
            // console.log("New Projects: " +JSON.stringify(this.state.projectObject));

        }
        else if (filter === "old") {
            this.setState({ projectObject: reverseCopy });
            // console.log("reverseCopy: " +JSON.stringify(this.state.projectObject));

        }
        else {
            // console.log('before currentState = ' + JSON.stringify(this.state.imageArray)); // State is delayed
            this.setState({ projectObject: filteredArray });
            // console.log("filteredArray: " +JSON.stringify(this.state.projectObject));
        }
    }

    renderFilter() {
        const cursorStyle = { cursor: "pointer" };

        return (
            <Tabs id="Tab" defaultTab="one" className="GalleryContainer ">
                <TabList className="TabList" style={{ border: 'none', margin: '0em 0 2em 0em' }}>
                    <Tab style={this.cursorStyle} tabFor="one" onClick={() => this.filterProjects("new")}>Newest <i className="fa fa-arrow-up"> </i></Tab>
                    <Tab style={this.cursorStyle} tabFor="two" onClick={() => this.filterProjects("old")}>Oldest  <i className="fa fa-arrow-down"> </i></Tab>
                    <Tab style={this.cursorStyle} tabFor="three" onClick={() => this.filterProjects("travel")}>Travel </Tab>
                    <Tab style={this.cursorStyle} tabFor="four" onClick={() => this.filterProjects("urb")}>Urban & Street </Tab>
                    <Tab style={this.cursorStyle} tabFor="five" onClick={() => this.filterProjects("ppl")}> People </Tab>
                    <Tab style={this.cursorStyle} tabFor="six" onClick={() => this.filterProjects("wed")}>Weddings </Tab>

                    {/* <Tab style={this.cursorStyle} tabFor="one" onClick={() => this.filterProjects("new")}>Newest <i className="fa fa-arrow-up"> </i></Tab>
                    <Tab style={this.cursorStyle} tabFor="two" onClick={() => this.filterProjects("old")}>Oldest  <i className="fa fa-arrow-down"> </i></Tab>
                    <Tab style={this.cursorStyle} tabFor="three" onClick={() => this.filterProjects("travel")}>Travel  <i className="fa fa-plane"> </i></Tab>
                    <Tab style={this.cursorStyle} tabFor="three" onClick={() => this.filterProjects("urb")}>Urban & Street   <i className="fa fa-building-o"> </i></Tab>
                    <Tab style={this.cursorStyle} tabFor="three" onClick={() => this.filterProjects("ppl")}> People  <i className="fa fa-child"> </i></Tab>
                    <Tab style={this.cursorStyle} tabFor="three" onClick={() => this.filterProjects("wed")}>Weddings  <i className="fa fa-venus-mars"> </i></Tab> */}
                    {/* <Tab tabFor="six">
                        <Dropdown>
                            <DropdownToggle className="brand colorBlackLink" nav caret>Projects</DropdownToggle>
                            <DropdownMenu>
                                <NavbarNav>
                                    <NavItem className="nav-format">
                                        <NavLink className="brand nav-format" to="/projects">All Projects</NavLink>
                                        <NavLink className="brand nav-format" to="/laurenlychee"> > Lauren Lychee</NavLink>
                                    </NavItem>
                                </NavbarNav>
                            </DropdownMenu>
                        </Dropdown>
                    </Tab> */}
                </TabList>
            </Tabs>
        );
    }

    render() {
        return (
            <section className="project-margins text-center allprojectmargintop" >
                {/* <Row className="">
                    {this.renderDropDown()}
                </Row> */}
                <Row>
                    <Col>
                        {this.renderFilter()}
                    </Col>
                </Row>
                <Row>
                    {this.renderAllProjects()}
                </Row>
            </section>
        );
    };
}

export default All_Projects;