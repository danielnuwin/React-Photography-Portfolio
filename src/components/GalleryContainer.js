import React, { Component } from 'react';
import './css/App.css'

//Import responsive gallery component 
import ResponseiveGallery from './ResponsiveGallery';
//import DEFAULT_IMAGES from './Images';
import { View } from 'mdbreact'

export default class GalleryContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imageArray: [],
      title: "",
      desc: "",
      showFilter: false,
      style: ""
    }
  }

  componentWillMount() {
    this.setState({
      imageArray: this.props.imageArray,
      title: this.props.Title,
      desc: this.props.Desc,
      showFilter: this.props.showFilter,
      style: this.props.style
    });
  }

  render() {
    // console.log("Temp: " + JSON.stringify(DEFAULT_IMAGES));
    const { imageArray, showFilter, style} = this.state;
    return (
      <div>
        {/* Remove Container if you want entire page gallery */}
        <View id="GalleryContainer" className={ style }>
          <section id="gallery">
            <ResponseiveGallery showFilter={showFilter} images={imageArray.map(({ src, thumbnail, caption, category }) => ({
              src,
              thumbnail,
              caption,
              category
            }))}
            />
          </section>
        </View>

      </div>

    )
  }
}

