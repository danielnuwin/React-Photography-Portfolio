{/*********
ProjectName: 10.11.18_Wedding_AA
Date: 10.11.18_Wedding_AA
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/10.11.18_Wedding_AA/Wedding_AA_Cover.jpg'),
  title: "Antoine + Ayton Wedding",
  date: "October 11th, 2018",
  desc: "Viva Las Vegas"
};

{/************************** Gallery Data *************************/ }
const imageArray = [];

for (var i = 1; i <= 29; i++) {
  const obj = {
    src: require('../../images/10.11.18_Wedding_AA/Wedding_AA-' + i + '.jpg'),
    thumbnail: require('../../images/10.11.18_Wedding_AA/Wedding_AA-' + i + '.jpg'),
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
