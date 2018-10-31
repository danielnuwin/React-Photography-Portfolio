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
// import InfiniteScroll from 'react-infinite-scroller'

class ResponsiveGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      imageArray: [],
      showFilter: false,
    };

    //Lightbox
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);

    //Image Control
    this.renderGallery = this.renderGallery.bind(this);
    this.filterImage = this.filterImage.bind(this);

    this.cursorStyle = { cursor: "pointer" };
    this.renderFilter = this.renderFilter.bind(this);
    this.showThumbnailBanner = this.showThumbnailBanner.bind(this);

  }
  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    // console.log("length: " + this.state.imageArray.length)
    // console.log("current image: " + this.state.currentImage)
    //Stops from going to next index when reached end of array
    if ((this.state.currentImage + 1) < this.state.imageArray.length) {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    }
  }

  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }

  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;
    this.gotoNext();
  }

  // Show Banner only if on features page
  showThumbnailBanner(obj) {
    if (this.props.location.pathname === '/') {
      return (
        <div className="stripe light">
          <div>
            <p>{obj.caption}</p>
            <p><i className="fa fa-calendar date" aria-hidden="true"> October 5th, 2018</i></p>
          </div>
        </div>
      );
    }
  }

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
                // onClick={(e) => this.openLightbox(i, e)}
                src={obj.thumbnail}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div style={this.cursorStyle} className="mask flex-center rgba-white-light" onClick={(e) => this.openLightbox(i, e)}>
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
    // this.update();
    const imagesCopy = this.props.images;
    const newArray = imagesCopy.filter(function (img) {
      let searchValue = img.category;
      return searchValue.indexOf(filter) !== -1;
    });

    if (filter === "*") {
      this.setState({ imageArray: imagesCopy });
      //this.renderGallery(imagesCopy); //Removed because setting state renders imageArrary so no need to recall this method.
    }
    else {
      // console.log('before currentState = ' + JSON.stringify(this.state.imageArray)); // State is delayed
      this.setState({ imageArray: newArray });//Should rerender for animation bc it already exists in filter
      //this.renderGallery(newArray); //Removed because setting state renders imageArrary so no need to recall this method.
      // console.log('after currentState = ' + JSON.stringify(this.state.imageArray)); // State is delayed

    }
  }

  update() {
    console.log('update currentState = ' + JSON.stringify(this.state.imageArray)); // State is delayed
    this.setState({ imageArray: [] });
  }

  renderFilter(showFilter) {
    console.log("Filter: " + showFilter);
    const cursorStyle = { cursor: "pointer" };

    if (showFilter) {
      return (
        <Tabs id="Tab" defaultTab="one" className="GalleryContainer">
          <TabList className="TabList" style={{ border: 'none', margin: '2em 0 1em 0em' }}>
            <Tab style={this.cursorStyle} tabFor="one" onClick={() => this.filterImage("*")}>All</Tab>
            <Tab style={this.cursorStyle} tabFor="two" onClick={() => this.filterImage("travel")}>Travel</Tab>
            <Tab style={this.cursorStyle} tabFor="three" onClick={() => this.filterImage("ppl")}>People</Tab>
            <Tab style={this.cursorStyle} tabFor="four" onClick={() => this.filterImage("urb")}>Urban & Street</Tab>
            <Tab style={this.cursorStyle} tabFor="five" onClick={() => this.filterImage("wed")}>Weddings</Tab>
            <Tab tabFor="six">
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
    this.setState({
      imageArray: this.props.images,
      showFilter: this.props.showFilter
    });
    console.log("componentWillMount");
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

    return (
      <div className="content page-section spad center">

        {this.renderFilter(this.state.showFilter)}
        {/* <LazyLoad> */}
        {this.renderGallery(this.state.imageArray)}
        {/* </LazyLoad> */}

        <Lightbox
          currentImage={this.state.currentImage}
          images={this.state.imageArray}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          showThumbnails={true}
          theme={this.props.theme}
          backdropClosesModal={true}
          width={2048}
        />
      </div>
    );
  }
}

ResponsiveGallery.propTypes = {
  images: PropTypes.array,
  showThumbnails: PropTypes.bool,
};

export default withRouter(ResponsiveGallery);