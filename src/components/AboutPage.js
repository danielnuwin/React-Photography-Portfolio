import React, { Component } from 'react';
import { Container, Row, Col, Mask, Fa, View, Button } from 'mdbreact';
import './css/App.css'

const AboutPage = () => {
    // console.log("*******Lazy Load*******");
    return (
        <Container id="aboutpage" className="marginTop3">
            <h2 className="h1-responsive font-weight-bold text-center">Who am I?</h2>
            <p className="text-center w-responsive mx-auto mb-5">
                Welcome to my page. I'm a photogprahyer and a technie.
                 Born in the Bay Area, California but spent most of my
                  growing up in Southern California. I've occassionally 
                  bounced around the world traveling for a couple years 
                  here and there. </p>

            <hr className="my-5" style={{ width: '38em' }} />

            <Row>
                <Col lg="5">
                    <View className="rounded z-depth-4 mb-lg-0 mb-4 " hover waves>
                        <img className="img-fluid" src={require("../images/About_Page/about.jpg")} alt="Sample image" />
                        <a><Mask overlay="white-slight" /></a>
                    </View>
                </Col>
                <Col lg="7">
                    <a className="green-text"><h6 className="font-weight-bold mb-3"><Fa icon="cubes" className="pr-2"></Fa>Me</h6></a>
                    <h3 className="font-weight-bold mb-3 p-0"><strong>I am Daniel NuWin</strong></h3>
                    <p>"Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts,
                         it even breaks your heart. But that’s okay. The journey changes you; 
                         it should change you. It leaves marks on your memory, on your consciousness,
                          on your heart, and on your body. You take something with you. Hopefully, you 
                          leave something good behind."</p>
                    <Button color="success" size="md" className="waves-light ">Read more</Button>
                </Col>
            </Row>
            <hr className="my-5" style={{ width: '38em' }} />

            <Row>
                <Col lg="7">
                    <a className="pink-text">
                        <h6 className="font-weight-bold mb-3">
                            <Fa icon="image" className="pr-2"></Fa>Lifestyle
            </h6>
                    </a>
                    <h3 className="font-weight-bold mb-3 p-0"><strong>Life as a Clueless Wanderer</strong></h3>
                    <p style={{fontStyle: "italic"}}>“Travel changes you. As you move through this life and this world you change things slightly,
                        you leave marks behind, however small. And in return, life—and travel—leaves marks on you.
                         Most of the time, those marks – on your body or on your heart – are beautiful. Often,
                          though, they hurt.”</p>
                    <p>by <a><strong>The one and only</strong></a> Present Day</p>
                    <Button color="pink" size="md" className="mb-lg-0 mb-4 waves-light">Read more</Button>
                </Col>
                <Col lg="5">
                    <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                        <img className="img-fluid" src={require("../images/About_Page/about2.jpg")} alt="Sample image" />
                        <a><Mask overlay="white-slight" /></a>
                    </View>
                </Col>
            </Row>
            <hr className="my-5" style={{ width: '38em' }} />

            <Row>
                <Col lg="5">
                    <View className="rounded z-depth-4 mb-lg-0 mb-4 " hover waves>
                        <img className="img-fluid" src={require("../images/About_Page/about3.jpg")} alt="Sample image" />
                        <a><Mask overlay="white-slight" /></a>
                    </View>
                </Col>
                <Col lg="7">
                    <a className="blue-text"><h6 className="font-weight-bold mb-3"><Fa icon="hand-spock-o" className="pr-2"></Fa>Me</h6></a>
                    <h3 className="font-weight-bold mb-3 p-0"><strong>I am Daniel NuWin</strong></h3>
                    <p>I like to take photos and I like sports</p>
                    <p>I like to travel</p>
                    <p>I like tech</p>
                    <Button color="success" size="md" className="waves-light ">Read more</Button>
                </Col>
            </Row>
        </Container>
    );
}
export default AboutPage;