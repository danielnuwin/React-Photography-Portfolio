import React, { Component } from 'react';
import { Container, Row, Col, Mask, Fa, View, Button } from 'mdbreact';
import './css/App.css'
import ScrollAnimation from 'react-animate-on-scroll';

const AboutPage = () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });    // console.log("*******Lazy Load*******");
    return (
        <ScrollAnimation delay={300} animateIn="fadeIn" animateOnce={true}>

            <Container id="aboutpage" className="marginTop3">
                {/* <h2 className="h1-responsive font-weight-bold text-center">Who am I?</h2> */}
                <p className="text-center w-responsive mx-auto ">
                    Welcome to my page. I'm a photographer and a software engineer.
                         Born in the Bay Area but spent most of my
                          growing up in Southern California where I graduated from UC Irvine. I've occassionally
                          bounced around the world traveling for a couple years
                  here and there....rest to be continued! </p>

                <p className="text-center w-responsive mx-auto ">
                    I am currently building this photogpraphy portfolio with ReactJS with Webpack and Babel and everything
                    is still a work in progress...so stay tuned!
                </p>

                <Row className="border-bottom">
                    <Col lg="5">
                        <View className="rounded z-depth-4 mb-lg-0 mb-4 " hover waves>
                            <img className="img-fluid" src={require("../images/About_Page/about.jpg")} alt="Sample image" />
                            <a><Mask overlay="white-slight" /></a>
                        </View>
                    </Col>
                    <Col lg="7">
                        {/* <a className="green-text"><h6 className="font-weight-bold mb-3"><Fa icon="cubes" className="pr-2"></Fa>Me</h6></a>
                        <h3 className="font-weight-bold mb-3 p-0"><strong>I am Daniel NuWin</strong></h3>
                        <p>"Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts,
                             it even breaks your heart. But that’s okay. The journey changes you;
                             it should change you. It leaves marks on your memory, on your consciousness,
                              on your heart, and on your body. You take something with you. Hopefully, you
                          leave something good behind. -- Anthony Bourdain"</p>

                        <p>.... Under Construction </p> */}
                        <h2 className="font-weight-bold mb-3 p-0"> <Fa icon="image" className="pr-2 fa-camera-retro"></Fa><strong>Photographer</strong></h2>
                        <p className="">
                            Open for shoots and collaborations! Message me for more info!
                        </p>
                        <h4 className="tech-info"> My Camera Gear</h4>
                        <ul style={{ marginLeft: '1em' }}>
                            <li className="camera-info-list"> Canon 6D</li>
                            <li className="camera-info-list"> Sigma 35mm f/1.4</li>
                            <li className="camera-info-list"> Tamron 24-70mm f/2.8</li>
                            <li className="camera-info-list"> Canon 50mm f/1.8</li>
                            <li className="camera-info-list"> Canon Flash 430ex ii</li>
                        </ul>

                    </Col>
                </Row>

                <Row className="border-bottom">
                    <Col lg="7">
                        {/* <a className="pink-text">
                            <h6 className="font-weight-bold mb-3">
                                <Fa icon="image" className="pr-2"></Fa>Lifestyle </h6>
                        </a> */}
                        <h3 className="font-weight-bold mb-3 p-0">  <Fa icon="image" className="pr-2"></Fa><strong>Traveler</strong></h3>

                        To Be Continued...

                    </Col>
                    <Col lg="5">
                        <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                            <img className="img-fluid" src={require("../images/About_Page/about1.jpg")} alt="Sample image" />
                            <a><Mask overlay="white-slight" /></a>
                        </View>
                    </Col>
                </Row>

                <Row>
                    <Col lg="5">
                        <View className="rounded z-depth-4 mb-lg-0 mb-4 " hover waves>
                            <img className="img-fluid" src={require("../images/About_Page/about3.jpg")} alt="Sample image" />
                            <a><Mask overlay="white-slight" /></a>
                        </View>
                    </Col>
                    <Col lg="7">
                        <h3 className="font-weight-bold mb-3 p-0"><Fa icon="hand-spock-o" className=""></Fa> <strong>Software Engineer</strong></h3>
                        <h4 className="tech-info"> Portfolio Built With</h4>
                        <ul style={{ marginLeft: '1em' }}>
                            <li><a className="tech-info-list" href="https://reactjs.org/" rel="nofollow">Reactjs</a> - A JavaScript framework for building user interfaces</li>
                            <li><a className="tech-info-list" href="https://webpack.js.org/" rel="nofollow">Webpack</a> - JavaScript module bundler</li>
                            <li><a className="tech-info-list" href="http://babeljs.io/" rel="nofollow">Babel</a> - JavaScript transpiler/compiler</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </ScrollAnimation>

    );
}
export default AboutPage;