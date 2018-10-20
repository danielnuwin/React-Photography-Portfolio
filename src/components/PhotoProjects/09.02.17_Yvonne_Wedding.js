{/*********
ProjectName: Jason and Yvonne Wedding
Date:
Location: Half Moon Bay
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/wedding_wan_chen/wedding_8.jpg'),
  title: "Jason and Yvonne's Wedding",
  date: "September 2nd, 2017",
  desc: "When you find love in the club"
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

for (var i = 1; i <= 17; i++) {
  const obj = {
    src: require('../../images/09.09.17_Wedding_Wan_Chen/Wedding_WC-' + i + '.jpg'),
    thumbnail: require('../../images/09.09.17_Wedding_Wan_Chen/Wedding_WC-' + i + '.jpg'),
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
