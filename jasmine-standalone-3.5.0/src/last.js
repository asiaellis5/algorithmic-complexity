class Last {
  constructor() {
    this.timerLast = new Timer(last)
    this.timerOtherLast = new Timer(myLast)
    this.data = []
    this.labels = []
  }

  generateLabels = (step, finalSize) => {
    this.timerLast.time(step, finalSize)
    this.timerLast.times.forEach((iteration) => {
      this.labels.push(iteration.size)
    })
  }

  generateLastChartData = () => {
    this.generateLabels(1000, 100000)
    this.generateLastData(1000, 100000)
    this.generateOtherLastData(1000, 100000)
    this.renderChart(this.labels, this.generateDataSets(this.data))
  }

  generateLastData = (step, finalSize) => {
    this.timerLast.time(step, finalSize)
    let lastData = []
    this.timerLast.times.forEach((iteration) => {
      lastData.push(iteration.time)
    })
    this.data.push(lastData)
  }

  generateOtherLastData = (step, finalSize) => {
    this.timerOtherLast.time(step, finalSize)
    let lastOtherData = []
    this.timerOtherLast.times.forEach((iteration) => {
      lastOtherData.push(iteration.time)
    })
    this.data.push(lastOtherData)
  }

  generateDataSets = (data) => {
    let names = ["Original Last", "Other Last"]
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
    var ctx = document.getElementById("myLastChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: data
      },
      options: {
        title: {
          display: true,
          text: "Last",
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

last = (input) => {
  input.slice(-1)[0]
}

myLast = (input) => {
  input[input.length - 1]
}