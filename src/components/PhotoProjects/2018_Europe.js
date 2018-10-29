{/*********
ProjectName: 2018_Europe
Date: 2018_Europe
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/2018_Europe/Europe-36.jpg'),
  title: "Europe 2018",
  date: "April 10 - May 7, 2018",
  desc: "Norway -> Germany -> Czech Republic -> Italy -> Croatia"
};

{/************************** Gallery Data *************************/ }
const imageArray = [];

for (var i = 1; i <= 42; i++) {
  const obj = {
    src: require('../../images/2018_Europe/Europe-' + i + '.jpg'),
    thumbnail: require('../../images/2018_Europe/Europe-' + i + '.jpg'),
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
