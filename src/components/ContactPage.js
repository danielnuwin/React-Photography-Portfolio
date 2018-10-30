import React, { Component } from 'react';
import { Container, Row, Col, Mask, Fa, View, Button } from 'mdbreact';
import './css/App.css'

const ContactPage = () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });    // console.log("*******Lazy Load*******");
    return (
        <Container id="aboutpage" className="marginTop3">
            <h2 className="h1-responsive font-weight-bold text-center">Want to Chat? </h2>
            <hr className="" />

            <Row>
                <Col lg="5">
                    <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                        <img className="img-fluid" src={require("../images/About_Page/about2.jpg")} alt="Sample image" />
                        <a><Mask overlay="white-slight" /></a>
                    </View>
                </Col>
                
                <Col lg="7">
                    <a className="blue-text"><h6 className="font-weight-bold mb-3"><Fa icon="hand-spock-o" className="pr-2"></Fa>Me</h6></a>
                  
                    <h3 className="font-weight-bold mb-3 p-0"><strong>Contact me at: </strong></h3>

                    <h4>Email: <strong>  danielnuwin@gmail.com </strong></h4>
                    <h4>Instagram: <strong>  @danielnuwin</strong></h4>
                </Col>
                
            </Row>
        </Container>
    );
}
export default ContactPage;