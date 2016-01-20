var dataPoints = [
  ['Date', 'Score'],
  ['1/4/2016', 5],
  ['1/5/2016', 9],
  ['1/6/2016', 11],
  ['1/7/2016', 7],
  ['1/9/2016', 8],
  ['1/11/2016', 6],
  ['1/12/2016', 2],
  ['1/13/2016', 3],
  ['1/14/2016', 5],
  ['1/16/2016', 7],
  ['1/18/2016', 1]
]

var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var fullDate = (month + "/" + day + "/" + year);
