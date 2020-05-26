class Fibonnacci {
  constructor() {
    this.timerFibonnacci = new Timer(fibonnacci);
    this.timerOtherFibonnacci = new Timer(otherFibonnacci);
    this.data = [];
    this.labels = [];
  }

  generateLabels = (step, finalSize) => {
    this.timerFibonnacci.timeFibonnacci(step, finalSize);
    this.timerFibonnacci.times.forEach((iteration) => {
      this.labels.push(iteration.size);
    });
  };

  generateFibonnacciChartData = () => {
    this.generateLabels(500, 10000);
    this.generateFibonnacciData(500, 10000);
    this.generateOtherFibonnacciData(500, 10000);
    this.renderChart(this.labels, this.generateDataSets(this.data));
  };

  generateFibonnacciData = (step, finalSize) => {
    this.timerFibonnacci.timeFibonnacci(step, finalSize);
    let fibonnacciData = [];
    this.timerFibonnacci.times.forEach((iteration) => {
      fibonnacciData.push(iteration.time);
    });
    this.data.push(fibonnacciData);
  };

  generateOtherFibonnacciData = (step, finalSize) => {
    this.timerOtherFibonnacci.timeFibonnacci(step, finalSize);
    let otherFibonnacciData = [];
    this.timerOtherFibonnacci.times.forEach((iteration) => {
      otherFibonnacciData.push(iteration.time);
    });
    this.data.push(otherFibonnacciData);
  };

  generateDataSets = (data) => {
    let names = ["Fibonnacci", "Other Fibonnacci"];
    let colors = ["#28a745", "#f000000"];
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
    var ctx = document.getElementById("myFibonnacciChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: data,
      },
      options: {
        title: {
          display: true,
          text: "Fibonacci",
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

fibonnacci = (number) => {
  let a = 0;
  let b = 1;
  let fib = [];

  if (number >= 1) {
    fib.push(a);
  }
  if (number >= 2) {
    fib.push(b);
  }
  if (number >= 3) {
    for (let i = 0; i < number - 2; i++) {
      let c = a + b;
      a = b;
      b = c;
      fib.push(c);
    }
  }
  return fib;
};

// otherFibonnacci = (number) => {
//   a = 1;
//   b = 0;
//   let fib = [];

//   for (let i = 0; i < number; i++) {
//     c = a;
//     a = b;
//     b = c + a;
//     fib.push(a);
//   }
//   return fib;
// };

otherFibonnacci = (n) => {
  const result = [0, 1];
  for (var i = 2; i < n; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  return result;
};
