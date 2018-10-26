import React, { Component } from 'react'
import BackgroundSlideshow from 'react-background-slideshow'
import { View } from 'mdbreact';
// import image1 from '../images/slide1.jpg'
// import image2 from '../images/slide2.jpg'
// import image3 from '../images/slide3.jpg'
// import image4 from '../images/slide4.jpg'

export default class Slideshow extends Component {
  render() {
    return (
      <div>
        <BackgroundSlideshow animationDelay={5000} images={[image1, image2, image3, image4]} />
          <h1>Hello world</h1>
      </div>
    )
  }
}