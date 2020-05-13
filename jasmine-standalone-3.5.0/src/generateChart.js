class GenerateChart {
  constructor() {
    this.timerSort = new Timer(sort)
    this.timerReverse = new Timer(reverse)
    this.timerLast = new Timer(last)
    this.timerShuffle = new Timer(shuffle)
    this.data = []
    this.labels = []
  }

  generateLabels = (step, finalSize) => {
    this.timerSort.time(step, finalSize)
    this.timerSort.times.forEach((iteration) => {
      this.labels.push(iteration.size)
    })

  }

  generateChartData = () => {
    this.generateLabels(1000, 100000)
    this.generateSortData(1000, 100000)
    this.generateReverseData(1000, 100000)
    this.generateLastData(1000, 100000)
    this.generateShuffleData(1000, 100000)
    this.renderChart(this.labels, this.data)
  }

  generateSortData = (step, finalSize) => {
    this.timerSort.time(step, finalSize)
    let sortData = []
    this.timerSort.times.forEach((iteration) => {
      sortData.push(iteration.time)
    })
    this.data.push(sortData)
  }

  generateReverseData = (step, finalSize) => {
    this.timerReverse.time(step, finalSize)
    let reverseData = []
    this.timerReverse.times.forEach((iteration) => {
      reverseData.push(iteration.time)
    })
    this.data.push(reverseData)
  }

  generateLastData = (step, finalSize) => {
    this.timerLast.time(step, finalSize)
    let lastData = []
    this.timerLast.times.forEach((iteration) => {
      lastData.push(iteration.time)
    })
    this.data.push(lastData)
  }

  generateShuffleData = (step, finalSize) => {
    this.timerShuffle.time(step, finalSize)
    let shuffleData = []
    this.timerShuffle.times.forEach((iteration) => {
      shuffleData.push(iteration.time)
    })
    this.data.push(shuffleData)
  }



  renderChart = (labels, data) => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Sort',
            data: data[0],
            fill: false,
            hidden: false,
            borderColor: "#28a745",
            borderWidth: 3,
            pointBorderWidth: 0,
            pointStyle: "rectRounded",
            pointRadius: 4,
            pointHitRadius: 5,
            pointHoverRadius: 5,
            pointBackgroundColor: "#28a745",
            hoverBackgroundColor: "#28a745",
          },
          {
            label: 'Reverse',
            data: data[1],
            fill: false,
            hidden: true,
            backgroundColor: "rgba(251,189,8, 0.4)",
            borderColor: "#fbbd08",
            borderWidth: 3,
            pointBackgroundColor: "#fbbd08",
            pointBorderWidth: 0.5,
            pointStyle: "rectRounded",
            pointRadius: 4,
            pointHitRadius: 5,
            pointHoverRadius: 5,
            hoverBackgroundColor: "#FFFFFF"
          },
          {
            label: 'Last',
            data: data[2],
            fill: false,
            hidden: true,
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "#dc3644",
            borderWidth: 3,
            pointBackgroundColor: "#dc3644",
            pointBorderWidth: 0.5,
            pointStyle: "rectRounded",
            pointRadius: 4,
            pointHitRadius: 5,
            pointHoverRadius: 5,
            hoverBackgroundColor: "#dc3644"
          },
          {
            label: 'Shuffle',
            data: data[3],
            fill: false,
            hidden: true,
            backgroundColor: "rgba(24,162,184, 0.2)",
            borderColor: "#18a2b8",
            borderWidth: 3,
            pointBackgroundColor: "#18a2b8",
            pointBorderWidth: 0.5,
            pointStyle: "rectRounded",
            pointRadius: 4,
            pointHitRadius: 5,
            pointHoverRadius: 5,
            hoverBackgroundColor: "#18a2b8"
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Algorthim Complexity",
          fontSize: 20,
          fontStyle: 'bold'
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