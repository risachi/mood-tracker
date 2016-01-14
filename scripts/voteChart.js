// dataPoints: shops.map( function(aShop) {
//   return { label: aShop.shopName, y: aShop.numHoursOpen }
// })


$(function() {
  showChart();
  eventHandler();
});

function showChart() {
  var chartObject = { //Pass chart options
    title: {
      text: "Results"
    },
    axisY: {
      title: "Number of Votes",
      includeZero: true
    },
    data: [{
      type: "spline", //change it to column, spline, line, pie, etc
    }]
  };

  var dataPoints = [];
  if (foodIsFirst()) {
    if ($('#foodBox').prop('checked')) {
      dataPoints.push({
        label: "Food",
        y: parseInt(localStorage.foodClicks)
      });
    }
    if ($('#pandaBox').prop('checked')) {
      dataPoints.push({
        label: "Pandas",
        y: parseInt(localStorage.pandaClicks)
      });
    }
  } else {
    if ($('#pandaBox').prop('checked')) {
      dataPoints.push({
        label: "Panda",
        y: parseInt(localStorage.pandaClicks)
      });
    }
    if ($('#foodBox').prop('checked')) {
      dataPoints.push({
        label: "Food  ",
        y: parseInt(localStorage.foodClicks)
      });
    }
  }

  log(dataPoints);
  chartObject.data.push({
    dataPoints: dataPoints
  });

  $("#chart").CanvasJSChart(chartObject);
}

function foodIsFirst() {
  return $('img')[0].id === 'food';
}

function eventHandler() {
  $('#foodBox').change(function() {
    showChart();
  });
  $('#pandaBox').change(function() {
    showChart();
  });
}
