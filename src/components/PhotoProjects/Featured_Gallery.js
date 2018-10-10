{/*********
ProjectName: Featured Photos
Date: 2017 - Present
Location: Everywhere
Notes:
**********/ }
import shuffle from '../configs/shuffle'

{/************************** Header Data *************************/ }

const headerData = {
  bgImage: "https://www.dropbox.com/s/hdza66lvwlk3xam/IMG_3603.jpg?raw=1",
  title: "Featured Portfolio",
  date: "2017-Present",
  desc: "Ecclectic Everything"
};

{/************************** Gallery Data *************************/ }

const imageArray = [
  {
    src: require('../../images/img_10.jpg'),
    thumbnail: require('../../images/img_10.jpg'),
    caption: 'Kristie @ Alviso, California',
    category: "Port"
  }, {
    src: require('../../images/img_2.jpg'),
    thumbnail: require('../../images/img_2.jpg'),
    caption: 'Kristie @ Campbell, California',
    category: "Wed"
  }, {
    src: require('../../images/img_8.jpg'),
    thumbnail: require('../../images/img_8.jpg'),
    caption: 'Lilly @ Cuptertino, California',
    category: "Port"
  }, {
    src: require('../../images/img_13.jpg'),
    thumbnail: require('../../images/img_13.jpg'),
    caption: 'Maui Wedding',
    category: "Port"
  }, {
    src: require('../../images/img_16.jpg'),
    thumbnail: require('../../images/img_16.jpg'),
    caption: 'Maui Wedding',
    category: "Wed"
  }
  , {
    src: require('../../images/img_16.jpg'),
    thumbnail: require('../../images/img_16.jpg'),
    caption: 'Maui Wedding',
    category: "Wed"
  }, {
    src: require('../../images/img_12.jpg'),
    thumbnail: require('../../images/img_12.jpg'),
    caption: 'Maui Wedding',
    category: "Wed"
  }, {
    src: require('../../images/img_17.jpg'),
    thumbnail: require('../../images/img_17.jpg'),
    caption: 'Maui Wedding',
    category: "Wed"
  }, {
    src: require('../../images/img_4.jpg'),
    thumbnail: require('../../images/img_4.jpg'),
    caption: 'Maui Wedding',
    category: "Wed"
  }, {
    src: require('../../images/img_18.jpg'),
    thumbnail: require('../../images/img_18.jpg'),
    caption: 'Maui Wedding',
    category: "Port"
  }, {
    src: require('../../images/img_5.jpg'),
    thumbnail: require('../../images/img_5.jpg'),
    caption: 'Maui Wedding',
    category: "Wed"
  }, {
    src: require('../../images/img_19.jpg'),
    thumbnail: require('../../images/img_19.jpg'),
    caption: 'Image 1',
    category: "Wed"
  }, {
    src: require('../../images/img_6.jpg'),
    thumbnail: require('../../images/img_6.jpg'),
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: require('../../images/img_7.jpg'),
    thumbnail: require('../../images/img_7.jpg'),
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: require('../../images/img_8.jpg'),
    thumbnail: require('../../images/img_8.jpg'),
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: require('../../images/img_9.jpg'),
    thumbnail: require('../../images/img_9.jpg'),
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: require('../../images/img_1.jpg'),
    thumbnail: require('../../images/img_1.jpg'),
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: require('../../images/img_12.jpg'),
    thumbnail: require('../../images/img_12.jpg'),
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: require('../../images/img_15.jpg'),
    thumbnail: require('../../images/img_15.jpg'),
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: require('../../images/img_17.jpg'),
    thumbnail: require('../../images/img_17.jpg'),
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: require('../../images/img_18.jpg'),
    thumbnail: require('../../images/img_18.jpg'),
    caption: 'Image 1',
    category: "Urb"
  }, {
    src: require('../../images/img_19.jpg'),
    thumbnail: require('../../images/img_19.jpg'),
    caption: 'Image 1',
    category: "One"
  }
];

{/*********************** Return Object Data ***********************/ }

const projectData = {
  imageArray: shuffle(imageArray),
  projectHeader: headerData
}

export default projectData;
