import React, { Component } from 'react';
import All_Projects from './All_Projects'
import { Jumbotron, Card, Button, CardTitle, CardText } from 'reactstrap';
import { Container, Row, Col, CardBody, Mask, Fa, View, Badge } from 'mdbreact';

import { CardImage } from 'mdbreact';
import { Parallax } from "react-parallax";
import '../css/App.css'

class ProjectHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgImage: "",
      title: "",
      date: "",
      desc: "",
    }
  }

  componentWillMount() {
    this.setState({
      bgImage: this.props.bgImage,
      title: this.props.title,
      date: this.props.date,
      desc: this.props.desc
    });
  }

  render() {
    // const image1 = require('../../images/slider5.jpg');
    const { bgImage, title, date, desc } = this.state;

    return (
      <div>
        <Parallax bgImage={bgImage} strength={1000}>
          <div className="headerbg">
          </div>
        </Parallax>
        <div id="headerbox" className="rounded z-depth-2">
          <Card body className="text-center Card">
            <h1 className="headerTitle display-4" ><strong>{title}</strong></h1>
            <h5 className="display-6 indigo-text headerDate"><i className="fa fa-calendar date" aria-hidden="true"> {date} </i></h5>
            <p className="grey-text headerDesc"> {desc}</p>
          </Card>
        </div>
      </div>

    );

  }

}
export default ProjectHeader;