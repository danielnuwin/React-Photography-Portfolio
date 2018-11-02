{/*********
ProjectName: 2018_Europe
Date: 2018_Europe
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/Portfolio_Header.jpg'),
  title: "Featured Portfolio",
  date: "2017 - Present",
  desc: "Ecclectic Everything",
  style: "featured-header-mobile"
};

{/************************** Gallery Data *************************/ }
let imageArray = [];


{/************************** Travel Data *************************/ }
const travelArray = [];
const featTravel = [1,2,3,4,5,8,9,10,14,16,18,19,23,25,28];

for (var i = 1; i <= 29; i++) {
  const obj = {
    src: require('../../images/Featured_Portfolio/Travel/Travel-' + i + '.jpg'),
    thumbnail: require('../../images/Featured_Portfolio/Travel/Travel-' + i + '.jpg'),
    caption: '',
    category: ["travel"]
  }
  if(featTravel.includes(i)){
    obj['category'].push('*')
  }
  travelArray.push(obj);
}

{/************************** People Data *************************/ }
const peopleArray = [];
const featPeople = [1,2,3,5,6,15,18,19,23,25];

for (var i = 1; i <= 25; i++) {
  const obj = {
    src: require('../../images/Featured_Portfolio/People/People-' + i + '.jpg'),
    thumbnail: require('../../images/Featured_Portfolio/People/People-' + i + '.jpg'),
    caption: '',
    category: ["ppl"]
  }
  if(featPeople.includes(i)){
    obj['category'].push('*')
  }
  peopleArray.push(obj);
}
{/************************** Wedding Data *************************/ }
const weddingArray = [];
const featWedding = [1,4,10,12,13];

for (var i = 1; i <= 19; i++) {
  const obj = {
    src: require('../../images/Featured_Portfolio/Wedding/Wedding-' + i + '.jpg'),
    thumbnail: require('../../images/Featured_Portfolio/Wedding/Wedding-' + i + '.jpg'),
    caption: '',
    category: ["wed"]
  }
  if(featWedding.includes(i)){
    obj['category'].push('*')
  }
  weddingArray.push(obj);
}

{/************************** Urban Data *************************/ }
const urbanArray = [];
const featUrban = [1,3,4,6,8,13];

for (var i = 1; i <= 22; i++) {
  const obj = {
    src: require('../../images/Featured_Portfolio/Urban/Urban-' + i + '.jpg'),
    thumbnail: require('../../images/Featured_Portfolio/Urban/Urban-' + i + '.jpg'),
    caption: '',
    category: ["urb"]
  }
  if(featUrban.includes(i)){
    obj['category'].push('*')
  }
  urbanArray.push(obj);
}

{/*********************** Return Object Data ***********************/ }
imageArray = [...(travelArray), ...(peopleArray), ...weddingArray, ...(urbanArray)];
// console.log("arrayIMages: " + JSON.stringify(imageArray))

const projectData = {
  imageArray: (imageArray),
  projectHeader: headerData
}

export default projectData;
