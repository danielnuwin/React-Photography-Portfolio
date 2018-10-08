import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
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
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </Col>
                    </Row>
                </Container> */}
                {/* <hr/> */}
                {/* <div className="text-center py-3">
                    <ul className="list-unstyled list-inline mb-0">
                        <li className="list-inline-item">
                            <h5 className="mb-1">Register for free</h5>
                        </li>
                        <li className="list-inline-item"><a href="#" className="btn btn-danger btn-rounded">Sign up!</a></li>
                    </ul>
                </div> */}
                {/* <hr/> */}
                <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb mx-1"><i className="fa fa-facebook"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-tw mx-1"><i className="fa fa-twitter"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-gplus mx-1"><i className="fa fa-google-plus"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-li mx-1"><i className="fa fa-linkedin"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-dribbble mx-1"><i className="fa fa-dribbble"> </i></a></li>
                    </ul>
                </div>
                <div className="footer-copyright text-center py-3">
                   
                </div>
            </Footer>
        );
    }
}

export default FooterPage;