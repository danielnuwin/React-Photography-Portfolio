{/*********
ProjectName: 2018_Europe
Date: 2018_Europe
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: "https://www.dropbox.com/s/618qitswbj0nlgt/IMG_0799.jpg?raw=1",
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

//Travel Array
const travelArray = [
  {
    src: require('../../images/Featured_images/travel-1.jpg'),
    thumbnail: require('../../images/Featured_images/travel-1.jpg'),
    caption: 'Somewhere in Oregon',
    category: "travel"
  }, {
    src: require('../../images/Featured_images/travel-2.jpg'),
    thumbnail: require('../../images/Featured_images/travel-2.jpg'),
    caption: 'San Francisco Bay Bridge',
    category: "travel"
  }
];

//People Array
const pplArray = [{
  src: require('../../images/Featured_images/ppl-1.jpg'),
  thumbnail: require('../../images/Featured_images/ppl-1.jpg'),
  caption: 'Brielle in Phuket, Thailand',
  category: "ppl"
}, {
  src: require('../../images/Featured_images/ppl-2.jpg'),
  thumbnail: require('../../images/Featured_images/ppl-2.jpg'),
  caption: 'Doreen in San Francisco',
  category: "ppl"
}, {
  src: require('../../images/Featured_images/ppl-3.jpg'),
  thumbnail: require('../../images/Featured_images/ppl-3.jpg'),
  caption: 'March for Our Lives Protest in SF',
  category: "ppl"
}, {
  src: require('../../images/Featured_images/ppl-4.jpg'),
  thumbnail: require('../../images/Featured_images/ppl-4.jpg'),
  caption: 'March for Our Lives Protest in SF',
  category: "ppl"
}, {
  src: require('../../images/Featured_images/ppl-5.jpg'),
  thumbnail: require('../../images/Featured_images/ppl-5.jpg'),
  caption: 'March for Our Lives Protest in SF',
  category: "ppl"
}, {
  src: require('../../images/Featured_images/ppl-6.jpg'),
  thumbnail: require('../../images/Featured_images/ppl-6.jpg'),
  caption: 'Lauren and Lychee',
  category: "ppl"
}, {
  src: require('../../images/Featured_images/ppl-7.jpg'),
  thumbnail: require('../../images/Featured_images/ppl-7.jpg'),
  caption: 'Lauren and Lychee',
  category: "ppl"
}, {
  src: require('../../images/Featured_images/ppl-8.jpg'),
  thumbnail: require('../../images/Featured_images/ppl-8.jpg'),
  caption: 'Suzzanes Graduation',
  category: "ppl"
}, {
  src: require('../../images/Featured_images/ppl-9.jpg'),
  thumbnail: require('../../images/Featured_images/ppl-9.jpg'),
  caption: 'Lauren at Fishermans Warf',
  category: "ppl"
}
];
//Wedding Array
const weddingArray = [];

//Urban Array
const urbanArray = [];

//All Photos, concatonate all arrays
imageArray = [...travelArray, ...pplArray, ...weddingArray, ...urbanArray];

// console.log("arrayIMages: " + JSON.stringify(imageArray))
{/*********************** Return Object Data ***********************/ }

const projectData = {
  imageArray: shuffle(imageArray),
  projectHeader: headerData
}

export default projectData;
