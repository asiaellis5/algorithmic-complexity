class Comparison {
  constructor() {
    this.timerSort = new Timer(sort);
    this.timerReverse = new Timer(reverse);
    this.timerLast = new Timer(last);
    this.timerShuffle = new Timer(shuffle);
    this.data = [];
    this.labels = [];
  }

  generateLabels = (step, finalSize) => {
    this.timerSort.time(step, finalSize);
    this.timerSort.times.forEach((iteration) => {
      this.labels.push(iteration.size);
    });
  };

  generateChartData = () => {
    this.generateLabels(10000, 100000);
    this.generateSortData(10000, 100000);
    this.generateReverseData(10000, 100000);
    this.generateLastData(10000, 100000);
    this.generateShuffleData(10000, 100000);
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

  generateReverseData = (step, finalSize) => {
    this.timerReverse.time(step, finalSize);
    let reverseData = [];
    this.timerReverse.times.forEach((iteration) => {
      reverseData.push(iteration.time);
    });
    this.data.push(reverseData);
  };

  generateLastData = (step, finalSize) => {
    this.timerLast.time(step, finalSize);
    let lastData = [];
    this.timerLast.times.forEach((iteration) => {
      lastData.push(iteration.time);
    });
    this.data.push(lastData);
  };

  generateShuffleData = (step, finalSize) => {
    this.timerShuffle.time(step, finalSize);
    let shuffleData = [];
    this.timerShuffle.times.forEach((iteration) => {
      shuffleData.push(iteration.time);
    });
    this.data.push(shuffleData);
  };

  generateDataSets = (data) => {
    let names = ["Sort", "Reverse", "Last", "Shuffle"];
    let colors = ["#28a745", "#fbbd08", "#dc3644", "#18a2b8"];
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
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: data,
      },
      options: {
        title: {
          display: true,
          text: "Algorthim Complexity",
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

reverse = (input) => {
  input.reverse();
};

sort = (input) => {
  input.sort();
};

last = (input) => {
  input.slice(-1)[0];
};

shuffle = (input) => {
  for (let i = input.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    console.log("math floor", Math.random())[(input[i], input[j])] = [
      input[j],
      input[i],
    ];
  }
};

push = (input) => {
  input.push(1);
};
