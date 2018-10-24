{/*********
ProjectName: 10.11.18_Wedding_AA
Date: 10.11.18_Wedding_AA
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/10.11.18_Wedding_AA/Wedding_AA-1.jpg'),
  title: "Antoine + Ayton Wedding",
  date: "October 11th, 2018",
  desc: "Viva Las Vegas"
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
    src: require('../../images/10.11.18_Wedding_AA/Wedding_AA-' + i + '.jpg'),
    thumbnail: require('../../images/10.11.18_Wedding_AA/Wedding_AA-' + i + '.jpg'),
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
