{/*********
ProjectName: 11.12.17_Boardwalk_Kristina
Date: 11.12.17_Boardwalk_Kristina
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/11.12.17_Boardwalk_Kristina/Kristina-10.jpg'),
  title: "Kristina at the Boardwalk",
  date: "November 27th, 2017",
  desc: "Athleticism at its finest"
};

{/************************** Gallery Data *************************/ }
const imageArray = [];

for (var i = 1; i <= 11; i++) {
  const obj = {
    src: require('../../images/11.12.17_Boardwalk_Kristina/Kristina-' + i + '.jpg'),
    thumbnail: require('../../images/11.12.17_Boardwalk_Kristina/Kristina-' + i + '.jpg'),
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
