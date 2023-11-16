{/*********
ProjectName: 10.18-19.19.SCMF19
Date: 10/18-19/19
Location: Santa Cruz, Ca
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/09.01.19_Ninasky/Ninasky-12.jpg'),
  title: "Santa Cruz Music Festival",
  date: "October 18-19, 2019",
  desc: "Jaiwolf, Hippie Sabbotage, Autograf, Funk Hunters, Minnesota"
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
