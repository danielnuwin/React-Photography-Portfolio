{/*********
ProjectName: 10.24.18_Baby_Ginger
Date: 10.24.18_Baby_Ginger
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/10.24.18_Baby_Ginger/Ginger-16.jpg'),
  title: "Ginger Baby",
  date: "October 24th, 2018",
  desc: "Baby Ginger's first Hallowween"
};

{/************************** Gallery Data *************************/ }
const imageArray = [];

for (var i = 1; i <= 34; i++) {
  const obj = {
    src: require('../../images/10.24.18_Baby_Ginger/Ginger-' + i + '.jpg'),
    thumbnail: require('../../images/10.24.18_Baby_Ginger/Ginger-' + i + '.jpg'),
    caption: '',
    category: ""
  }
  imageArray.push(obj);
}
{/*********************** Return Object Data ***********************/ }

const projectData = {
  imageArray:  (imageArray),
  projectHeader: headerData
}

export default projectData;
