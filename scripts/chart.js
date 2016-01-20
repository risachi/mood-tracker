var drawChart;

$(function() {
  google.charts.load('current', {
    'packages': ['corechart']
  });
  google.charts.setOnLoadCallback(drawChart);

  drawChart = function() {
    var data = google.visualization.arrayToDataTable(dataPoints);

    // var data = google.visualization.arrayToDataTable(scores);


    var options = {
      title: 'Mood Chart',
      curveType: 'function',
      legend: {
        position: 'bottom'
      },
      lineWidth: 5,
      hAxis: {
        title: 'Date',
        slantedText: 'true'
      },
      vAxis: {
        title: 'Mood Score',
        viewWindow: {
          maxValue: 11,
          minValue: 1
        }
      }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
  }
});
