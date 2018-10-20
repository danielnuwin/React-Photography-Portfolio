{/*********
ProjectName: 06.12.18_Gad_Suzzane
Date: 06.12.18_Gad_Suzzane
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/06.12.18_Gad_Suzzane/Grad-29.jpg'),
  title: "Suzzane's Graduation",
  date: "June 12th, 2018",
  desc: "Master's in Psychology"
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
    src: require('../../images/06.12.18_Gad_Suzzane/Grad-' + i + '.jpg'),
    thumbnail: require('../../images/06.12.18_Gad_Suzzane/Grad-' + i + '.jpg'),
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
