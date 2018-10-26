{/*********
Date:        Project: 
-----------------------------------------
08.05.18     Lauren & Lychee

**********/ }

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/All_Project_Header.jpg'),
  title: "All Projects",
  date: "2017 - Present",
  desc: "Snapshots through the Years"
};

{/************************** Project Data *************************/ }

const imageArray = [
  {
    title: "Ginger's 1st Halloween",
    date: "October 24th, 2018",
    coverImage: require('../../images/10.24.18_Baby_Ginger/Ginger-25.jpg'),
    link: "/baby_ginger",
    bannerStyle: "light"
  },{
    title: "Antoine + Ayton Wedding",
    date: "October 11th, 2018",
    coverImage: require('../../images/10.11.18_Wedding_AA/Wedding_AA_Cover.jpg'),
    link: "/wedding_aa",
    bannerStyle: "dark"
  }, {
    title: "Lauren and Lychee",
    date: "October 4th, 2018",
    coverImage: require('../../images/10.04.18_Lauren_Lychee/Lauren_Lychee-21.jpg'),
    link: "/laurenlychee",
    bannerStyle: "light"
  }, {
    title: "Urban San Francisco",
    date: "August 8th, 2018",
    coverImage: require('../../images/08.18.18_Urban_SF/SF-25.jpg'),
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
    bannerStyle: "dark"
  }, {
    title: "Lauren at the Pier",
    date: "May 21st, 2018",
    coverImage: require('../../images/05.21.18_Lauren_Night_Shoot/Lauren_Night-12.jpg'),
    link: "/lauren_night_shoot",
    bannerStyle: "light"
  }, {
    title: "Europe 2018",
    date: "April/May, 2018",
    coverImage: require('../../images/2018_Europe/Europe-38.jpg'),
    link: "/europe_2018",
    bannerStyle: "dark"
  }, {
    title: "March 4 Our Lives SF",
    date: "March 24th, 2018",
    coverImage: require('../../images/03.24.18_March_4_Our_Lives/M4OL-27.jpg'),
    link: "/march_for_our_lives",
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
    bannerStyle: "light"
  }, {
    title: "Wan + Chen Wedding",
    date: "September 2nd, 2017",
    coverImage: require('../../images/09.09.17_Wedding_Wan_Chen/Wedding_WC-8.jpg'),
    link: "/wedding_wan_chen",
    bannerStyle: "dark"
  }, {
    title: "Brielle of Tarth",
    date: "May 1st, 2017",
    coverImage: require('../../images/05.01.17_Brielle_of_Tarth/Brielle-cover.jpg'),
    link: "/brielle_of_tarth",
    bannerStyle: "light"
  }
];

{/*********************** Return Object Data ***********************/ }

const projectData = {
  imageArray: imageArray,
  projectHeader: headerData
}

export default projectData;