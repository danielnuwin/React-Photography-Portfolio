{/*********
ProjectName: 12.15.18_Wedding_WW
Date: 
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/12.15.18_Wedding_WW/Wedding_WW-15.jpg'),
  title: "Sister's Double Wedding",
  date: "December 15th, 2018",
  desc: "Two Sisters have a beautiful combined wedding"
};

{/************************** Gallery Data *************************/ }
const imageArray = [];

for (var i = 1; i <= 61; i++) {
  const obj = {
    src: require('../../images/12.15.18_Wedding_WW/Wedding_WW-' + i + '.jpg'),
    src: require('../../images/12.15.18_Wedding_WW/Wedding_WW-' + i + '.jpg'),
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
