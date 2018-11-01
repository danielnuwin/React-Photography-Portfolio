import React, { Component } from 'react';
import './css/App.css'
import { Parallax } from "react-parallax";
import { Jumbotron, Card, Button, CardText } from 'reactstrap';
import { Container, Row, Col, Mask, Fa, View, CardTitle } from 'mdbreact';
import { BrowserRouter as Router, Route, Link, withRouter, Redirect } from "react-router-dom";
import LazyLoad from 'react-lazy-load';
import ScrollAnimation from 'react-animate-on-scroll';

const ContactCard = () => {
    // console.log("*******Lazy Load*******");
    const myPhoto = require("../images/About_Page/about2.jpg");
    const SF_Image = require('../images/08.18.18_Urban_SF/SF-17.jpg');

    return (
        <div id="contactcard">
            <ScrollAnimation delay={500} animateIn="fadeIn" animateOnce={true}>

                <Parallax bgImage={SF_Image} strength={1000} className={`parallax-mobile-view `}>
                    <div className="headerbg" style={{ height: 700 }}>
                    </div>
                </Parallax>
                <div id="headerbox" className="rounded z-depth-2 ">
                    {/* <LazyLoad> */}

                    <Card className="text-left Card contactcard_margin">
                        <Row>
                            <Col lg="5" className="contactcard_width">
                                <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                    <img className="img-fluid" src={myPhoto} />
                                    <a><Mask overlay="white-slight" /></a>
                                </View>
                            </Col>
                            <Col lg="7" className="contactcard_width contactcard_padding_mobile">
                                <a className="blue-text"><h6 className="font-weight-bold mb-3"><Fa icon="hand-spock-o" className="pr-2"></Fa>Me</h6></a>
                                <h3 className="font-weight-bold  contactcard_title"><strong>Daniel Nguyen</strong></h3>
                                <h4 className="contactcard_info">Email: <strong>  danielnuwin@gmail.com </strong></h4>
                                <h4 className="contactcard_info">Instagram: <strong>  @danielnuwin</strong></h4>

                                <Link to="/about">
                                    <Button color="danger" size="md" className="mb-lg-0 mb-4 waves-light">Read more</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Card>

                    {/* </LazyLoad> */}
                </div>
            </ScrollAnimation>

        </div>
    );
}
export default ContactCard;