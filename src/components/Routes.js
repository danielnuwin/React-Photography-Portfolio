import React from "react";
import { createHashHistory } from "history";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// ******** ComponentRoutes ******** //
import App from "./App";
import Home from './Home'
import GalleryContainer from './GalleryContainer';
import BlogPage from './BlogPage'
import Slideshow from './Slideshow';
import AboutPage from './AboutPage'
import TestPage from './TestPage'
import ProjectHeader from './Projects/ProjectHeader'
import ProjectContainer from './Projects/ProjectContainer'

// ******** Project Routes ******** //
import AllProjectsConfig from './PhotoProjects/All_Projects_Config'
import Laruen_Lychee from './PhotoProjects/10.04.18_Laruen_Lychee'
import Wedding_Wan_Chen from './PhotoProjects/09.02.17_Yvonne_Wedding'
import Wedding_Cbass_Becca from './PhotoProjects/08.05.18_Wedding_Cbass_Becca'
import Lauren_Night_Shoot from './PhotoProjects/05.21.18_Lauren_Night_Shoot'
import Urban_SF from './PhotoProjects/08.18.18_Urban_SF'
import Boardwalk_Kristina from './PhotoProjects/11.12.17_Boardwalk_Kristina'
import Grad_Suzzane from './PhotoProjects/06.12.18_Gad_Suzzane'
import Lilly_LinkedIn from './PhotoProjects/10.15.17_Lilly_LinkedIn'
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
      <Route path="/about" component={AboutPage} />
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
      <Route exact path="/wedding_wan_chen" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={Wedding_Wan_Chen.projectHeader}
          imageArray={Wedding_Wan_Chen.imageArray}
          renderType="gallery"
        // style={"container containerMarginTopProjects"}
        />
      }
      />
      <Route exact path="/wedding_cbass_becca" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={Wedding_Cbass_Becca.projectHeader}
          imageArray={Wedding_Cbass_Becca.imageArray}
          renderType="gallery"
        // style={"container containerMarginTopProjects"}
        />
      }
      />
      <Route exact path="/lauren_night_shoot" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={Lauren_Night_Shoot.projectHeader}
          imageArray={Lauren_Night_Shoot.imageArray}
          renderType="gallery"
        // style={"container containerMarginTopProjects"}
        />
      }
      />
      <Route exact path="/urban_sf" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={Urban_SF.projectHeader}
          imageArray={Urban_SF.imageArray}
          renderType="gallery"
        // style={"container containerMarginTopProjects"}
        />
      }
      />
      <Route exact path="/boardwalk_kristina" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={Boardwalk_Kristina.projectHeader}
          imageArray={Boardwalk_Kristina.imageArray}
          renderType="gallery"
        // style={"container containerMarginTopProjects"}
        />
      }
      />
      <Route exact path="/grad_suzzane" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={Grad_Suzzane.projectHeader}
          imageArray={Grad_Suzzane.imageArray}
          renderType="gallery"
        // style={"container containerMarginTopProjects"}
        />
      }
      />
      <Route exact path="/lilly_linkedin" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={Lilly_LinkedIn.projectHeader}
          imageArray={Lilly_LinkedIn.imageArray}
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