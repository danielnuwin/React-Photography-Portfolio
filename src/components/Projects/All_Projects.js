import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText, CardFooter, Fa, Tooltip, Badge, Button } from 'mdbreact';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css'
class All_Projects extends Component {

    componentDidMount() {
        window.scroll({
            top: 350,
            behavior: "smooth"
        });
        console.log("ALL PROJECTS: window did mount");
    }

    // componentWillMount(){
    //     console.log("ALL PROJECTS: window will update");

    //     return ( window.scroll({
    //         top: 200,
    //         behavior: "smooth"
    //     }));
    // }

    render() {
        const image1 = require('../../images/slider6.jpg');
        const image2 = require('../../images/img_6.jpg');
        const image3 = require('../../images/slider8.jpg');
        const image4 = require('../../images/slider9.jpg');
        const image5 = "https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1";
        const image6 = "https://www.dropbox.com/s/tm9x6j4sfl13473/port_6.jpg?raw=1"
        const image7 = "https://www.dropbox.com/s/701kdhgfgup7668/IMG_3612.jpg?raw=1"
        const image8 = "https://www.dropbox.com/s/yg7sphgjvyauwka/urban_1.jpg?raw=1"

        return (
            <section className="project-margins text-center ">
                <Row>
                <Col lg="3" md="6" className="card-margin">
                        <Card collection className="z-depth-1-half">
                            <div className="view zoom" style={{ overflow: "hidden" }}>
                                <Link className="" to="/march">
                                    <img src={image1} className="imgFit img-fluid" alt="" />
                                </Link>
                                <div className="stripe dark">
                                    <a>
                                        <p>Lauren & Lychee <i className="fa fa-search" aria-hidden="true"> </i></p>
                                        <p><i className="fa fa-calendar" aria-hidden="true"> October 5th, 2018</i></p>
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" className="card-margin">
                        <Card collection className="z-depth-1-half">
                            <div className="view zoom ">
                                <img src={image2} className="imgFit img-fluid" alt="" />
                                <div className="stripe light">
                                    <a>
                                        <p> Wan + Chen Wedding <i className="fa fa-search" aria-hidden="true"> </i></p>
                                        <p><i className="fa fa-calendar" aria-hidden="true"> September 2th, 2017</i></p>
                                    </a>

                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" className="card-margin">
                        <Card collection className="z-depth-1-half">
                            <div className="view zoom" >
                                <Link className="" to="/march">
                                    <img src={image3} className="imgFit img-fluid" alt="" />
                                </Link>
                                <div className="stripe dark">
                                    <a>
                                        <p> SF Parking Garage <i className="fa fa-search" aria-hidden="true"> </i></p>
                                        <p><i className="fa fa-calendar" aria-hidden="true"> October 5th, 2018</i></p>
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" className="card-margin">
                        <Card collection className="z-depth-1-half">
                            <div className="view zoom ">
                                <img src={image4} className="imgFit img-fluid" alt="" />
                                <div className="stripe light">
                                    <a>
                                        <p>Urban Exploring<i className="fa fa-search" aria-hidden="true"> </i></p>
                                        <p><i className="fa fa-calendar" aria-hidden="true"> October 5th, 2018</i></p>
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" className="card-margin">
                        <Card collection className="z-depth-1-half">
                            <div className="view zoom" style={{ overflow: "hidden" }}>
                                <Link className="" to="/march">
                                    <img src={image5} className="imgFit img-fluid" alt="" />
                                </Link>
                                <div className="stripe dark">
                                    <a>
                                        <p>Lauren & Lychee <i className="fa fa-search" aria-hidden="true"> </i></p>
                                        <p><i className="fa fa-calendar" aria-hidden="true"> October 5th, 2018</i></p>
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" className="card-margin">
                        <Card collection className="z-depth-1-half">
                            <div className="view zoom ">
                                <img src={image6} className="imgFit img-fluid" alt="" />
                                <div className="stripe light">
                                    <a>
                                        <p> Wan + Chen Wedding <i className="fa fa-search" aria-hidden="true"> </i></p>
                                        <p><i className="fa fa-calendar" aria-hidden="true"> September 2th, 2017</i></p>
                                    </a>

                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" className="card-margin">
                        <Card collection className="z-depth-1-half">
                            <div className="view zoom" >
                                <Link className="" to="/march">
                                    <img src={image7} className="imgFit img-fluid" alt="" />
                                </Link>
                                <div className="stripe dark">
                                    <a>
                                        <p> SF Parking Garage <i className="fa fa-search" aria-hidden="true"> </i></p>
                                        <p><i className="fa fa-calendar" aria-hidden="true"> October 5th, 2018</i></p>
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" className="card-margin">
                        <Card collection className="z-depth-1-half">
                            <div className="view zoom ">
                                <img src={image8} className="imgFit img-fluid" alt="" />
                                <div className="stripe light">
                                    <a>
                                        <p>Urban Exploring<i className="fa fa-search" aria-hidden="true"> </i></p>
                                        <p><i className="fa fa-calendar" aria-hidden="true"> October 5th, 2018</i></p>
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </Col><Col lg="3" md="6" className="card-margin">
                        <Card collection className="z-depth-1-half">
                            <div className="view zoom" style={{ overflow: "hidden" }}>
                                <Link className="" to="/march">
                                    <img src={image1} className="imgFit img-fluid" alt="" />
                                </Link>
                                <div className="stripe dark">
                                    <a>
                                        <p>Lauren & Lychee <i className="fa fa-search" aria-hidden="true"> </i></p>
                                        <p><i className="fa fa-calendar" aria-hidden="true"> October 5th, 2018</i></p>
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" className="card-margin">
                        <Card collection className="z-depth-1-half">
                            <div className="view zoom ">
                                <img src={image2} className="imgFit img-fluid" alt="" />
                                <div className="stripe light">
                                    <a>
                                        <p> Wan + Chen Wedding <i className="fa fa-search" aria-hidden="true"> </i></p>
                                        <p><i className="fa fa-calendar" aria-hidden="true"> September 2th, 2017</i></p>
                                    </a>

                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" className="card-margin">
                        <Card collection className="z-depth-1-half">
                            <div className="view zoom" >
                                <Link className="" to="/march">
                                    <img src={image3} className="imgFit img-fluid" alt="" />
                                </Link>
                                <div className="stripe dark">
                                    <a>
                                        <p> SF Parking Garage <i className="fa fa-search" aria-hidden="true"> </i></p>
                                        <p><i className="fa fa-calendar" aria-hidden="true"> October 5th, 2018</i></p>
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" className="card-margin">
                        <Card collection className="z-depth-1-half">
                            <div className="view zoom ">
                                <img src={image4} className="imgFit img-fluid" alt="" />
                                <div className="stripe light">
                                    <a>
                                        <p>Urban Exploring<i className="fa fa-search" aria-hidden="true"> </i></p>
                                        <p><i className="fa fa-calendar" aria-hidden="true"> October 5th, 2018</i></p>
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" className="card-margin">
                        <Card collection className="z-depth-1-half">
                            <div className="view zoom" style={{ overflow: "hidden" }}>
                                <Link className="" to="/march">
                                    <img src={image5} className="imgFit img-fluid" alt="" />
                                </Link>
                                <div className="stripe dark">
                                    <a>
                                        <p>Lauren & Lychee <i className="fa fa-search" aria-hidden="true"> </i></p>
                                        <p><i className="fa fa-calendar" aria-hidden="true"> October 5th, 2018</i></p>
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" className="card-margin">
                        <Card collection className="z-depth-1-half">
                            <div className="view zoom ">
                                <img src={image6} className="imgFit img-fluid" alt="" />
                                <div className="stripe light">
                                    <a>
                                        <p> Wan + Chen Wedding <i className="fa fa-search" aria-hidden="true"> </i></p>
                                        <p><i className="fa fa-calendar" aria-hidden="true"> September 2th, 2017</i></p>
                                    </a>

                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" className="card-margin">
                        <Card collection className="z-depth-1-half">
                            <div className="view zoom" >
                                <Link className="" to="/march">
                                    <img src={image7} className="imgFit img-fluid" alt="" />
                                </Link>
                                <div className="stripe dark">
                                    <a>
                                        <p> SF Parking Garage <i className="fa fa-search" aria-hidden="true"> </i></p>
                                        <p><i className="fa fa-calendar" aria-hidden="true"> October 5th, 2018</i></p>
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" className="card-margin">
                        <Card collection className="z-depth-1-half">
                            <div className="view zoom ">
                                <img src={image8} className="imgFit img-fluid" alt="" />
                                <div className="stripe light">
                                    <a>
                                        <p>Urban Exploring<i className="fa fa-search" aria-hidden="true"> </i></p>
                                        <p><i className="fa fa-calendar" aria-hidden="true"> October 5th, 2018</i></p>
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </section>
        );
    };
}

export default All_Projects;