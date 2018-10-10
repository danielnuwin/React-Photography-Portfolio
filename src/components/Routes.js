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
import AllProjectsConfig from './PhotoProjects/All_Projects_Config'
import Laruen_Lychee from './PhotoProjects/08.05.18_Laruen_Lychee'

const Routes = () => {

  // console.log("ROUTE: " + JSON.stringify(Laruen_Lychee.imageArray))
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
          headerInfo={AllProjectsConfig.projectHeader}
          renderType="allprojects" />
      }
      />
      <Route exact path="/laurenlychee" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={Laruen_Lychee.projectHeader}
          imageArray={Laruen_Lychee.imageArray}
          renderType="gallery" 
          // style={"container containerMarginTopProjects"}
          />
      }
      />
    </div>

    // </Switch>
    // </BrowserRouter>
  );
}

export default Routes;