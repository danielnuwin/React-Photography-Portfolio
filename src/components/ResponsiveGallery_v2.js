import React, { Component } from 'react';
import Lightbox from 'react-images';
import PropTypes from 'prop-types';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ScrollAnimation from 'react-animate-on-scroll';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarNav, NavItem, NavLink, Mask, View } from 'mdbreact';
import './css/App.css'
// import Animated from "react-animated-css"
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import LazyLoad from 'react-lazy-load';
import shuffle from './configs/shuffle'

// import InfiniteScroll from 'react-infinite-scroller'

class ResponsiveGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageArray: [],
      images: [],
      showFilter: false,
      photoIndex: 0,
      isOpen: false,
    };

    //Image Control
    this.renderGallery = this.renderGallery.bind(this);
    this.filterImage = this.filterImage.bind(this);

    this.cursorStyle = { cursor: "pointer" };
    this.renderFilter = this.renderFilter.bind(this);
    this.setImages = this.setImages.bind(this);

  }
  //************************ LightBox *************************//

  //END************************ LightBox *************************//

  renderGallery(images) {
    console.log("*****Lazy Load Responsive Gallery******");
    if (!images) {
      return;
    }
    const gallery = images.map((obj, i) => {
      return (
        //Old animation
        //<Animated key={i} animationIn="zoomIn" animationOut="fadeOut" animationInDelay={i * 40} isVisible={true} animateOnMount={true}>       
        <LazyLoad key={i}>
          <ScrollAnimation delay={i * 20} animateIn="fadeIn" animateOnce={true} >
            <div className={`view overlay zoom ` + obj.category} data-category={obj.category}>
              <img alt=""
                className=""
                src={obj.src}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div style={this.cursorStyle} className="mask flex-center rgba-white-light" onClick={() => this.setState({ isOpen: true })}>
                {/* Show Banner only on Feature Page */}
                {/* {this.showThumbnailBanner(obj)} */}
              </div>
            </div>
          </ScrollAnimation>
        </LazyLoad>
      );
    });

    return (
      //This allows grid view on mobile
      <ResponsiveMasonry columnsCountBreakPoints={{ 750: 1, 750: 2, 900: 3 }} >
        <Masonry gutter="2px">
          {gallery}
        </Masonry>
      </ResponsiveMasonry>
    );
  }

  filterImage(filter) {
    const imagesCopy = this.props.images;
    // const newArray = imagesCopy.filter(function (img) {
    //   let searchValue = img.category;
    //   return searchValue.indexOf(filter) !== -1;
    // });

    //Filter Images
    const newArray = imagesCopy.filter(function (img) {
      let searchValue = img.category; //Array of Categories
      return searchValue.includes(filter);
    });

    this.setState({ imageArray: newArray });

    // Deprecated, no longer need as featured state is set in componentWillMount
    // if (filter === "*") {
    //   this.setState({ imageArray: newArray });
    //   //this.renderGallery(imagesCopy); //Removed because setting state renders imageArrary so no need to recall this method.
    // }
    // else {
    //   // console.log('before currentState = ' + JSON.stringify(this.state.imageArray)); // State is delayed
    //   this.setState({ imageArray: newArray });//Should rerender for animation bc it already exists in filter
    //   //this.renderGallery(newArray); //Removed because setting state renders imageArrary so no need to recall this method.
    // }
  }

  renderFilter(showFilter) {
    const cursorStyle = { cursor: "pointer" };

    if (showFilter) {
      return (
        <Tabs id="Tab" defaultTab="one" className="GalleryContainer">
          <TabList className="TabList" style={{ border: 'none', margin: '2em 0 1em 0em' }}>
            <Tab style={cursorStyle} tabFor="one" onClick={() => this.filterImage("*")}>Featured</Tab>
            <Tab style={cursorStyle} tabFor="two" onClick={() => this.filterImage("travel")}>Travel</Tab>
            <Tab style={cursorStyle} tabFor="three" onClick={() => this.filterImage("ppl")}>People</Tab>
            <Tab style={cursorStyle} tabFor="four" onClick={() => this.filterImage("urb")}>Urban & Street</Tab>
            <Tab style={cursorStyle} tabFor="five" onClick={() => this.filterImage("wed")}>Weddings</Tab>
            {/* <Tab style={this.cursorStyle} tabFor="six" onClick={() => this.filterImage("all")}>All</Tab> */}
            <Tab tabFor="sevon">
              <Dropdown>
                <DropdownToggle className="brand colorBlackLink" nav caret>Projects</DropdownToggle>
                <DropdownMenu>
                  <NavbarNav>
                    <NavItem className="nav-format">
                      <NavLink className="brand nav-format" to="/projects">All Projects</NavLink>
                      {/* <NavLink className="brand nav-format" to="/laurenlychee"> > Lauren Lychee</NavLink> */}
                    </NavItem>
                  </NavbarNav>
                </DropdownMenu>
              </Dropdown>
            </Tab>
          </TabList>
        </Tabs>
      );
    }
  }

  //Will Set State before initial Render
  componentWillMount() {
    //For Featured Gallery
    if (this.props.location.pathname === '/') {
      const featArray = this.props.images.filter(function (img) {
        let searchValue = img.category; //Array of Categories
        return searchValue.includes('*');
      });
      this.setState({
        imageArray: shuffle(featArray),
        showFilter: this.props.showFilter
      });
    }
    // For Project Galleries
    else {
      this.setState({
        imageArray: this.props.images,
        showFilter: this.props.showFilter
      });
    }

    this.setImages(this.props.images);
  }

  setImages(images) {
    if (!images) {
      return;
    }
    const lightBoxImages = []
    for (let image = 0; image <= images.length; image++) {
      lightBoxImages.push(image.src);
    };
    this.setState({
      images: lightBoxImages
    });
    console.log('lightbox images: ' + JSON.stringify(lightBoxImages))
  }

  //Scroll To Hide Header
  componentDidMount() {
    if (!this.state.showFilter) {
      window.scroll({
        top: 350,
        behavior: "smooth"
      });
      // console.log("RESPONSIVE GALLERY: window did mount");
    }
  }

  render() {
    const cursorStyle = { cursor: "pointer" };
    const { photoIndex, isOpen, images } = this.state;
    // console.log('image array: ' + JSON.stringify(images))
    return (
      <div className="content page-section spad center">

        {this.renderFilter(this.state.showFilter)}
        {/* <LazyLoad> */}
        {this.renderGallery(this.state.imageArray)}
        {/* </LazyLoad> */}

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    );
  }
}

ResponsiveGallery.propTypes = {
  imageArray: PropTypes.array,
  showThumbnails: PropTypes.bool,
};

export default withRouter(ResponsiveGallery);