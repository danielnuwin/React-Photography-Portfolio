{/*********
ProjectName: 08.05.18_Wedding_Cbass_Becca
Date: 08.05.18_Wedding_Cbass_Becca
Location: Maui, Hawaii
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/08.05.18_Wedding_Cbass_Becca/Wedding_Cbass-2.jpg'),
  title: "Sebastian and Becca's Wedding",
  date: "August 5th, 2018",
  desc: "High School Sweet Hearts tie the knot in Maui, Hawaii"
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

for (var i = 1; i <= 33; i++) {
  const obj = {
    src: require('../../images/08.05.18_Wedding_Cbass_Becca/Wedding_Cbass-' + i + '.jpg'),
    thumbnail: require('../../images/08.05.18_Wedding_Cbass_Becca/Wedding_Cbass-' + i + '.jpg'),
    caption: '',
    category: ""
  }
  imageArray.push(obj);
}
{/*********************** Return Object Data ***********************/ }

const projectData = {
  imageArray: (imageArray),
  projectHeader: headerData
}

export default projectData;
