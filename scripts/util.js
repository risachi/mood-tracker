$(function() {

  // refactor to create a generic function that takes the value of each image and puts the value in the input box
  $('#moodScale').click(function(event) {
    var targetId = parseInt(event.target.id);
    console.log('the value is ' + event.target.id);
    var newDataPoint = $.makeArray([fullDate, targetId]);
    console.log(newDataPoint);
    (dataPoints).push(newDataPoint);
    drawChart();
    calculateAverage(scores);
  });

  if ($(window).height() > $(window).width()) {
    console.log('This device is in portrait mode.');
    $('#curve_chart').hide();
  } else {
    console.log('This device is in landscape mode.');
    // attempt to toggle class such that in portrait mode, the average score is displayed prominently where the chart would normally appear
  }




  // GIPHY API
  // https://github.com/Giphy/GiphyAPI

  // When the user visits the page and sees their average, a link prompts the user to find a random gif depending upon their average score.

  // When the user records their mood score, the above link changes to prompt the user to find a random gif depending upon the score they just recorded.

});
