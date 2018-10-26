{/*********
ProjectName: 03.24.18_March_4_Our_Lives
Date: 03.24.18_March_4_Our_Lives
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/03.24.18_March_4_Our_Lives/M4OL-19.jpg'),
  title: "March for our Lives SF",
  date: "March 24th, 2018",
  desc: "Protest on Gun Violence in San Francisco"
};

{/************************** Gallery Data *************************/ }
const imageArray = [];

for (var i = 1; i <= 34; i++) {
  const obj = {
    src: require('../../images/03.24.18_March_4_Our_Lives/M4OL-' + i + '.jpg'),
    thumbnail: require('../../images/03.24.18_March_4_Our_Lives/M4OL-' + i + '.jpg'),
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
