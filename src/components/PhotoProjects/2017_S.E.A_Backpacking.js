{/*********
ProjectName: 2017_S.E.A_Backpacking
Date: 2017_S.E.A_Backpacking
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/2017_S.E.A_Backpacking/Asia-Cover.jpg'),
  title: "South East Asia Backpacking",
  date: "Spring 2017",
  desc: "First Time Solo Backpacking through Thailand, Cambodia, Vietnam, & Hong Kong."
};

{/************************** Gallery Data *************************/ }
const imageArray = [];

for (var i = 1; i <= 47; i++) {
  const obj = {
    src: require('../../images/2017_S.E.A_Backpacking/Asia-' + i + '.jpg'),
    thumbnail: require('../../images/2017_S.E.A_Backpacking/Asia-' + i + '.jpg'),
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
