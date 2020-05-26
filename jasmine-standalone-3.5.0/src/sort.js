class Sort {
  constructor() {
    this.timerSort = new Timer(sort);
    this.timerOtherSort = new Timer(quickSort);
    this.timerSelectionSort = new Timer(selectionSort);
    this.timerInsertionSort = new Timer(insertionSort);
    this.timerMergeSort = new Timer(mergeSort);
    this.data = [];
    this.labels = [];
  }

  generateLabels = (step, finalSize) => {
    this.timerSort.time(step, finalSize);
    this.timerSort.times.forEach((iteration) => {
      this.labels.push(iteration.size);
    });
  };

  generateSortChartData = () => {
    this.generateLabels(1000, 10000);
    this.generateSortData(1000, 10000);
    this.generateOtherSortData(1000, 10000);
    this.generateSelectionSortData(1000, 10000);
    this.generateInsertionSortData(1000, 10000);
    this.generateMergeSortData(1000, 10000);
    this.renderChart(this.labels, this.generateDataSets(this.data));
  };

  generateSortData = (step, finalSize) => {
    this.timerSort.time(step, finalSize);
    let sortData = [];
    this.timerSort.times.forEach((iteration) => {
      sortData.push(iteration.time);
    });
    this.data.push(sortData);
  };

  generateOtherSortData = (step, finalSize) => {
    this.timerOtherSort.time(step, finalSize);
    let otherSortData = [];
    this.timerOtherSort.times.forEach((iteration) => {
      otherSortData.push(iteration.time);
    });
    this.data.push(otherSortData);
  };

  generateSelectionSortData = (step, finalSize) => {
    this.timerSelectionSort.time(step, finalSize);
    let selectionSortData = [];
    this.timerSelectionSort.times.forEach((iteration) => {
      selectionSortData.push(iteration.time);
    });
    this.data.push(selectionSortData);
  };

  generateInsertionSortData = (step, finalSize) => {
    this.timerInsertionSort.time(step, finalSize);
    let insertionSortData = [];
    this.timerInsertionSort.times.forEach((iteration) => {
      insertionSortData.push(iteration.time);
    });
    this.data.push(insertionSortData);
  };

  generateMergeSortData = (step, finalSize) => {
    this.timerMergeSort.time(step, finalSize);
    let mergeSortData = [];
    this.timerMergeSort.times.forEach((iteration) => {
      mergeSortData.push(iteration.time);
    });
    this.data.push(mergeSortData);
  };

  generateDataSets = (data) => {
    let names = [
      "Sort",
      "Quick Sort",
      "Selection Sort",
      "Insertion Sort",
      "Merge Sort",
    ];
    let colors = ["#dc3644", "#ffc0cb", "#40e0d0", "#32cd32", "#ffff00"];
    let dataArray = [];
    names.forEach((label, i) => {
      dataArray.push({
        label: label,
        data: data[i],
        fill: false,
        hidden: false,
        borderColor: colors[i],
        borderWidth: 3,
        pointBorderWidth: 0,
        pointStyle: "rectRounded",
        pointRadius: 4,
        pointHitRadius: 5,
        pointHoverRadius: 5,
        pointBackgroundColor: colors[i],
        hoverBackgroundColor: colors[i],
      });
    });
    return dataArray;
  };

  renderChart = (labels, data) => {
    var ctx = document.getElementById("mySortChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: data,
      },
      options: {
        title: {
          display: true,
          text: "Sort",
          fontSize: 20,
          fontStyle: "bold",
        },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Elements in Array",
              },
              gridLines: {
                display: false,
                drawBorder: true,
              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Milliseconds",
              },
            },
          ],
        },
        legend: {
          labels: {
            fontSize: 16,
            fontStyle: "bold",
            usePointStyle: true,
          },
        },
      },
    });
  };
}

sort = (input) => {
  input.sort((a, b) => a - b);
};

quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  let pivot = array[0];
  let low = [];
  let high = [];
  for (let i = 1; i < array.length; i++) {
    array[i] < pivot ? low.push(array[i]) : high.push(array[i]);
  }
  return quickSort(low).concat(pivot, quickSort(high));
};

selectionSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;
};

insertionSort = (inputArr) => {
  let length = inputArr.length;
  for (let i = 1; i < length; i++) {
    let key = inputArr[i];
    let j = i - 1;
    while (j >= 0 && inputArr[j] > key) {
      inputArr[j + 1] = inputArr[j];
      j = j - 1;
    }
    inputArr[j + 1] = key;
  }
  return inputArr;
};

mergeSort = (array) => {
  if (array.length < 2) return array;
  let mid = Math.floor(array.length / 2);
  let sortedLeftArray = mergeSort(array.slice(0, mid));
  let sortedRightArray = mergeSort(array.slice(mid, array.length));
  return merge(sortedLeftArray, sortedRightArray);
  function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return [...result, ...left, ...right];
  }
};
