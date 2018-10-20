{/*********
Date:        Project: 
-----------------------------------------
08.05.18     Lauren & Lychee

**********/ }

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: "https://www.dropbox.com/s/05znwgdjf1haqo8/IMG_3732.jpg?raw=1",
  title: "All Projects",
  date: "2017 - Present",
  desc: "Snapshots through the Years"
};

{/************************** Project Data *************************/ }

const imageArray = [
  {
    title: "Lauren and Lychee",
    date: "October 4th, 2018",
    coverImage: require('../../images/slider6.jpg'),
    link: "/laurenlychee",
    bannerStyle: "dark"
  }, {
    title: "Urban San Francisco",
    date: "August 8th, 2018",
    coverImage: require('../../images/08.18.18_Urban_SF/SF-18.jpg'),
    link: "/urban_sf",
    bannerStyle: "dark"
  }, {
    title: "Cbass + Becca Wedding",
    date: "August 5th, 2018",
    coverImage: require('../../images/08.05.18_Wedding_Cbass_Becca/Wedding-15.jpg'),
    link: "/wedding_cbass_becca",
    bannerStyle: "light"
  }, {
    title: "Suzzane's Graduation",
    date: "June 12th, 2018",
    coverImage: require('../../images/06.12.18_Gad_Suzzane/Grad-8.jpg'),
    link: "/grad_suzzane",
    bannerStyle: "light"
  }, {
    title: "Lauren at the Pier",
    date: "May 21st, 2018",
    coverImage: "https://www.dropbox.com/s/701kdhgfgup7668/IMG_3612.jpg?raw=1",
    link: "/lauren_night_shoot",
    bannerStyle: "light"
  }, {
    title: "Kristina at the Boardwalk",
    date: "November 27th, 2017",
    coverImage: require('../../images/11.12.17_Boardwalk_Kristina/Boardwalk_Kristina-1.jpg'),
    link: "/boardwalk_kristina",
    bannerStyle: "dark"
  }, {
    title: "Lilly's LinkedIn Headshots",
    date: "October 15th, 2017",
    coverImage: require('../../images/10.15.17_Lilly_LinkedIn/Lilly_LinkedIn-3.jpg'),
    link: "/lilly_linkedin",
    bannerStyle: "dark"
  }, {
    title: "Wan + Chen Wedding",
    date: "September 2nd, 2017",
    coverImage: require('../../images/img_6.jpg'),
    link: "/wedding_wan_chen",
    bannerStyle: "light"
  }
];

{/*********************** Return Object Data ***********************/ }

const projectData = {
  imageArray: imageArray,
  projectHeader: headerData
}

export default projectData;