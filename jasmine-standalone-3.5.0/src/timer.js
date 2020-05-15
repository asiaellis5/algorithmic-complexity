class Timer {

  constructor(callback) {
    this.times = []
    this.function = callback
  }

  time = (step, finalSize) => {
    for (let i = 0; i < finalSize; i += step) {
      var array = this.makeArray([...Array(i).keys()], i)
      let shuffled = this.shuffle(array)
      let start = performance.now();
      this.function(shuffled)
      let end = performance.now()
      let time = end - start
      this.addTimes(this.times, i, time)
    }
  }

  addTimes = (array, size, time) => {
    array.push({ size: size, time: time })
  }

  shuffle = (input) => {
    if (this.function === sort) {
      for (let i = input.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [input[i], input[j]] = [input[j], input[i]];
      }
    }
    return input
  }

  makeArray = (input, i) => {
    let array = [...Array(i).keys()]
    if (this.function === myFindDuplicate || this.function === otherFindDuplicate) {
      for (let i = 0; i < array.length; i++) {
        input.push(array[i])
      }
    }
    return input
  }

}








