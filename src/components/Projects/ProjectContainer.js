import React, { Component } from 'react';
import '../css/App.css'
import ProjectHeader from './ProjectHeader'
import GalleryContainer from '../GalleryContainer';
import All_Projects from './All_Projects'
import AllProjectsConfig from '../PhotoProjects/All_Projects_Config'
import FadeIn from 'react-fade-in';
import ScrollAnimation from 'react-animate-on-scroll';

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
        window.scroll({
            top: 350,
            behavior: "smooth"
        });
        // console.log("ProjectContainer: window did mount");
    }

    //Cause issue with home '/' scroll mid way"
    // componentWillUpdate() {
    //     return (window.scroll({
    //         top: 350,
    //         behavior: "smooth"
    //     }));
    // }

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
            return <All_Projects
                imageArray={this.state.imageArray}
            />
        }
        else {
            return <span>No Pictures</span>
        }
    }

    render() {
        const { title, desc, bgImage, date, style } = this.state.headerInfo;
        console.log("style on header: " + style);
        const { renderType } = this.state;
        return (
            //May not need since used in responsive gallery per each image
            <ScrollAnimation delay={1000} animateIn="fadeIn" animateOnce={true}>
            
             {/* <FadeIn delay={1000}> */}
                <div id="projectcontainer" className="">
                    <ProjectHeader
                        title={title}
                        desc={desc}
                        date={date}
                        bgImage={bgImage}
                        style={style}
                    />
                    {this.renderProject(renderType)}
                </div>
             {/* </FadeIn> */}
             </ScrollAnimation>
        );
    }
};

export default ProjectContainer;