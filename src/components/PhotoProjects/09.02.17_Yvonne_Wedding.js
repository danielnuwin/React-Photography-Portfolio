{/*********
ProjectName: Jason and Yvonne Wedding
Date:
Location: Half Moon Bay
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/09.09.17_Wedding_Wan_Chen/Wedding_WC-8.jpg'),
  title: "Jason and Yvonne's Wedding",
  date: "September 2nd, 2017",
  desc: "When you find love in the club"
};

{/************************** Gallery Data *************************/ }
const imageArray = [];

for (var i = 1; i <= 16; i++) {
  const obj = {
    src: require('../../images/09.09.17_Wedding_Wan_Chen/Wedding_WC-' + i + '.jpg'),
    thumbnail: require('../../images/09.09.17_Wedding_Wan_Chen/Wedding_WC-' + i + '.jpg'),
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
