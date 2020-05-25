class Sort {
  constructor() {
    this.timerSort = new Timer(sort);
    this.timerSortOnesAndZeros = new Timer(sortOnesAndZeros);
    this.timerSortOtherOnesAndZeros = new Timer(differentSortOnesAndZeros);
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
    this.generateLabels(10000, 100000);
    this.generateSortData(10000, 100000);
    this.generateSortOnesAndZerosData(10000, 100000);
    this.generateOtherSortOnesAndZerosData(10000, 100000);
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

  generateSortOnesAndZerosData = (step, finalSize) => {
    this.timerSortOnesAndZeros.timeOnesAndZeros(step, finalSize);
    let sortOnesAndZerosData = [];
    this.timerSortOnesAndZeros.times.forEach((iteration) => {
      sortOnesAndZerosData.push(iteration.time);
    });
    this.data.push(sortOnesAndZerosData);
  };

  generateOtherSortOnesAndZerosData = (step, finalSize) => {
    this.timerSortOtherOnesAndZeros.timeOnesAndZeros(step, finalSize);
    let sortOtherOnesAndZerosData = [];
    this.timerSortOtherOnesAndZeros.times.forEach((iteration) => {
      sortOtherOnesAndZerosData.push(iteration.time);
    });
    this.data.push(sortOtherOnesAndZerosData);
  };

  generateDataSets = (data) => {
    let names = ["Sort", "Sort Ones and Zeros", "Other Sort Ones and Zeros"];
    let colors = ["#dc3644", "#18a2b8", "#fbbd08"];
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
  input.sort();
};

mySort = (input) => {
  for (var i = 0; i < input.length; i++) {
    for (var j = i + 1; j < input.length; j++) {
      if (input[i] > input[j]) {
        var swap = input[i];
        input[i] = input[j];
        input[j] = swap;
      }
    }
  }
  return input;
};

sortOnesAndZeros = (input) => {
  var sorted = [];
  input.forEach((element) => {
    if (element === 1) {
      sorted.unshift(element);
    } else {
      sorted.push(element);
    }
  });
};

differentSortOnesAndZeros = (input) => {
  var ones = [];
  var zeros = [];
  input.forEach((element) => {
    if (element === 1) {
      ones.push(element);
    } else {
      zeros.push(element);
    }
  });
  sorted = ones.concat(zeros);
};
