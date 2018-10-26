{/*********
ProjectName: Lauren and Lychee
Date: 10.04.18
Location: Lauren's House
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/10.04.18_Lauren_Lychee/Lauren_Lychee-3.jpg'),
  title: "Lauren and Lychee",
  date: "October 4th, 2018",
  desc: "A Dog's Best Friend"
};

{/************************** Gallery Data *************************/ }
const imageArray = [];

for (var i = 1; i <= 39; i++) {
  const obj = {
    src: require('../../images/10.04.18_Lauren_Lychee/Lauren_Lychee-' + i + '.jpg'),
    thumbnail: require('../../images/10.04.18_Lauren_Lychee/Lauren_Lychee-' + i + '.jpg'),
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
