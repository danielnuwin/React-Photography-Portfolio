import React from "react";
import { createHashHistory } from "history";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// ******** ComponentRoutes ******** //
import App from "./App";
import Home from './Home'
import GalleryContainer from './GalleryContainer';
import BlogPage from './BlogPage'
import Slideshow from './Slideshow';
import TestPage from './TestPage'
import About from './About'
import ProjectHeader from './Projects/ProjectHeader'
import ProjectContainer from './Projects/ProjectContainer'

// ******** Project Routes ******** //
import proj1 from './PhotoProjects/Images.2';

const Routes = () => {
  var image1 = require('../images/slider2.jpg');
  var image2 = require('../images/slider7.jpg');
  var image3 = "https://www.dropbox.com/s/lsehi9w8ff8tmre/IMG_3612.jpg?raw=1";
 
  const headerData = {
    bgImage: image3,
    title: "All Projects",
    date: "September 10th, 2018",
    desc: "Test Description Dawgs"
  };
  const headerData2 = {
    bgImage: image2,
    title: "Lauren and Lychee",
    date: "October 5th, 2018",
    desc: "A Dog's Best Friend"
  };

  return (
    // <BrowserRouter>
    // Switch creates issues in routes, Fixes the issue of not rendering when url changes, maybe not anymore??
    // <Switch>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/template" component={GalleryContainer} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/testpage" component={TestPage} />
      <Route path="/slideshow" component={Slideshow} />
      <Route path="/about" component={About} />
      <Route path="/projects" render={() =>
        <ProjectContainer
          // imageArray={ImageArray}
          headerInfo={headerData}
          renderType="allprojects" />
      }
      />
      <Route exact path="/march" render={() =>
        <ProjectContainer
          showFilter={false}
          imageArray={proj1}
          headerInfo={headerData2}
          renderType="gallery" />
      }
      />
    </div>

    // </Switch>
    // </BrowserRouter>
  );
}

export default Routes;