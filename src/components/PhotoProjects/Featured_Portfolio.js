{/*********
ProjectName: 2018_Europe
Date: 2018_Europe
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/Featured_Portfolio/Travel/Travel-2.jpg'),
  title: "Featured Portfolio",
  date: "2017 - Present",
  desc: "Ecclectic Everything"
};

{/************************** Gallery Data *************************/ }
let imageArray = [];

// for (var i = 1; i <= 25; i++) {
//   const obj = {
//     src: require('../../images/Featured_images/feat_' + i + '.jpg'),
//     thumbnail: require('../../images/Featured_images/feat_' + i + '.jpg'),
//     caption: '',
//     category: ""
//   }
//   imageArray.push(obj);
// }

// Split Sections up and join all arrays
// Don't need to rename or have a copy of project images, just reference them to save space. 

{/************************** Travel Data *************************/ }
// const travelArray = [];
for (var i = 1; i <= 15; i++) {
  const obj = {
    src: require('../../images/Featured_Portfolio/Travel/Travel-' + i + '.jpg'),
    thumbnail: require('../../images/Featured_Portfolio/Travel/Travel-' + i + '.jpg'),
    caption: '',
    category: "travel"
  }
  imageArray.push(obj);
}

{/************************** People Data *************************/ }
for (var i = 1; i <= 25; i++) {
  const obj = {
    src: require('../../images/Featured_Portfolio/People/People-' + i + '.jpg'),
    thumbnail: require('../../images/Featured_Portfolio/People/People-' + i + '.jpg'),
    caption: '',
    category: "ppl"
  }
  imageArray.push(obj);
}
{/************************** Wedding Data *************************/ }
// const weddingArray = [];
for (var i = 1; i <= 16; i++) {
  const obj = {
    src: require('../../images/Featured_Portfolio/Wedding/Wedding-' + i + '.jpg'),
    thumbnail: require('../../images/Featured_Portfolio/Wedding/Wedding-' + i + '.jpg'),
    caption: '',
    category: "wedding"
  }
  imageArray.push(obj);
}

{/************************** Urban Data *************************/ }
// const urbanArray = [];
for (var i = 1; i <= 14; i++) {
  const obj = {
    src: require('../../images/Featured_Portfolio/Urban/Urban-' + i + '.jpg'),
    thumbnail: require('../../images/Featured_Portfolio/Urban/Urban-' + i + '.jpg'),
    caption: '',
    category: "urban"
  }
  imageArray.push(obj);
}
//All Photos, concatonate all arrays
// imageArray = [...travelArray, ...pplArray, ...weddingArray, ...urbanArray];

// console.log("arrayIMages: " + JSON.stringify(imageArray))
{/*********************** Return Object Data ***********************/ }

const projectData = {
  imageArray: shuffle(imageArray),
  projectHeader: headerData
}

export default projectData;
