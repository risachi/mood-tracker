$(function() {
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


  $('input').on('keypress', function(e){
    if(event.which === 13) {
      console.log('the value is ' + $('input').val())
      // $(this).attr('disabled', 'disabled');
      var newDataPoint = jQuery.makeArray([fullDate, $('input').val()]);
      $(data).append(newDataPoint);
    }
  });


});
