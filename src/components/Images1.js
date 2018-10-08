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
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Doreen in SF',
    category: "One"
  }, {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Kristie @ Campbell, California',
    category: "Wed"
  }, {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Lilly @ Cuptertino, California',
    category: "Port"
  }, {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Maui Wedding',
    category: "Port"
  }, {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Maui Wedding',
    category: "Wed"
  }
  , {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Maui Wedding',
    category: "Wed"
  }, {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Maui Wedding',
    category: "Wed"
  }, {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Maui Wedding',
    category: "Wed"
  }, {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Maui Wedding',
    category: "Wed"
  }, {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Maui Wedding',
    category: "Port"
  }, {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Maui Wedding',
    category: "Wed"
  }, {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Image 1',
    category: "Wed"
  }, {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    thumbnail: 'https://www.dropbox.com/s/0vpgtrzphjlp08c/IMG_7003-2.jpg?raw=1',
    caption: 'Image 1',
    category: "One"
  }
];

export default shuffleArray(imageArray);