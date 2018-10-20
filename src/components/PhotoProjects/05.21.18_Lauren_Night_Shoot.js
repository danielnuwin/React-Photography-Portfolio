{/*********
ProjectName: 05.21.18_Lauren_Night_Shoot
Date: 05.21.18_Lauren_Night_Shoot
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/05.21.18_Lauren_Night_Shoot/Lauren_Night-2.jpg'),
  title: "Lauren SF Night Shoot",
  date: "May 21st, 2018",
  desc: "San Francisco By Night"
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

for (var i = 1; i <= 25; i++) {
  const obj = {
    src: require('../../images/05.21.18_Lauren_Night_Shoot/Lauren_Night-' + i + '.jpg'),
    thumbnail: require('../../images/05.21.18_Lauren_Night_Shoot/Lauren_Night-' + i + '.jpg'),
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
