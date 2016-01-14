$(function() {
  google.charts.load('current', {
    'packages': ['corechart']
  });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Date', 'Score'],
      ['1/4/2016', 5],
      ['1/5/2016', 9],
      ['1/6/2016', 11],
      ['1/7/2016', 7],
      ['1/9/2016', 8],
      ['1/11/2016', 6],
      ['1/12/2016', 2],
      ['1/13/2016', 3]
    ]);

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
