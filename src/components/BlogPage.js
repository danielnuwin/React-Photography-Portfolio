import React, { Component } from 'react';
import { Container, Row, Col, Mask, Fa, View, Button } from 'mdbreact';

const BlogPage = () => {
  return (
    <Container id="blogpage">
      <hr className="my-5" />

      <h2 className="h1-responsive font-weight-bold text-center my-5">Recent posts</h2>
      <p className="text-center w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Row>
        <Col lg="5">
          <View className="rounded z-depth-4 mb-lg-0 mb-4 hoverable" hover waves>
            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" alt="Sample image" />
            <a><Mask overlay="white-slight" /></a>
          </View>
        </Col>
        <Col lg="7">
          <a className="green-text"><h6 className="font-weight-bold mb-3"><Fa icon="cutlery" className="pr-2"></Fa>Food</h6></a>
          <h3 className="font-weight-bold mb-3 p-0"><strong>Title of the news</strong></h3>
          <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis debitis.</p>
          <p>by <a><strong>Carine Fox</strong></a>, 19/08/2018</p>
          <Button color="success" size="md" className="waves-light ">Read more</Button>
        </Col>
      </Row>
      <hr className="my-5" />
      <Row>
        <Col lg="7">
          <a className="pink-text">
            <h6 className="font-weight-bold mb-3">
              <Fa icon="image" className="pr-2"></Fa>Lifestyle
            </h6>
          </a>
          <h3 className="font-weight-bold mb-3 p-0"><strong>Title of the news</strong></h3>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
          <p>by <a><strong>Carine Fox</strong></a>, 14/08/2018</p>
          <Button color="pink" size="md" className="mb-lg-0 mb-4 waves-light">Read more</Button>
        </Col>
        <Col lg="5">
          <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg" alt="Sample image" />
            <a><Mask overlay="white-slight" /></a>
          </View>
        </Col>
      </Row>
      <hr className="my-5" />
      <Row>
        <Col lg="5">
          <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg" alt="Sample image" />
            <a><Mask overlay="white-slight" /></a>
          </View>
        </Col>
        <Col lg="7">
          <a className="indigo-text"><h6 className="font-weight-bold mb-3"><Fa icon="suitcase" className="pr-2"></Fa>Food</h6></a>
          <h3 className="font-weight-bold mb-3 p-0"><strong>Title of the news</strong></h3>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia sit amet.</p>
          <p>by <a><strong>Carine Fox</strong></a>, 11/08/2018</p>
          <Button color="indigo" size="md" className="waves-light ">Read more</Button>
        </Col>
      </Row>
    </Container>
  );
}
export default BlogPage;