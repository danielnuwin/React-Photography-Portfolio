// const imageArray = [];

// for (var i = 1; i < 20; i++) {
//   let obj = {};
//   obj = {
//     src: require('../images/img_' + i + '.jpg'),
//     thumbnail: require('../images/img_' + i + '.jpg'),
//     caption: 'Image 1',
//     category: "Port"
//   };
//   imageArray.push(obj);
//   //console.log(JSON.stringify(obj));
// }
//console.log("ima: " +JSON.stringify(imageArray));
//export default imageArray;


function shuffleArray(array) {
  let i = array.length - 1;
  let tempArray = array;

  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    tempArray[i] = tempArray[j];
    tempArray[j] = temp;
  }
  return tempArray;
}

//export default shuffleArray(imageArray);


const imageArray = [
  {
    //https://www.dropbox.com/s/z75y39zwxlqc9rg/port_1.jpg?dl=0
    src: require('../../images/img_10.jpg'),
    thumbnail: require('../../images/img_10.jpg'),
    caption: 'Kristie @ Alviso, California',
    category: "Port"
  }
];

export default shuffleArray(imageArray);