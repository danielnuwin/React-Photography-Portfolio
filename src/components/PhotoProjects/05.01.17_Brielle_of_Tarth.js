{/*********
ProjectName: 05.01.17_Brielle_of_Tarth
Date: 05.01.17_Brielle_of_Tarth
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/05.01.17_Brielle_of_Tarth/Brielle-1.jpg'),
  title: "Brielle of Tarth",
  date: "May 1st, 2017",
  desc: "Brielle and Friends"
};

{/************************** Gallery Data *************************/ }
const imageArray = [];

for (var i = 1; i <= 23; i++) {
  const obj = {
    src: require('../../images/05.01.17_Brielle_of_Tarth/Brielle-' + i + '.jpg'),
    thumbnail: require('../../images/05.01.17_Brielle_of_Tarth/Brielle-' + i + '.jpg'),
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
