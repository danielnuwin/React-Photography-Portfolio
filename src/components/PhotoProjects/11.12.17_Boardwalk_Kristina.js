{/*********
ProjectName: 11.12.17_Boardwalk_Kristina
Date: 11.12.17_Boardwalk_Kristina
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/11.12.17_Boardwalk_Kristina/Boardwalk_Kristina-10.jpg'),
  title: "Kristina at the Boardwalk",
  date: "November 27th, 2017",
  desc: "Athleticism at its finest"
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

for (var i = 1; i <= 11; i++) {
  const obj = {
    src: require('../../images/11.12.17_Boardwalk_Kristina/Boardwalk_Kristina-' + i + '.jpg'),
    thumbnail: require('../../images/11.12.17_Boardwalk_Kristina/Boardwalk_Kristina-' + i + '.jpg'),
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
