import React, { Component } from 'react';
import '../css/App.css'
import ProjectHeader from './ProjectHeader'
import GalleryContainer from '../GalleryContainer';
import All_Projects from './All_Projects'

class ProjectContainer extends Component {
    constructor(props) {
        super(props),
            this.state = {
                headerInfo: {},
                imageArray: [],
                renderType: "",
                showFilter: false,
                style: ""
            }

        this.renderProject = this.renderProject.bind(this);
    }
    componentWillMount() {
        this.setState({
            headerInfo: this.props.headerInfo,
            imageArray: this.props.imageArray,
            renderType: this.props.renderType,
            showFilter: this.props.showFilter,
            style: this.props.style
        });

        // console.log("props: " + JSON.stringify(this.props));
        // console.log("state: " + JSON.stringify(this.state));
    }

    componentDidMount() {
        // if (this.renderType === "allprojects") {
        window.scroll({
            top: 350,
            behavior: "smooth"
        });
        // console.log("ProjectContainer: window did mount");
    }

    //On Refresh
    componentWillUpdate() {
        console.log("ProjectContainer: window will update");
        return (window.scroll({
            top: 350,
            behavior: "smooth"
        }));
    }

    renderProject(renderType) {
        // Check which project type (Gallery, Projects Page, or Ind. Project)
        // Gallery Container
        // Projects Page
        if (renderType === "gallery" || renderType === "feature") {
            return <GalleryContainer
                style={this.state.style}
                showFilter={this.state.showFilter}
                imageArray={this.state.imageArray}
            />
        }
        else if (renderType === "allprojects") {
            return <All_Projects />
        }
        else {
            return <span>No Pictures</span>
        }
    }

    render() {
        const { title, desc, bgImage, date } = this.state.headerInfo;
        const { renderType, style } = this.state;
        return (
            <div id="projectcontainer" className="">
                <ProjectHeader
                    title={title}
                    desc={desc}
                    date={date}
                    bgImage={bgImage}
                />
                {this.renderProject(renderType)}
            </div>
        );
    }
};

export default ProjectContainer;