import React, { Component } from 'react';
import '../css/App.css'
import ProjectHeader from './ProjectHeader'
import GalleryContainer from '../GalleryContainer';
import All_Projects from './All_Projects'
import ScrollAnimation from 'react-animate-on-scroll';
import AboutPage from '../AboutPage'

class ProjectContainer extends Component {
    constructor(props) {
        super(props);
        const { headerInfo, imageArray, renderType, showFilter, style } = props;

        this.state = {
            headerInfo: headerInfo,
            imageArray: imageArray,
            renderType: renderType,
            showFilter: showFilter,
            style: style
        }

        this.renderProject = this.renderProject.bind(this);
    }
    // componentWillMount() {
    //     this.setState({
    //         headerInfo: this.props.headerInfo,
    //         imageArray: this.props.imageArray,
    //         renderType: this.props.renderType,
    //         showFilter: this.props.showFilter,
    //         style: this.props.style
    //     });

    // console.log("props: " + JSON.stringify(this.props));
    // console.log("state: " + JSON.stringify(this.state));
    // }
    //Main Scroll, will scroll on most pages, interchange 350, 100 to not show nav
    // componentDidMount() {
    //     window.scroll({
    //         top: 100,
    //         behavior: "smooth"
    //     });
    //     // console.log("ProjectContainer: window did mount");
    // }

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
        else if (renderType === "aboutme") {
            return <AboutPage />;
        }
        else {
            return <span>No Pictures</span>
        }
    }

    render() {
        // **Alan > Deconstruct Defaults
        const { renderType, headerInfo: { title= 'default', desc, bgImage, date, style } } = this.state;
        return (
            <div id="projectcontainer" className="">
                <ProjectHeader
                 {...this.state.headerInfo} // **Alan > Passing a spread operator as props
                    // title={title}
                    // desc={desc}
                    // date={date}
                    // bgImage={bgImage}
                    // style={style}
                />
                {this.renderProject(renderType)}
            </div>
        );
    }
};

export default ProjectContainer;