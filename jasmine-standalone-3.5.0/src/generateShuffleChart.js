class GenerateShuffleChart {
  constructor() {
    this.timerShuffle = new Timer(shuffle)
    this.timerOtherShuffle = new Timer(otherShuffle)
    this.data = []
    this.labels = []
  }

  generateLabels = (step, finalSize) => {
    this.timerShuffle.time(step, finalSize)
    this.timerShuffle.times.forEach((iteration) => {
      this.labels.push(iteration.size)
    })

  }

  generateShuffleChartData = () => {
    this.generateLabels(1000, 100000)
    this.generateShuffleData(1000, 1000)
    this.generateOtherShuffleData(1000, 100000)
    this.renderChart(this.labels, this.generateDataSets(this.data))
  }

  generateShuffleData = (step, finalSize) => {
    this.timerShuffle.time(step, finalSize)
    let shuffleData = []
    this.timerShuffle.times.forEach((iteration) => {
      shuffleData.push(iteration.time)
    })
    this.data.push(shuffleData)
  }

  generateOtherShuffleData = (step, finalSize) => {
    this.timerOtherShuffle.time(step, finalSize)
    let shuffleOtherData = []
    this.timerOtherShuffle.times.forEach((iteration) => {
      shuffleOtherData.push(iteration.time)
    })
    this.data.push(shuffleOtherData)
  }

  generateDataSets = (data) => {
    console.log(data)
    let names = ["Shuffle", "OtherShuffle"]
    let colors = ["#28a745", "#fbbd08"]
    let dataArray = []
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
      })
    })
    return dataArray

  }

  renderChart = (labels, data) => {
    var ctx = document.getElementById("myShuffleChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: data
      },
      options: {
        title: {
          display: true,
          text: "Shuffle",
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