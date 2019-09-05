{/*********
ProjectName: 09.01.19_Ninaksy
Date: 09.01.19
Location: San Jose, Ca
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/09.01.19_Ninasky/Ninasky-12.jpg'),
  title: "Nina Sky",
  date: "September 1st, 2019",
  desc: "Nina Sky Performing at Sonido Clash in San Jose, CA"
};

{/************************** Gallery Data *************************/ }
const imageArray = [];

for (var i = 1; i <= 64; i++) {
  const obj = {
    src: require('../../images/09.01.19_Ninasky/Ninasky-' + i + '.jpg'),
    thumbnail: require('../../images/09.01.19_Ninasky/Ninasky-' + i + '.jpg'),
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
