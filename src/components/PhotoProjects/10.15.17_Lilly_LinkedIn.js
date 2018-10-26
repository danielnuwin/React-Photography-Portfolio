{/*********
ProjectName: 10.15.17_Lilly_LinkedIn
Date: 10.15.17_Lilly_LinkedIn
Location: 
Notes:
**********/}

import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }
const headerData = {
  bgImage: require('../../images/10.15.17_Lilly_LinkedIn/Lilly_LinkedIn-cover.jpg'),
  title: "Lilly's LinkedIn Headshots",
  date: "October 15th, 2017",
  desc: "Lilly's LinkedIn Headshots"
};

{/************************** Gallery Data *************************/ }
const imageArray = [];

for (var i = 1; i <= 15; i++) {
  const obj = {
    src: require('../../images/10.15.17_Lilly_LinkedIn/Lilly_LinkedIn-' + i + '.jpg'),
    thumbnail: require('../../images/10.15.17_Lilly_LinkedIn/Lilly_LinkedIn-' + i + '.jpg'),
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
