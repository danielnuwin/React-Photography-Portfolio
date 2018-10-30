{/*********
ProjectName:2017_South_America
Date: 2017_South_America
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/2017_South_America/South-2.jpg'),
  title: "South American Adventures",
  date: "Summer 2017",
  desc: "My Journey volunteering in Brazil and exploration of Peru and Argentina. "
};

{/************************** Gallery Data *************************/ }
const imageArray = [];

for (var i = 1; i <= 37; i++) {
  const obj = {
    src: require('../../images/2017_South_America/South-' + i + '.jpg'),
    thumbnail: require('../../images/2017_South_America/South-' + i + '.jpg'),
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
