$(function() {

  // refactor to create a generic function that takes the value of each image and puts the value in the input box
  $('#1').click(function() {
    $('input').val('1');
  });

  $('#3').click(function() {
    $('input').val('3');
  });

  $('#5').click(function() {
    $('input').val('5');
  });

  $('#8').click(function() {
    $('input').val('8');
  });

  $('#11').click(function() {
    $('input').val('11');
  });

// need to refactor this to be functional ((dataPoints).push(newDataPoint))
  $('input').on('keypress', function(e) {
    if (event.which === 13) {
      event.preventDefault();
      console.log('the value is ' + $('input').val());
      var newDataPoint = $.makeArray([fullDate, $('input').val()]);
      console.log(newDataPoint);
      (dataPoints).push(newDataPoint);
    }
  });

  if ($(window).height() > $(window).width()) {
    console.log('This device is in portrait mode.');
    $('.hideInPortrait').hide();
  } else {
    console.log('This device is in landscape mode.');
  }


});
