class GenerateFindDupChart {
  constructor() {
    this.timerDuplicate = new Timer(findDuplicate)
    // this.timerOtherDuplicate = new Timer(otherShuffle)
    this.data = []
    this.labels = []
  }

  generateLabels = (step, finalSize) => {
    this.timerDuplicate.time(step, finalSize)
    this.timerDuplicate.times.forEach((iteration) => {
      this.labels.push(iteration.size)
    })

  }

  generateDuplicateChartData = () => {
    this.generateLabels(1000, 100000)
    this.generateDuplicateData(1000, 1000)
    // this.generateOtherDuplicateData(1000, 100000)
    this.renderChart(this.labels, this.generateDataSets(this.data))
  }

  generateDuplicateData = (step, finalSize) => {
    this.timerDuplicate.time(step, finalSize)
    let duplicateData = []
    this.timerDuplicate.times.forEach((iteration) => {
      duplicateData.push(iteration.time)
    })
    this.data.push(duplicateData)
  }

  generateOtherDuplicateData = (step, finalSize) => {
    this.timerOtherDuplicate.time(step, finalSize)
    let duplicateOtherData = []
    this.timerOtherDuplicate.times.forEach((iteration) => {
      duplicateOtherData.push(iteration.time)
    })
    this.data.push(duplicateOtherData)
  }

  generateDataSets = (data) => {
    console.log(data)
    let names = ["FindDuplicate", "OtherFindDuplicates"]
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
    var ctx = document.getElementById("myDuplicateChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: data
      },
      options: {
        title: {
          display: true,
          text: "Find Duplicates",
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