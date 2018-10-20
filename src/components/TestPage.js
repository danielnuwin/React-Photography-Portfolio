import React, { Component } from 'react';
import './TestPage.css'
import ProjectPageTest from './Projects/All_Projects'
// import { Jumbotron, Container, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { CardImage } from 'mdbreact';
import { Parallax } from "react-parallax";
import Slideshow from "./Slideshow"
import './css/App.css'
import { Container, Row, Col, Mask, Fa, View, Button } from 'mdbreact';


const TestPage = () => {
  const image1 = 'https://www.dropbox.com/s/05znwgdjf1haqo8/IMG_3732.jpg?raw=1';

  return (
    <div >
      {/* <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /> */}
      {/* <Slideshow /> */}

      {/* <input type="checkbox" name="toggle" id="toggle" />
      <label htmlFor="toggle"></label>
      <div className="container">
        <h1>Pure CSS3 Slide Down Toggle Demo</h1>
        <h2> Click the Open button to see hidden mesage.</h2>
      </div>
      <div className="message"><h1> hello, I'm a hidden message. You found it.</h1>
        <h2>Now Click the Heart button in the bottom to support CSS3</h2>
      </div> */}

      <Row>
        <Col>
          <View className="rounded z-depth-4 mb-lg-0 mb-4 " hover waves>
            <img className="img-fluid" src={image1} alt="Sample image" />
            <a><Mask overlay="white-slight" /></a>
          </View>
        </Col>

      </Row>




      {/* <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
        <Row style={{ margin: "4em 1em 0 1em" }}>
          <Col sm="12">
            <Card body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
        </Row>
      </Jumbotron> */}

      {/* <CardImage className="img-fluid" src={image1} /> */}

      {/* <Parallax bgImage={image1} strength={1000}>
        <div className="z-depth-4" style={{ height: 400 }}>
        </div>
      </Parallax>

      <div style={{ margin: "-11em 1em 0 1em" }}>
        <Col sm="12" >
          <Card body className="text-center" style={{padding: '4.25rem'}}>
            <h4 className="font-weight-bold"><strong>March for Our Lives</strong></h4>
            <h6 className="font-weight-bold indigo-text ">March 31st 2018</h6>
            <p className="grey-text">Lrem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem perspiciatis voluptatum a, quo nobis, non commodi quia repellendus
             sequi nulla voluptatem dicta reprehenderit, placeat laborum ut beatae ullam suscipit veniam.
          </p>
          </Card>
        </Col>
      </div> */}

      {/* <ProjectPageTest /> */}


    </div>



  );
}
export default TestPage;