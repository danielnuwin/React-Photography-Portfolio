import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'mdbreact';
import '../css/App.css'
import ProjectTemplate from './ProjectTemplate'
import AllProjectsConfig from '../PhotoProjects/All_Projects_Config'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact'

class All_Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectObject: {}
        }
        this.renderAllProjects = this.renderAllProjects.bind(this);
        this.renderDropDown = this.renderDropDown.bind(this);
    }
    componentWillMount() {
        this.setState({
            projectObject: AllProjectsConfig.imageArray
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
                    key={i}
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
    filterProjects(filter) {
        const imagesCopy = this.props.images;
        const newArray = imagesCopy.filter(function (img) {
            let searchValue = img.category;
            return searchValue.indexOf(filter) !== -1;
        });

        if (filter === "*") {
            this.setState({ imageArray: imagesCopy });
        }
        else {
            // console.log('before currentState = ' + JSON.stringify(this.state.imageArray)); // State is delayed
            this.setState({ imageArray: newArray });
        
        }
    }
    render() {
        return (
            <section className="project-margins text-center allprojectmargintop" >
                {/* <Row className="">
                    {this.renderDropDown()}
                </Row> */}
                <Row>
                    {this.renderAllProjects()}
                </Row>
            </section>
        );
    };
}

export default All_Projects;