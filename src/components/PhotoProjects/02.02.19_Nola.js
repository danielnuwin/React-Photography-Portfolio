{/*********
ProjectName: 02.02.19_Nola
Date: 
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/02.02.19_Nola/Nola-4.jpg'),
  title: "New Orleans 2019",
  date: "Feb 2-5th, 2019",
  desc: "No Superbowl, No Problem"
};

{/************************** Gallery Data *************************/ }
const imageArray = [];

for (var i = 1; i <= 60; i++) {
  const obj = {
    src: require('../../images/02.02.19_Nola/Nola-' + i + '.jpg'),
    src: require('../../images/02.02.19_Nola/Nola-' + i + '.jpg'),
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
