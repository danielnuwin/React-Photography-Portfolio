import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'mdbreact';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../css/App.css'
import ReactGA from 'react-ga'

class ProjectTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            date: "",
            coverImage: "",
            link: "",
            bannerStyle: "",
            projectObject: {},
            style: ""
        };
    }

    trackGA(link) {
        ReactGA.event({
            category: 'Project: ' + link,
            action: 'Clicked Project',
        });
    }

    componentWillMount() {
        this.setState({
            // link: this.props.link,
            // coverImage: this.props.coverImage,
            // title: this.props.title,
            // date: this.props.date,
            // bannerStyle: this.props.bannerStyle
            link: this.props.projectObject.link,
            coverImage: this.props.projectObject.coverImage,
            title: this.props.projectObject.title,
            date: this.props.projectObject.date,
            bannerStyle: this.props.projectObject.bannerStyle,
            style: this.props.projectObject.style
        });

    }

    render() {
        // const image1 = require('../../images/slider5.jpg');
        const { link, coverImage, title, date, bannerStyle, style } = this.state;

        return (
            <Col lg="3" md="6" className="card-margin">
                <Card collection className="z-depth-1-half" onClick={() => this.trackGA(link)}>
                    <Link className="" to={link}>
                        <div className="view zoom cursor-pointer" style={{ overflow: "hidden" }}>
                            <img src={coverImage} className={`imgFit img-fluid ` + style} alt="" />
                            <div className={`stripe ` + bannerStyle}>
                                <div>
                                    <p> {title} </p>
                                    {/* <p> Category </p> */}
                                    <p><i className="fa fa-calendar date" aria-hidden="true"> {date} </i></p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Card>
            </Col>
        );
    }

}
export default ProjectTemplate;