import React from 'react';
import ReactDOM from 'react-dom'
import {
    Mask, Row, Col, Fa, Button, View, Container,
    Carousel, CarouselCaption, CarouselInner, CarouselItem
} from 'mdbreact';
import './css/App.css'
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from "react-parallax";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Bounce } from 'react-motions'
import { BrowserRouter as Router, Route, Link, withRouter, Redirect } from "react-router-dom";
import FadeIn from 'react-fade-in';

import ReactGA from 'react-ga';

function trackGA (link) {
    ReactGA.event({
        category: link,
        action: 'Clicked Intro Menu',
    });
}

const CarouselItemTemplate = (props) => {
    const {view} = props;
    return (
        <CarouselItem itemId={view}>
            <View>
                {/* <img id="view1" className="d-block w-100" src={require('../images/slider1.jpg')} alt="Second slide" /> */}
                <div className={`view`+view}></div>
                <Mask className="d-flex justify-content-center align-items-center">
                    <Container className="mb-intro" >
                        <div>
                            <ScrollAnimation delay={1500} animateIn="fadeIn" animateOnce={true}>
                                <Container className="px-md-3 px-sm-0">
                                    <Row>
                                        <Col md="" className="mb-4 white-text text-center dark intro-container" style={{ border: "solid", backgroundColor: '#2715151f' }}>
                                            <div className="white-text text-center text-md-left col-md-6">
                                                <div>
                                                    <h4 className="display-4 intro-title" > Daniel NuWin </h4>
                                                    {/* <h3 className="display-5 intro-subtitle" > Photography </h3> */}
                                                    <h3 className="display-5 intro-subtitle" > Photography | Explore | Tech </h3>
                                                </div>
                                                <hr className="hr-light" />
                                                {/* <h6 className="mb-4 display-6 text-center" style={{ color: 'black', fontWeight: "400" }}> “Embrace the unknown for which it will eventually bring you to where you need to be”</h6> */}
                                                <AnchorLink href='#headerbox'>
                                                    <Button color="white" onClick={() => trackGA('portfolio1_click')}>Portfolio</Button>
                                                </AnchorLink>
                                                <Link to="/projects">
                                                    <Button outline color="white" onClick={() => trackGA('project_click')}> Projects</Button>
                                                </Link>
                                                {/* <AnchorLink href='#contactcard'> */}
                                                <AnchorLink href='#footer_anchor'>
                                                    <Button color="red" onClick={() => trackGA('contact_click')}> Contact </Button>
                                                </AnchorLink>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </ScrollAnimation>
                        </div>
                    </Container>
                </Mask>
            </View>
            <CarouselCaption>
                <FadeIn delay={2000}>
                    <Bounce duration={2} infinite>
                        <AnchorLink id="buttonDown" className="nav-link buttonMore button style2 down centerdiv" href='#headerbox'
                             onClick={() => trackGA('portfolio2_click')}> </AnchorLink>
                    </Bounce>
                </FadeIn>
            </CarouselCaption>
        </CarouselItem>
    );
}
export default CarouselItemTemplate;