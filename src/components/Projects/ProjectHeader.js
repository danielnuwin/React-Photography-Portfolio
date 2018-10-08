import React, { Component } from 'react';
import All_Projects from './All_Projects'
import { Jumbotron, Container, Card, Button, CardTitle, CardText, Row, Col, Fa } from 'reactstrap';
import { CardImage } from 'mdbreact';
import { Parallax } from "react-parallax";
import '../App.css'

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
            <Card body className="text-center" style={{}}>
              <h1 className="headerTitle display-4" ><strong>{title}</strong></h1>
              <h4 className="display-5 indigo-text headerDate ">{date}</h4>
              <p className="grey-text headerDesc"> {desc}</p>
            </Card>
        </div>
      </div>

    );

  }

}
export default ProjectHeader;