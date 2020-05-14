class GenerateReverseChart {
  constructor() {
    this.timerReverse = new Timer(reverse)
    this.timerOtherReverse = new Timer(otherReverse)
    this.data = []
    this.labels = []
  }

  generateLabels = (step, finalSize) => {
    this.timerReverse.time(step, finalSize)
    this.timerReverse.times.forEach((iteration) => {
      this.labels.push(iteration.size)
    })
  }

  generateReverseChartData = () => {
    this.generateLabels(1000, 100000)
    this.generateReverseData(1000, 100000)
    this.generateOtherReverseData(1000, 100000)
    this.renderChart(this.labels, this.generateDataSets(this.data))
  }

  generateReverseData = (step, finalSize) => {
    this.timerReverse.time(step, finalSize)
    let reverseData = []
    this.timerReverse.times.forEach((iteration) => {
      reverseData.push(iteration.time)
    })
    this.data.push(reverseData)
  }

  generateOtherReverseData = (step, finalSize) => {
    this.timerOtherReverse.time(step, finalSize)
    let reverseOtherData = []
    this.timerOtherReverse.times.forEach((iteration) => {
      reverseOtherData.push(iteration.time)
    })
    this.data.push(reverseOtherData)
  }

  generateDataSets = (data) => {
    let names = ["Reverse", "OtherReverse"]
    let colors = ["#dc3644", "#18a2b8"]
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
    console.log(data)
    var ctx = document.getElementById("myReverseChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: data
      },
      options: {
        title: {
          display: true,
          text: "Reverse",
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