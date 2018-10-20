{/*********
ProjectName:08.18.18_SF_Urban
Date: 08.18.18_SF_Urban
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/08.18.18_Urban_SF/SF-16.jpg'),
  title: "Urban Exploring in San Francisco",
  date: "August 8th, 2018",
  desc: "First time shooting in SF!"
};

{/************************** Gallery Data *************************/ }
const imageArray = [
  // {
  //   src: require('../../images/slider6.jpg'),
  //   thumbnail: require('../../images/slider6.jpg'),
  //   caption: 'Lauren',
  //   category: "Port"
  // }, {
  //   src: require('../../images/slider7.jpg'),
  //   thumbnail: require('../../images/slider7.jpg'),
  //   caption: 'Lychee ',
  //   category: "Wed"
  // }
];

for (var i = 1; i <= 29; i++) {
  const obj = {
    src: require('../../images/08.18.18_Urban_SF/SF-' + i + '.jpg'),
    thumbnail: require('../../images/08.18.18_Urban_SF/SF-' + i + '.jpg'),
    caption: '',
    category: ""
  }
  imageArray.push(obj);
}
{/*********************** Return Object Data ***********************/ }

const projectData = {
  imageArray: shuffle(imageArray),
  projectHeader: headerData
}

export default projectData;
