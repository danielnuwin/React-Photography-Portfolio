import React, { Component } from 'react';
import { Container, Row, Col, Mask, Fa, View, Button } from 'mdbreact';
import './css/App.css'

const AboutPage = () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });    // console.log("*******Lazy Load*******");
    return (
        <Container id="aboutpage" className="marginTop3">
            <h2 className="h1-responsive font-weight-bold text-center">Who am I?</h2>
            <p className="text-center w-responsive mx-auto ">
                Welcome to my page. I'm a photogprahyer and a technie.
                 Born in the Bay Area, California but spent most of my
                  growing up in Southern California. I've occassionally
                  bounced around the world traveling for a couple years
                  here and there. </p>

            <p className="text-center w-responsive mx-auto ">
                I am currently building this photogpraphy portfolio with ReactJS with Webpack and Babel and everything
                is still a work in progress...so stay tuned!
                </p>

            <p className="text-center w-responsive mx-auto ">
                I shoot with a Canon 6D and mainly use my Sigma 35mm f1.4 and Tamron 24-70 f2.8 Lenses. 
               <br/>
                Open for shoots and collaborations! Message me for more info!
                </p>

            <div className="text-center">
                <ul className="">
                    <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb mx-1" target="_blank" href="https://www.instagram.com/danielnuwin"><i className="fa fa-instagram">: @danielnuwin</i></a></li>
                    <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb mx-1" target="_blank" href="https://www.facebook.com/danielnuwinn"><i className="fa fa-facebook">:  Facebook </i></a></li>
                    <li className="list-inline-item">Email: danielnuwin@gmail.com</li>
                </ul>
            </div>

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
                          leave something good behind. -- Anthony Bourdain"</p>

                    <p>.... Under Construction </p>

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
                    <p style={{ fontStyle: "italic" }}>“Travel changes you. As you move through this life and this world you change things slightly,
                        you leave marks behind, however small. And in return, life—and travel—leaves marks on you.
                         Most of the time, those marks – on your body or on your heart – are beautiful. Often,
                          though, they hurt. -- Anthony Bourdain”</p>

                    <p>.... Under Construction </p>

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
                    <p>.... Under Construction </p>
                    <Button color="success" size="md" className="waves-light ">Read more</Button>
                </Col>
            </Row>
        </Container>
    );
}
export default AboutPage;