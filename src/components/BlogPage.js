import React from 'react';
import { Container, Row, Col, Card, CardBody, Mask, Fa, View, Badge } from 'mdbreact';

const BlogPage = () => {
  const newsStyle = { borderBottom: '1px solid #e0e0e0', marginBottom: '1.5rem' }
  return (
    <Container style={{ maxWidth: '80%' }} className="marginTop3">
      <h2 className="h1-responsive font-weight-bold  text-center"> My Brain Farts</h2>
      <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
                Just random spirts of things going on in my noggin. Mostly random, sometimes serious, on
        oncassion funny, but hopefully pretty much introspective. Most of my life experiences
        stem from all my years of traveling, putting myself in really uncomfortable situations.
      </p>
      <Row>
        <Col md="12" lg="6">
          <div className="mb-4">
            <View hover rounded className="z-depth-1-half mb-4">
              <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Slides/1.jpg" alt="Sample image" />
              <a>
                <Mask overlay="white-slight" className="waves-light" />
              </a>
            </View>
            <div className="d-flex justify-content-between">
              <a className="deep-orange-text"><h6 className="font-weight-bold"><Fa icon="cutlery" className="pr-2" />Culinary</h6></a>
              <p className="font-weight-bold dark-grey-text"><Fa icon="clock-o" className="pr-2" />27/02/2018</p>
            </div>
            <h3 className="font-weight-bold dark-grey-text mb-3 p-0"><a>My Vegas Vacation</a></h3>
            <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">Viva Las Vegas </p>
          </div>
        </Col>

        <Col md="12" lg="6">
          <div style={newsStyle}>
            <Row>
              <Col md="3">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg" alt="Sample image" />
                  <a>
                    <Mask overlay="white-slight" className="waves-light" />
                  </a>
                </View>
              </Col>
              <Col md="9">
                <p className="font-weight-bold dark-grey-text">26/02/2018</p>
                <div className="d-flex justify-content-between">
                  <Col size="11" className="text-truncate pl-0 mb-3">
                    <a className="dark-grey-text">Something I ate Last years</a>
                  </Col>
                  <a><Fa icon="angle-double-right" /></a>
                </div>
              </Col>
            </Row>
          </div>

          <div style={newsStyle}>
            <Row>
              <Col md="3">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg" alt="Sample image" />
                  <a>
                    <Mask overlay="white-slight" className="waves-light" />
                  </a>
                </View>
              </Col>
              <Col md="9">
                <p className="font-weight-bold dark-grey-text">25/02/2018</p>
                <div className="d-flex justify-content-between">
                  <Col size="11" className="text-truncate pl-0 mb-3">
                  <a className="dark-grey-text">Something I ate Last years</a>
                  </Col>
                  <a><Fa icon="angle-double-right" /></a>
                </div>
              </Col>
            </Row>
          </div>

          <div style={newsStyle}>
            <Row>
              <Col md="3">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/87.jpg" alt="Sample image" />
                  <a>
                    <Mask overlay="white-slight" className="waves-light" />
                  </a>
                </View>
              </Col>
              <Col md="9">
                <p className="font-weight-bold dark-grey-text">24/03/2018</p>
                <div className="d-flex justify-content-between">
                  <Col size="11" className="text-truncate pl-0 mb-3">
                  <a className="dark-grey-text">Something I ate Last years</a>
                  </Col>
                  <a><Fa icon="angle-double-right" /></a>
                </div>
              </Col>
            </Row>
          </div>

          <div className="mb-4">
            <Row>
              <Col md="3">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" alt="Sample image" />
                  <a>
                    <Mask overlay="white-slight" className="waves-light" />
                  </a>
                </View>
              </Col>
              <Col md="9">
                <p className="font-weight-bold dark-grey-text">23/02/2018</p>
                <div className="d-flex justify-content-between">
                  <Col size="11" className="text-truncate pl-0 mb-3">
                  <a className="dark-grey-text">Something I ate Last years</a>
                  </Col>
                  <a><Fa icon="angle-double-right" /></a>
                </div>
              </Col>
            </Row>
          </div>

        </Col>
      </Row>
    </Container>
  );
}

export default BlogPage;