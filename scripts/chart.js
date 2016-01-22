google.charts.load('current', {
  'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable(dataPoints);

  var options = {
    title: 'Mood Chart',
    curveType: 'function',
    legend: {
      position: 'bottom'
    },
    height: 500,
    width: 1000,
    lineWidth: 5,
    pointSize: 10,
    dataOpacity: 0.5,
    hAxis: {
      title: 'Date',
      slantedText: 'true',
      gridlines: {
        count: -1
      }
    },
    vAxis: {
      title: 'Mood Score',
      maxValue: 11,
      minValue: 1,
      gridlines: {
        count: -1
      }
    }
  };


  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}
