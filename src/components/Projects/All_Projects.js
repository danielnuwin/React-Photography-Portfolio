import React, { Component } from 'react';
import { Row } from 'mdbreact';
import '../css/App.css'
import ProjectTemplate from './ProjectTemplate'
import AllProjectsConfig from '../PhotoProjects/All_Projects_Config'

class All_Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectObject: {}
        }
        this.renderAllProjects = this.renderAllProjects.bind(this);
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
        console.log("ALL PROJECTS: didMount: scrollUp");
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

    render() {
        return (
            <section className="project-margins text-center allprojectmargintop" >
                <Row>
                    {this.renderAllProjects()}
                </Row>
            </section>
        );
    };
}

export default All_Projects;