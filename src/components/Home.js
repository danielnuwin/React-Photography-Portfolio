import React, { Component } from 'react';
import './App.css';
//Components
import GalleryContainer from './GalleryContainer';
import CarouselIntro from './CarouselIntro';
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from "react-parallax";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ImageArray from './Images';
import ProjectContainer from './Projects/ProjectContainer'

//unused
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavigationBar from './NavigationBar';
import FooterPage from './Footer';
import Slideshow from './Slideshow';
import BlogPage from './BlogPage'
import Routes from './Routes'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    1
    render() {
        const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
        const image2 = "http://www.allwhitebackground.com/images/2/2270.jpg";
        const image3 = "https://www.dropbox.com/s/hdza66lvwlk3xam/IMG_3603.jpg?raw=1";
        const image4 =  "https://www.dropbox.com/s/s581xsjq1g453g4/IMG_8151-2.jpg?raw=1";
        
        const headerData = {
            bgImage: image3,
            title: "Featured Portfolio",
            date: "2017-Present",
            desc: "Ecclectic Everything"
        };
        return (
            <div>
                <div id="section1">
                    <Parallax strength={500}>
                        <ScrollAnimation delay={700} animateIn="fadeIn" animateOnce={true}>
                            <CarouselIntro />
                        </ScrollAnimation>
                    </Parallax>
                </div>

                {/* <hr className="my-5 container" /> */}


                {/* <div id="section4">
                    <Parallax bgImage={image1} strength={1000}>
                        <div style={{ height: 1000 }}>
                            <div>HTML inside the parallax</div>
                        </div>
                    </Parallax>
                </div> */}

                {/* <hr id="section2" className="" /> */}

                {/* <div id="section2">
                    <Parallax strength={500}>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <GalleryContainer imageArray={ImageArray} title={"Featured Work"} />
                        </ScrollAnimation>
                    </Parallax>
                </div> */}
                <div >
                    <div id="section2"></div>
                    <Parallax strength={500}>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                            <ProjectContainer showFilter={true} imageArray={ImageArray} headerInfo={headerData} renderType="feature" />
                        </ScrollAnimation>
                    </Parallax>
                </div>

                {/* <hr id="section2"className="hr-light my-4 w-75" /> */}

                <div id="section4">
                    <Parallax bgImage={image3} strength={500}>
                        <div style={{ height: 500 }}>
                        </div>
                    </Parallax>
                </div>

                {/* <hr id="section3" className="my-5 container" /> */}

                <div id="section3">
                    <Parallax strength={500}>
                        <ScrollAnimation animateIn="fadeIn" animateOnce={false}>
                            <BlogPage id="section3" style={{ height: 3000 }} />
                        </ScrollAnimation>
                    </Parallax>
                </div>

                {/* <div id="section4">
                    <Parallax bgImage={image1} strength={500}>
                        <div style={{ height: 800 }}>
                            <div>HTML inside the parallax</div>
                        </div>
                    </Parallax>
                </div> */}


                {/* <Parallax strength={500}>
                    <Slideshow></Slideshow>
                </Parallax> */}


                {/* <ScrollAnimation delay={1000} animateIn="fadeIn" animateOnce={true}>
                    <CarouselIntro />
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <GalleryContainer />
                </ScrollAnimation> */}

                {/* Slow due to loading images on web */}
                {/* <BlogPage /> */}
            </div>

        );
    }
}

export default Home;

