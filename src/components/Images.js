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
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Doreen in SF',
    category: "One"
  }, {
    src: require('../images/img_2.jpg'),
    thumbnail: require('../images/img_2.jpg'),
    caption: 'Kristie @ Campbell, California',
    category: "Wed"
  }, {
    src: require('../images/img_8.jpg'),
    thumbnail: require('../images/img_8.jpg'),
    caption: 'Lilly @ Cuptertino, California',
    category: "Port"
  }, {
    src: require('../images/img_13.jpg'),
    thumbnail: require('../images/img_13.jpg'),
    caption: 'Maui Wedding',
    category: "Port"
  }, {
    src: require('../images/img_16.jpg'),
    thumbnail: require('../images/img_16.jpg'),
    caption: 'Maui Wedding',
    category: "Wed"
  }
  , {
    src: require('../images/img_16.jpg'),
    thumbnail: require('../images/img_16.jpg'),
    caption: 'Maui Wedding',
    category: "Wed"
  }, {
    src: require('../images/img_12.jpg'),
    thumbnail: require('../images/img_12.jpg'),
    caption: 'Maui Wedding',
    category: "Wed"
  }, {
    src: require('../images/img_17.jpg'),
    thumbnail: require('../images/img_17.jpg'),
    caption: 'Maui Wedding',
    category: "Wed"
  }, {
    src: require('../images/img_4.jpg'),
    thumbnail: require('../images/img_4.jpg'),
    caption: 'Maui Wedding',
    category: "Wed"
  }, {
    src: require('../images/img_18.jpg'),
    thumbnail: require('../images/img_18.jpg'),
    caption: 'Maui Wedding',
    category: "Port"
  }, {
    src: require('../images/img_5.jpg'),
    thumbnail: require('../images/img_5.jpg'),
    caption: 'Maui Wedding',
    category: "Wed"
  }, {
    src: require('../images/img_19.jpg'),
    thumbnail: require('../images/img_19.jpg'),
    caption: 'Image 1',
    category: "Wed"
  }, {
    src: require('../images/img_6.jpg'),
    thumbnail: require('../images/img_6.jpg'),
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: require('../images/img_7.jpg'),
    thumbnail: require('../images/img_7.jpg'),
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: require('../images/img_8.jpg'),
    thumbnail: require('../images/img_8.jpg'),
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: require('../images/img_9.jpg'),
    thumbnail: require('../images/img_9.jpg'),
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: require('../images/img_1.jpg'),
    thumbnail: require('../images/img_1.jpg'),
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: require('../images/img_12.jpg'),
    thumbnail: require('../images/img_12.jpg'),
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: require('../images/img_15.jpg'),
    thumbnail: require('../images/img_15.jpg'),
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: require('../images/img_17.jpg'),
    thumbnail: require('../images/img_17.jpg'),
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: require('../images/img_18.jpg'),
    thumbnail: require('../images/img_18.jpg'),
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: require('../images/img_19.jpg'),
    thumbnail: require('../images/img_19.jpg'),
    caption: 'Image 1',
    category: "One"
  }
];

export default shuffleArray(imageArray);