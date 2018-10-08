import React from 'react';
import ReactDOM from 'react-dom'
import {
    Mask, Row, Col, Fa, Button, View, Container,
    Carousel, CarouselCaption, CarouselInner, CarouselItem
} from 'mdbreact';
import './App.css'
import Slideshow from './Slideshow';
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from "react-parallax";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Bounce, Shake } from 'react-motions'

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
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                    interval={10000}>
                    <CarouselInner>

                        {/* <CarouselItem itemId="0">
                            <Slideshow ></Slideshow>
                            <CarouselCaption>
                                <h3 className="h3-responsive">Light mask</h3>
                                <p>First text</p>
                                <p>Taken june 21th by @mattonit</p>
                            </CarouselCaption>
                        </CarouselItem> */}


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
                                            <ScrollAnimation delay={1750} animateIn="fadeIn" animateOnce={true}>
                                                <Container className="px-md-3 px-sm-0">
                                                    <Row>
                                                        <Col md="" className="mb-4 white-text text-center" style={{ border: "solid" }}>
                                                            <h3 className="display-3 font-weight-bold mb-0 pt-md-5">Daniel NuWin | Photography </h3>
                                                            <hr className="hr-light my-4 w-75" />
                                                            <h4 className="subtext-header mt-2 mb-4">Photographer/Techie</h4>
                                                            {/* <Button outline rounded color="white"><Fa icon="home" /> Visit us</Button> */}
                                                        </Col>
                                                    </Row>
                                                </Container>
                                                </ScrollAnimation>
                                                <Col md="6" xl="5" className="mt-xl-5">
                                                    {/* <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" className="img-fluid"/> */}
                                                </Col>
                                        </div>
                                    </Container>
                                </Mask>
                            </View>
                                <CarouselCaption>
                                    <Bounce duration={2} infinite>
                                        {/* <h3 className="h3-responsive"> Gallery</h3> */}
                                        <footer>
                                            {/* <a href="#one" className="buttonMore button style2 down">More</a> */}
                                            <AnchorLink id="buttonDown" className="nav-link buttonMore button style2 down centerdiv" href='#section2'> More</AnchorLink>
                                        </footer>
                                    </Bounce>
                                </CarouselCaption>
                        </CarouselItem>

                            <CarouselItem itemId="2">
                                <View>
                                    {/* <img className="d-block w-100" src={require('../images/slider2.jpg')} alt="Second slide" /> */}
                                    <div className="view2"></div>
                                    <Mask className="d-flex justify-content-center align-items-center">
                                        <Container>
                                            <Row>
                                                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                                    <h1 className="h1-responsive font-weight-bold mt-sm-5">No Limits </h1>
                                                    <hr className="hr-light" />
                                                    <h6 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
                                                    dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                  iste.</h6>
                                                    <Button color="white">Download</Button>
                                                    <Button outline color="white">Learn More</Button>
                                                </div>
                                                <Col md="6" xl="5" className="mt-xl-5">
                                                    {/* <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" className="img-fluid"/> */}
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

                            <CarouselItem itemId="3">
                                <View>
                                    {/* <img className="d-block w-100" src={require('../images/slider3.jpg')} alt="Second slide" /> */}
                                    <div className="view3"></div>
                                    <Mask className="d-flex justify-content-center align-items-center">
                                        <Container>
                                            <Row>
                                                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                                    <h1 className="h1-responsive font-weight-bold mt-sm-5">No Limits </h1>
                                                    <hr className="hr-light" />
                                                    <h6 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
                                                    dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                  iste.</h6>
                                                    <Button color="white">Download</Button>
                                                    <Button outline color="white">Learn More</Button>
                                                </div>
                                                <Col md="6" xl="5" className="mt-xl-5">
                                                    {/* <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" className="img-fluid"/> */}
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

                            <CarouselItem itemId="4">
                                <View>
                                    {/* <img className="d-block w-100" src={require('../images/slider4.jpg')} alt="Second slide" /> */}
                                    <div className="view4"></div>
                                    <Mask className="d-flex justify-content-center align-items-center">
                                        <Container>
                                            <Row>
                                                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                                    <h1 className="h1-responsive font-weight-bold mt-sm-5">No Limits </h1>
                                                    <hr className="hr-light" />
                                                    <h6 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
                                                    dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                  iste.</h6>
                                                    <Button color="white">Download</Button>
                                                    <Button outline color="white">Learn More</Button>
                                                </div>
                                                <Col md="6" xl="5" className="mt-xl-5">
                                                    {/* <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" className="img-fluid"/> */}
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Mask>
                                </View>
                                <CarouselCaption>
                                    <h3 className="h3-responsive">Light mask</h3>
                                    <p>First text</p>
                                    <p>Taken june 21th by @mattonit</p>
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

                    {/************************** Routes *************************/}
                    {/* <hr className="my-5 container" />
                <ScrollAnimation animateIn="fadeIn" animationDelay={1500} animateOnce={false}>
                    <Slideshow></Slideshow>
                </ScrollAnimation> */}
            </div>
                );
            }
        };
        
export default CarouselIntro;