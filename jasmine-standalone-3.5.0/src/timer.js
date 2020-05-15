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

reverse = (input) => {
  input.reverse()
}

otherReverse = (input) => {
  let reverse = []
  for (let i = input.length; i > 0; i--) {
    reverse.push(input[i])
  }
  return reverse
}

sort = (input) => {
  input.sort()
}

last = (input) => {
  input.slice(-1)[0]
}

shuffle = (input) => {
  for (let i = input.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [input[i], input[j]] = [input[j], input[i]];
  }
}

otherShuffle = (input) => {
  input.sort(() => Math.random() - 0.5);
}

myFindDuplicate = (input) => {
  let counter = {}
  let duplicates = []

  input.forEach((element) => {
    if (counter[element] === undefined) {
      counter[element] = 1
    } else {
      counter[element] += 1
      if (counter[element] === 2) {
        duplicates.push(element)
      }
    }
  })
  return duplicates
}

otherFindDuplicate = (input) => {
  let uniq = [...new Set(input)]
  return uniq
}

newOtherFindDuplicate = (arr) => {
  var hashTable = [];
  var dups = [];

  for (var i = 0; i < arr.length; i++) {
    if (hashTable[arr[i].toString()] === undefined) {
      hashTable[arr[i].toString()] = true;
    }
    else { dups.push(arr[i]); }

  }

  return dups;
}







