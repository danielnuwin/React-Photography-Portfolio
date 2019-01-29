{/*********
ProjectName: 01.26.19_JJ_Proposal
Date: 
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/01.26.19_JJ_Proposal/JJ-17.jpg'),
  title: "Jeremy & Jessica's Proposal",
  date: "January 26th, 2019",
  desc: "Proposal on Pigeon Point"
};

{/************************** Gallery Data *************************/ }
const imageArray = [];

for (var i = 1; i <= 52; i++) {
  const obj = {
    src: require('../../images/01.26.19_JJ_Proposal/JJ-' + i + '.jpg'),
    src: require('../../images/01.26.19_JJ_Proposal/JJ-' + i + '.jpg'),
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
