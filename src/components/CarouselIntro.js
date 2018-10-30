import React from 'react';
import ReactDOM from 'react-dom'
import {
    Mask, Row, Col, Fa, Button, View, Container,
    Carousel, CarouselCaption, CarouselInner, CarouselItem
} from 'mdbreact';
import './css/App.css'
import Slideshow from './Slideshow';
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from "react-parallax";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Bounce } from 'react-motions'
import { BrowserRouter as Router, Route, Link, withRouter, Redirect } from "react-router-dom";
import FadeIn from 'react-fade-in';

class CarouselIntro extends React.Component {
    constructor(props) {
        super(props),
            this.state = {
                collapse: false
            }
        this.onClick = this.onClick.bind(this);
        this.handleNavbarClick = this.handleNavbarClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    handleNavbarClick() {
        this.setState({
            collapse: false
        });
    }

    render() {
        const overlay = <div id="sidenav-overlay" style={{ backgroundColor: 'transparent' }} onClick={this.handleNavbarClick} />
        return (
            <div id="carouselIntro" className="">
                <Carousel
                    activeItem={1}
                    length={1}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                    interval={10000}>
                    <CarouselInner>
                        <CarouselItem itemId="1">
                            <View>
                                {/* <img id="view1" className="d-block w-100" src={require('../images/slider1.jpg')} alt="Second slide" /> */}
                                <div className="view1"></div>
                                <Mask className="d-flex justify-content-center align-items-center">
                                    <Container>
                                        <div>
                                            {/* <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                                <h1 className="h1-responsive font-weight-bold mt-sm-5">No Limits </h1>
                                                <hr className="hr-light" />
                                                <h6 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
                                                dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiaeiste.
                                                </h6>

                                                <Button color="white">Download</Button>
                                                <Button outline color="white">Learn More</Button>
                                            </div> */}
                                            <ScrollAnimation delay={1500} animateIn="fadeIn" animateOnce={true}>
                                                <Container className="px-md-3 px-sm-0">
                                                    {/* <Row>
                                                        <Col md="" className="mb-4 white-text text-center  dark" style={{ border: "solid", backgroundColor: 'rgba(255,255,255,.2)' }}>
                                                            <h4 className="display-4 font-weight-bold mb-0 pt-md-5" style={{ color: '#4B515D' }}>Daniel NuWin | <span style={{ color: '#4B515D' }}>Photography</span> </h4>
                                                            <hr className="hr-light my-4 w-75" />
                                    
                                                            <AnchorLink href="#headerbox">
                                                                <Button color="white">Portfolio</Button>
                                                            </AnchorLink>
                                                            <Link to="/projects">
                                                                <Button outline color="white"> Projects</Button>
                                                            </Link>
                                                        </Col>
                                                    </Row> */}

                                                    <Row>
                                                        <Col md="" className="mb-4 white-text text-center  dark" style={{ border: "solid", backgroundColor: '#2715151f' }}>

                                                            <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                                                <h4 className="display-4 " > Daniel NuWin </h4>
                                                                <h3 className="display-5 " > Photography </h3>
                                                                <hr className="hr-light" />
                                                                <h6 className="mb-4 display-6"> “If you want to know where your heart is, follow your mind when it wanders”</h6>
                                                                <AnchorLink href='#headerbox'>
                                                                    <Button color="white">Portfolio</Button>
                                                                </AnchorLink>
                                                                <Link to="/projects">
                                                                    <Button outline color="white"> Projects</Button>
                                                                </Link>
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
                                        <AnchorLink id="buttonDown" className="nav-link buttonMore button style2 down centerdiv" href='#headerbox'> More</AnchorLink>
                                    </Bounce>
                                </FadeIn>
                            </CarouselCaption>
                        </CarouselItem>

                        <CarouselItem itemId="2">
                            <View>
                                {/* <img className="d-block w-100" src={require('../images/slider3.jpg')} alt="Second slide" /> */}
                                <div className="view3"></div>
                                <Mask className="d-flex justify-content-center align-items-center">
                                    <Container>
                                        <Row>
                                            <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                                <h1 className="h1-responsive font-weight-bold mt-sm-5"> Dffaniel NuWin </h1>
                                                <h5 className="h1-responsive" style={{ fontSize: '17px' }}> Photography</h5>
                                                <hr className="hr-line" />
                                                <h6 className="mb-4"> </h6>
                                                <AnchorLink href='#headerbox'>
                                                    <Button color="white">Portfolio</Button>
                                                </AnchorLink>
                                                <Link to="/projects">
                                                    <Button outline color="white"> Projects</Button>
                                                </Link>
                                            </div>
                                            <Col md="6" xl="5" className="mt-xl-5">
                                                <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" className="img-fluid" />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Mask>
                            </View>

                            <CarouselCaption>
                                {/* <h3 className="h3-responsive">Light mask</h3>
                                    <p>First text</p>
                                    <p>Taken june 21th by @mattonit</p> */}
                                <Bounce duration={2} infinite>
                                    {/* <h3 className="h3-responsive"> Gallery</h3> */}
                                    <footer>
                                        {/* <a href="#one" className="buttonMore button style2 down">More</a> */}
                                        <AnchorLink id="buttonDown" className="nav-link buttonMore button style2 down centerdiv" href='#section2'> More</AnchorLink>
                                    </footer>
                                </Bounce>
                            </CarouselCaption>
                        </CarouselItem>


                    </CarouselInner>
                </Carousel>

            </div>
        );
    }
};

export default CarouselIntro;