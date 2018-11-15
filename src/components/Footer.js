import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    render() {
        return (
            <Footer id="footer_anchor" color="stylish-color-dark" style={{ marginTop: "-3.5em !important" }} className="page-footer font-small pt-4 mt-4 pagefooter-margin">
                {/* <Container fluid className="text-center text-md-left">
                    <Row>
                    <Col md="6">
                        <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Footer Content</h5>
                        <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit.</p>
                    </Col>
                    <hr className="clearfix w-100 d-md-none"/>
                    <Col md="2">
                        <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </Col>
                    <hr className="clearfix w-100 d-md-none"/>
                    <Col md="2">
                        <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </Col>
                    <hr className="clearfix w-100 d-md-none"/>
                    <Col md="2">
                        <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://www.instagram.com/danielnuwin">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </Col>
                    </Row>
                </Container>
                <hr/> */}
                <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a href="https://www.instagram.com/danielnuwin" className="btn-floating btn-lg btn-fb mx-1" target="_blank"><i className="fa fa-instagram"> </i></a></li>
                        <li className="list-inline-item"><a href="https://soundcloud.com/danielnuwin" className="btn-floating btn-lg btn-tw"><i className="fa fa-soundcloud"></i></a></li>
                        {/* <li className="list-inline-item"><a className="btn-floating btn-lg btn-fb mx-1" target="_blank"><i className="fa fa-facebook-official"> </i></a></li> */}
                        <li className="list-inline-item"><a className="btn-floating btn-lg btn-li mx-1"><i className="fa fa-linkedin"> </i></a></li>
                        <li className="list-inline-item"><a href="https://github.com/danielnuwin" className="btn-floating btn-lg btn-gh mx-1"><i className="fa fa-github"> </i></a></li>
                    </ul>
                </div>
                <div className="footer-copyright text-center padding-top-3">
                        <p> Built with ReactJS</p>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;