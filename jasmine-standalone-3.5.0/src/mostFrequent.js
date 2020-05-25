class MostFrequent {
  constructor() {
    this.mostFrequent = new Timer(mostFrequent);
    this.otherMostFrequent = new Timer(otherMostFrequent);
    this.data = [];
    this.labels = [];
  }

  generateLabels = (step, finalSize) => {
    this.mostFrequent.timeWords(step, finalSize);
    this.mostFrequent.times.forEach((iteration) => {
      this.labels.push(iteration.size);
    });
  };

  generateMostFrequentChartData = () => {
    this.generateLabels(10000, 100000);
    this.generateMostFrequentData(10000, 100000);
    this.generateOtherMostFrequentData(10000, 100000);
    this.renderChart(this.labels, this.generateDataSets(this.data));
  };

  generateMostFrequentData = (step, finalSize) => {
    this.mostFrequent.timeWords(step, finalSize);
    let mostFrequentData = [];
    this.mostFrequent.times.forEach((iteration) => {
      mostFrequentData.push(iteration.time);
    });
    this.data.push(mostFrequentData);
  };

  generateOtherMostFrequentData = (step, finalSize) => {
    this.otherMostFrequent.timeWords(step, finalSize);
    let otherMostFrequentData = [];
    this.otherMostFrequent.times.forEach((iteration) => {
      otherMostFrequentData.push(iteration.time);
    });
    this.data.push(otherMostFrequentData);
  };

  generateDataSets = (data) => {
    let names = ["Most Frequent", "Other Most Frequent"];
    let colors = ["#dc3644", "#18a2b8"];
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
    var ctx = document.getElementById("myMostFrequentChart").getContext("2d");
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

mostFrequent = (array) => {
  let duplicates = array.filter(
    (item, index) => array.lastIndexOf(item) != index
  );
  return [...new Set(duplicates)];
};

otherMostFrequent = (array) => {
  let counting = {};
  array.forEach(function (string) {
    counting[string] = (counting[string] || 0) + 1;
  });
  if (Object.keys(counting).length !== array.length) {
    let duplicates = [];
    let string;
    for (string in counting) {
      if (counting.hasOwnProperty(string)) {
        if (counting[string] > 1) {
          duplicates.push(string);
        }
      }
    }
    return duplicates;
  }
};
