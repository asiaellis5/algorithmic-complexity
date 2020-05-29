class Reverse {
  constructor() {
    this.timerReverse = new Timer(reverse);
    this.timerOtherReverse = new Timer(myReverse);
    this.data = [];
    this.labels = [];
  }

  generateLabels = (step, finalSize) => {
    this.timerReverse.time(step, finalSize);
    this.timerReverse.times.forEach((iteration) => {
      this.labels.push(iteration.size);
    });
  };

  generateReverseChartData = () => {
    this.generateLabels(10000, 100000);
    this.generateReverseData(10000, 100000);
    this.generateOtherReverseData(10000, 100000);
    this.renderChart(this.labels, this.generateDataSets(this.data));
  };

  generateReverseData = (step, finalSize) => {
    this.timerReverse.time(step, finalSize);
    let reverseData = [];
    this.timerReverse.times.forEach((iteration) => {
      reverseData.push(iteration.time);
    });
    this.data.push(reverseData);
  };

  generateOtherReverseData = (step, finalSize) => {
    this.timerOtherReverse.time(step, finalSize);
    let reverseOtherData = [];
    this.timerOtherReverse.times.forEach((iteration) => {
      reverseOtherData.push(iteration.time);
    });
    this.data.push(reverseOtherData);
  };

  generateDataSets = (data) => {
    let names = ["Reverse", "Other Reverse"];
    let colors = ["#ffc0cb", "#18a2b8"];
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
    var ctx = document.getElementById("myReverseChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: data,
      },
      options: {
        title: {
          display: true,
          text: "Reverse",
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

myReverse = (input) => {
  let reverse = [];
  for (let i = input.length; i > 0; i--) {
    reverse.push(input[i]);
  }
  return reverse;
};
