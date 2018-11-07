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
  desc: "Snapshots through the Years",
  // style: "TEST"
};

{/************************** Project Data *************************/ }

const imageArray = [
  {
    title: "Ginger's 1st Halloween",
    date: "October 2018",
    coverImage: require('../../images/10.24.18_Baby_Ginger/Ginger-Thumb.jpg'),
    link: "/baby_ginger", 
    category: "ppl",
    bannerStyle: "light"
  },{
    title: "Antoine + Ayton Wedding",
    date: "October 2018",
    coverImage: require('../../images/10.11.18_Wedding_AA/Wedding_AA-Thumb.jpg'),
    link: "/wedding_aa",
    category: "wed",
    bannerStyle: "dark"
  }, {
    title: "Lauren and Lychee",
    date: "October 2018",
    coverImage: require('../../images/10.04.18_Lauren_Lychee/Lauren_Lychee-21.jpg'),
    link: "/laurenlychee",
    category: "ppl",
    bannerStyle: "light"
  }, {
    title: "Urban San Francisco",
    date: "August 2018",
    coverImage: require('../../images/08.18.18_Urban_SF/SF-25.jpg'),
    link: "/urban_sf",
    category: "urb",
    bannerStyle: "dark"
  }, {
    title: "Sebastian + Becca Wedding",
    date: "August 2018",
    coverImage: require('../../images/08.05.18_Wedding_Cbass_Becca/Wedding_Cbass-15.jpg'),
    link: "/wedding_cbass_becca",
    category: "wed",
    bannerStyle: "light"
  }, {
    title: "Suzzane's Graduation",
    date: "June 2018",
    coverImage: require('../../images/06.12.18_Gad_Suzzane/Grad-8.jpg'),
    link: "/grad_suzzane",
    category: "ppl",
    bannerStyle: "dark"
  }, {
    title: "Lauren at the Pier",
    date: "May 2018",
    coverImage: require('../../images/05.21.18_Lauren_Night_Shoot/Lauren_Night-12.jpg'),
    link: "/lauren_night_shoot",
    category: "ppl",
    bannerStyle: "light"
  }, {
    title: "Europe 2018",
    date: "April-May 2018",
    coverImage: require('../../images/2018_Europe/Europe-36.jpg'),
    link: "/europe_2018",
    category: "travel",
    bannerStyle: "dark"
  }, {
    title: "March 4 Our Lives SF",
    date: "March 2018",
    coverImage: require('../../images/03.24.18_March_4_Our_Lives/M4OL-27.jpg'),
    link: "/march_for_our_lives",
    category: "urb",
    bannerStyle: "light"
  }, {
    title: "Kristina at the Boardwalk",
    date: "November 2017",
    coverImage: require('../../images/11.12.17_Boardwalk_Kristina/Kristina-1.jpg'),
    link: "/boardwalk_kristina",
    category: "ppl",
    bannerStyle: "dark"
  }, {
    title: "Lilly's LinkedIn Headshots",
    date: "October 2017",
    coverImage: require('../../images/10.15.17_Lilly_LinkedIn/Lilly_LinkedIn-Thumb.jpg'),
    link: "/lilly_linkedin",
    category: "ppl",
    bannerStyle: "light"
  }, {
    title: "Yvonne + Jason Wedding",
    date: "September 2017",
    coverImage: require('../../images/09.09.17_Wedding_Wan_Chen/Wedding_WC-8.jpg'),
    link: "/wedding_wan_chen",
    category: "wed",
    bannerStyle: "dark"
  }, 
  // {
  //   title: "Brielle of Tarth",
  //   date: "May 1st, 2017",
  //   coverImage: require('../../images/05.01.17_Brielle_of_Tarth/Brielle-cover.jpg'),
  //   link: "/brielle_of_tarth",
  //   bannerStyle: "light"
  // },
   {
    title: "South American Adventures",
    date: "Summer 2017",
    coverImage: require('../../images/2017_South_America/South-29.jpg'),
    link: "/2017_South_America",
    category: "travel",
    bannerStyle: "light"
  },
  {
    title: "S.E.Asia Backpacking",
    date: "Spring 2017",
    coverImage: require('../../images/2017_S.E.A_Backpacking/Asia-Thumb.jpg'),
    link: "/2017_Asia",
    category: "travel",
    bannerStyle: "dark"
  }
];

{/*********************** Return Object Data ***********************/ }

const projectData = {
  imageArray: imageArray,
  projectHeader: headerData
}

export default projectData;