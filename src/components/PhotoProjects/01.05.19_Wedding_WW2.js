{/*********
ProjectName: 01.05.19_Wedding_WW2
Date: 
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/01.05.19_WW2/Wedding_WW-1.jpg'),
  title: "Amanda & Aymand Wedding",
  date: "January 5th, 2019",
  desc: ""
};

{/************************** Gallery Data *************************/ }
const imageArray = [];

for (var i = 1; i <= 42; i++) {
  const obj = {
    src: require('../../images/01.05.19_WW2/Wedding_WW-' + i + '.jpg'),
    src: require('../../images/01.05.19_WW2/Wedding_WW-' + i + '.jpg'),
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
