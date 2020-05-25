class Timer {
  constructor(callback) {
    this.times = [];
    this.function = callback;
  }

  time = (step, finalSize) => {
    for (let i = 0; i < finalSize; i += step) {
      var array = this.makeArray([...Array(i).keys()], i);
      let shuffled = this.shuffle(array);
      let start = performance.now();
      this.function(shuffled);
      let end = performance.now();
      let time = end - start;
      this.addTimes(this.times, i, time);
    }
  };

  timeOnesAndZeros = (step, finalSize) => {
    for (let i = 0; i < finalSize; i += step) {
      var array = this.makeArrayZerosAndOnes(i);
      let shuffled = this.shuffle(array);
      let start = performance.now();
      this.function(shuffled);
      let end = performance.now();
      let time = end - start;
      this.addTimes(this.times, i, time);
    }
  };

  timeWordArray = (step, finalSize) => {
    for (let i = 0; i < finalSize; i += step) {
      var array = this.makeArrayWords(i);
      let shuffled = this.shuffle(array);
      let start = performance.now();
      this.function(shuffled);
      let end = performance.now();
      let time = end - start;
      this.addTimes(this.times, i, time);
    }
  };

  addTimes = (array, size, time) => {
    array.push({ size: size, time: time });
  };

  shuffle = (input) => {
    if (
      this.function === sort ||
      this.function === sortOnesAndZeros ||
      this.function === differentSortOnesAndZeros
    ) {
      for (let i = input.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [input[i], input[j]] = [input[j], input[i]];
      }
    }
    return input;
  };

  makeArray = (input, i) => {
    let array = [...Array(i).keys()];
    if (
      this.function === myFindDuplicate ||
      this.function === otherFindDuplicate ||
      this.function === newFindDuplicate
    ) {
      for (let i = 0; i < array.length; i++) {
        input.push(array[i]);
      }
    }
    return input;
  };

  makeArrayZerosAndOnes = (i) => {
    let ones = [];
    let zeros = [];
    let half = i / 2;
    let array = [...Array(half).keys()];
    array.forEach((element) => {
      ones.push(1);
      zeros.push(0);
    });
    let finalArray = ones.concat(zeros);
    return finalArray;
  };

  makeArrayWords = (i) => {
    let words = [
      "one",
      "two",
      "two",
      "three",
      "three",
      "three",
      "four",
      "four",
      "four",
      "four",
    ];
    let wordArray = Array(i).fill(words);
    console.log(wordArray.flat());
  };
}
