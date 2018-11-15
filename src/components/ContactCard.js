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
                    <div className="headerbg headerbg-contact" >
                    </div>
                </Parallax>
                <div id="headerbox" className="rounded z-depth-2">
                    {/* <LazyLoad>  Doesn't get picked up by anchor*/}
                    <Card className="text-left Card contactcard_margin">
                        <Row>
                            <Col lg="5" className="contactcard_width">
                                <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                    <img className="img-fluid" src={myPhoto} />
                                    <a><Mask overlay="white-slight" /></a>
                                </View>
                            </Col>
                            <Col lg="7" className="contactcard_width contactcard_padding_mobile contactcard_padding">
                                <a className="green-text"><h4 className="font-weight-bold "><Fa icon="hand-spock-o" className="pr-2"></Fa>Hello!</h4></a>
                                <h3 className="font-weight-bold  contactcard_title"><strong>Daniel Nguyen</strong></h3>
                                <h5 className="contactcard_info"> <i className="fa fa-envelope"></i> <strong>  danielnuwin@gmail.com </strong></h5>
                                <h5 className="contactcard_info"><i className="fa fa-at"></i> <strong> danielnuwin</strong></h5>
                               <hr className="hr-dark"/>
                                {/* <div className="social-media">
                                    <a href="https://www.instagram.com/danielnuwin" className="btn-floating btn-lg btn-ins"><i className="fa fa-instagram fa-instagram-contact"></i></a>
                                    <a href="https://soundcloud.com/danielnuwin" className="btn-floating btn-lg btn-tw"><i className="fa fa-soundcloud fa-soundcloud-contact"></i></a>
                                    <a className="btn-floating btn-lg btn-fb" ><i className="fa fa-facebook-official fa-facebook-contact"></i></a>
                                    <a className="btn-floating btn-lg btn-li" ><i className="fa fa-linkedin fa-linkedin-contact"></i></a>
                                    <a href="https://github.com/danielnuwin" className="btn-floating btn-lg btn-gh" ><i className="fa fa-github fa-github-contact"></i></a>
                                    <a className="btn-floating btn-lg btn-tw" type="button" role="button"><i className="fa fa-twitter"></i></a>
                                </div> */}

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