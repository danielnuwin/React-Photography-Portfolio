const shuffleArray = (array) => {
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

  export default shuffleArray;