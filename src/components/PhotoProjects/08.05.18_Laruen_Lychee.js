{/*********
ProjectName:
Date:
Location:
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/slider7.jpg'),
  title: "Lauren and Lychee",
  date: "October 5th, 2018",
  desc: "A Dog's Best Friend"
};

{/************************** Gallery Data *************************/ }
const imageArray = [
  {
    src: require('../../images/slider6.jpg'),
    thumbnail: require('../../images/slider6.jpg'),
    caption: 'Lauren',
    category: "Port"
  }, {
    src: require('../../images/slider7.jpg'),
    thumbnail: require('../../images/slider7.jpg'),
    caption: 'Lychee ',
    category: "Wed"
  }
];

{/*********************** Return Object Data ***********************/ }

const projectData = {
  imageArray: shuffle(imageArray),
  projectHeader: headerData
}

export default projectData;
