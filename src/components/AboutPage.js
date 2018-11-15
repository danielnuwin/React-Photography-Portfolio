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
                    Welcome to my portfolio! It is currently under contruction so stay tuned for the final version.
                     I'm a photographer, avid wanderer, and a software engineer.
                        I was born in the Bay Area but spent most of my
                          growing up days in Southern California where I attended to college. I've occassionally
                          bounced around the world traveling for a couple years here and there....rest to be continued!
                   </p>

                {/* <p className="text-center w-responsive mx-auto ">
                    I am currently building this photogpraphy portfolio with ReactJS with Webpack and Babel and everything
                    is still a work in progress...so stay tuned!
                </p> */}

                <Row className="border-bottom">
                    <Col lg="5">
                        <View className="rounded z-depth-4 mb-lg-0 mb-4 " hover waves>
                            <img className="img-fluid" src={require("../images/About_Page/about4.jpg")} alt="Sample image" />
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
                            What kind of photography do I do? Well, I do all types. Anywhere from travel, landscapes, lifestyle to wedddings, portraits, and events. Well
                            pretty much whatever you need me to do I can do for you! I've even dabbled in food and product photography.
                        
                            <br/>
                            Initially, I found my inspiration came from traveling around the world seeing different kinds of people, places, and things. As you can tell from my photos, I love colors.
                            <br/>
                             Open for shoots and collaborations! Feel free to email me for rates and more info at <strong className="email"> danielnuwin@gmail.com</strong> 

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
                            <p> 24 Countries --- 75+ Cities ---- Millions of stories</p>
                            <br/>
                            Travel Blog Under Construction...

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
                            <img className="img-fluid" src={require("../images/About_Page/about.jpg")} alt="Sample image" />
                            <a><Mask overlay="white-slight" /></a>
                        </View>
                    </Col>
                    <Col lg="7">
                        <h3 className="font-weight-bold mb-3 p-0"><Fa icon="hand-spock-o" className=""></Fa> <strong>Software Engineer</strong></h3>
                        <p>
                            I'm a software engineer with 5 years experience in the industry. I graduated with a B.S. in Computer Science at the University of California, Irvine. 
                            My expertise includes Frontend development with React and Angular, some Backend development in Java, as well as Quality Assurance. 
                            <br/>
                            <br/>
                            My Technical<a href="https://www.dropbox.com/s/gasb11asmkahvyx/Daniel%20Nguyen%20Resume%2007.18%20--%20Portfolio.pdf?dl=0" target="_blank"> Resume</a>
                            <br/>
                            Github <a href="https://github.com/danielnuwin" target="_blank"> Repo </a>
                        </p>
                        
                        <h4 className="tech-info"> This Portfolio was built with</h4>
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