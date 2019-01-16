import React, { Component } from 'react';
import {
    CONSTANT_NEW, CONSTANT_OLD,
    CONSTANT_TRAVEL, CONSTANT_WEDDING
    , CONSTANT_URBAN, CONSTANT_PEOPLE,
    ACTION_TYPE_FILTER
} from '../configs/constants'
import { Container, Row, Col, Card } from 'mdbreact';
import '../css/App.css'
import ProjectTemplate from './ProjectTemplate'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { connect } from "react-redux";
import ReactGA from 'react-ga';

const mapStateToProps = state => {
    return {
        projectObject: state.All_ProjectsReducer.projectObject
    };
};

class All_Projects extends Component {
    //Commented out for Redux
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         projectObject: {}
    //     }
    //     this.renderAllProjects = this.renderAllProjects.bind(this);
    //     this.renderFilter = this.renderFilter.bind(this);
    //     this.filterProjects = this.filterProjects.bind(this);
    // }
    // componentWillMount() {
    //     this.setState({
    //         projectObject: this.state.imageArray

    //     });
    //     console.log("state: " + JSON.stringify(this.props.projectObject));
    // }
    componentDidMount() {
        window.scroll({
            top: 350,
            behavior: "smooth"
        });
        ReactGA.event({
            category: "LandedOn: /All_Projects_Page",
            action: 'Landed On',
        });
        
        // console.log("ALL PROJECTS: didMount: scrollUp");
        
        //Will Reload Reducer when coming back to projects page
        this.props.dispatch({ type: CONSTANT_NEW })

    }

    renderAllProjects() {
        if (!this.props.projectObject) {
            return;
        }
        const projectGallery = this.props.projectObject.map((obj, i) => {
            return (
                <ProjectTemplate
                    key={i + obj.title}
                    projectObject={obj}
                />
            );
        });
        return projectGallery;
    }

    // THERE IS A DELAY OF SETTING STATE ON FILTER, Does not re render for some reason. 
    filterProjects(filter) {
        // const projCopy = this.props.imageArray;
        // const reverseCopy = projCopy.reverse();

        // const filteredArray = projCopy.filter(function (proj) {
        //     let searchValue = proj.category;
        //     return searchValue.indexOf(filter) !== -1;
        // });

        // if (filter === CONSTANT_NEW) {
        //     this.setState({ projectObject: projCopy });
        //     // console.log("New Projects: " +JSON.stringify(this.state.projectObject));

        // }
        // else if (filter === CONSTANT_OLD) {
        //     this.setState({ projectObject: reverseCopy });
        //     // console.log("reverseCopy: " +JSON.stringify(this.state.projectObject));

        // }
        // else {
        //     // console.log('before currentState = ' + JSON.stringify(this.state.imageArray)); // State is delayed
        //     this.setState({ projectObject: filteredArray });
        //     // console.log("filteredArray: " +JSON.stringify(this.state.projectObject));
        // }

        // Added for redux
        if (filter === CONSTANT_NEW) {
            this.props.dispatch({ type: CONSTANT_NEW, value: filter })
        }
        else if (filter === CONSTANT_OLD) {
            this.props.dispatch({ type: CONSTANT_OLD, value: filter })
        }
        else {
            this.props.dispatch({ type: ACTION_TYPE_FILTER, value: filter })
        }
    }

    renderFilter() {
        const cursorStyle = { cursor: "pointer" };
        return (
            <Tabs id="Tab" defaultTab="one" className="GalleryContainer ">
                <TabList className="TabList" style={{ border: 'none', margin: '0em 0 2em 0em' }}>
                    <Tab style={cursorStyle} tabFor="one" onClick={() => this.filterProjects(CONSTANT_NEW)}>Newest <i className="fa fa-arrow-up"> </i></Tab>
                    <Tab style={cursorStyle} tabFor="two" onClick={() => this.filterProjects(CONSTANT_OLD)}>Oldest  <i className="fa fa-arrow-down"> </i></Tab>
                    <Tab style={cursorStyle} tabFor="three" onClick={() => this.filterProjects(CONSTANT_TRAVEL)}>Travel </Tab>
                    <Tab style={cursorStyle} tabFor="four" onClick={() => this.filterProjects(CONSTANT_PEOPLE)}> People </Tab>
                    <Tab style={cursorStyle} tabFor="five" onClick={() => this.filterProjects(CONSTANT_URBAN)}>Urban & Street </Tab>
                    <Tab style={cursorStyle} tabFor="six" onClick={() => this.filterProjects(CONSTANT_WEDDING)}>Weddings </Tab>
                </TabList>
            </Tabs>
        );
    }

    render() {

        return (
            <div>
                <section className="project-margins text-center allprojectmargintop" >
                    <Row>
                        <Col>
                            {this.renderFilter()}
                        </Col>
                    </Row>
                    <Row>
                        {this.renderAllProjects()}
                    </Row>
                </section>
            </div>
        );
    };
}

export default connect(mapStateToProps)(All_Projects);