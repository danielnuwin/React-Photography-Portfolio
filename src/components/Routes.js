import React from "react";
import { createHashHistory } from "history";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// ******** ComponentRoutes ******** //
import App from "./App";
import Home from './Home'
import GalleryContainer from './GalleryContainer';
import BlogPage from './BlogPage'
import AboutPage from './AboutPage'
import TestPage from './TestPage'
import ProjectHeader from './Projects/ProjectHeader'
import ProjectContainer from './Projects/ProjectContainer'
import ContactPage from './ContactPage'
import ContactCard from './ContactCard'

// ******** Project Routes ******** //
import AllProjectsConfig from './PhotoProjects/All_Projects_Config'
import AboutMeConfig from './PhotoProjects/About_Me_Config'
import Laruen_Lychee from './PhotoProjects/10.04.18_Laruen_Lychee'
import Wedding_Wan_Chen from './PhotoProjects/09.02.17_Yvonne_Wedding'
import Wedding_Cbass_Becca from './PhotoProjects/08.05.18_Wedding_Cbass_Becca'
import Wedding_WW from './PhotoProjects/12.15.18_Wedding_WW'
import Wedding_WW2 from './PhotoProjects/01.05.19_Wedding_WW2'
import Lauren_Night_Shoot from './PhotoProjects/05.21.18_Lauren_Night_Shoot'
import Urban_SF from './PhotoProjects/08.18.18_Urban_SF'
import MarchForOurLives from './PhotoProjects/03.24.18_March_4_Our_Lives'
import Boardwalk_Kristina from './PhotoProjects/11.12.17_Boardwalk_Kristina'
import Grad_Suzzane from './PhotoProjects/06.12.18_Gad_Suzzane'
import Lilly_LinkedIn from './PhotoProjects/10.15.17_Lilly_LinkedIn'
import Brille_of_Tarth from './PhotoProjects/05.01.17_Brielle_of_Tarth'
import Wedding_AA from './PhotoProjects/10.11.18_Wedding_AA'
import Europe_2018 from './PhotoProjects/2018_Europe'
import Baby_Ginger from './PhotoProjects/10.24.18_Baby_Ginger'
import SEA_Backpacking from './PhotoProjects/2017_S.E.A_Backpacking'
import South_America from './PhotoProjects/2017_South_America'
import JJ_Proposal from './PhotoProjects/01.26.19_JJ_Proposal'
import Nola from './PhotoProjects/02.02.19_Nola'
import Ninasky from './PhotoProjects/09.01.19_Ninasky'

const Routes = () => {

  // console.log("ROUTE: " + JSON.stringify(Laruen_Lychee.imageArray))
  return (
    // <BrowserRouter>
    // Switch creates issues in routes, Fixes the issue of not rendering when url changes, maybe not anymore??
    // <Switch>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/testpage" component={TestPage} />
      <Route path="/contact" component={ContactPage}></Route>
      <Route path="/contactcard" component={ContactCard}></Route>
      {/* <Route path="/about" component={AboutPage} /> */}
      <Route path="/about" render={() =>
        <ProjectContainer
          imageArray={AboutMeConfig.imageArray}
          headerInfo={AboutMeConfig.projectHeader}
          renderType="aboutme" />
      }
      />
      <Route path="/projects" render={() =>
        <ProjectContainer
          imageArray={AllProjectsConfig.imageArray}
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
      <Route exact path="/march_for_our_lives" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={MarchForOurLives.projectHeader}
          imageArray={MarchForOurLives.imageArray}
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
      <Route exact path="/brielle_of_tarth" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={Brille_of_Tarth.projectHeader}
          imageArray={Brille_of_Tarth.imageArray}
          renderType="gallery"
        // style={"container containerMarginTopProjects"}
        />
      }
      />
      <Route exact path="/wedding_aa" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={Wedding_AA.projectHeader}
          imageArray={Wedding_AA.imageArray}
          renderType="gallery"
        // style={"container containerMarginTopProjects"}
        />
      }
      />
      <Route exact path="/europe_2018" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={Europe_2018.projectHeader}
          imageArray={Europe_2018.imageArray}
          renderType="gallery"
        // style={"container containerMarginTopProjects"}
        />
      }
      />
      <Route exact path="/baby_ginger" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={Baby_Ginger.projectHeader}
          imageArray={Baby_Ginger.imageArray}
          renderType="gallery"
        // style={"container containerMarginTopProjects"}
        />
      }
      />
      <Route exact path="/2017_Asia" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={SEA_Backpacking.projectHeader}
          imageArray={SEA_Backpacking.imageArray}
          renderType="gallery"
        // style={"container containerMarginTopProjects"}
        />
      }
      />
      <Route exact path="/2017_South_America" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={South_America.projectHeader}
          imageArray={South_America.imageArray}
          renderType="gallery"
        // style={"container containerMarginTopProjects"}
        />
      }
      />
      <Route exact path="/wedding_ww" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={Wedding_WW.projectHeader}
          imageArray={Wedding_WW.imageArray}
          renderType="gallery"
        // style={"container containerMarginTopProjects"}
        />
      }
      />
      <Route exact path="/wedding_ww2" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={Wedding_WW2.projectHeader}
          imageArray={Wedding_WW2.imageArray}
          renderType="gallery"
        // style={"container containerMarginTopProjects"}
        />
      }
      />
      <Route exact path="/jj_proposal" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={JJ_Proposal.projectHeader}
          imageArray={JJ_Proposal.imageArray}
          renderType="gallery"
        // style={"container containerMarginTopProjects"}
        />
      }
      />
      <Route exact path="/nola2019" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={Nola.projectHeader}
          imageArray={Nola.imageArray}
          renderType="gallery"
        // style={"container containerMarginTopProjects"}
        />
      }
      />
      <Route exact path="/ninasky2019" render={() =>
        <ProjectContainer
          showFilter={false}
          headerInfo={Ninasky.projectHeader}
          imageArray={Ninasky.imageArray}
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