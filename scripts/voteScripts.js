if ((typeof localStorage.foodClicks === 'undefined') || (localStorage.foodCllicks === 'NaN')) {
  localStorage.foodClicks = 0;
  localStorage.pandaClicks = 0;
}

var oneFood, onePanda;
DEBUG = true;


$(function() {
  takeOneAndShowChoice();
  setUpEvents();
});

function takeOneAndShowChoice() {
  oneFood = takeOne(food);
  onePanda = takeOne(pandas);
  if (typeof oneFood === 'undefined') {
    $('#food, #panda').off('click');
    return;
  }

  $('#food').attr('src', oneFood.location);
  $('#panda').attr('src', onePanda.location);
}

function setUpEvents() {
  $('#food').on('click', function() {
    localStorage.foodClicks++;
    refreshScreen();
  });
  $('#panda').on('click', function() {
    localStorage.pandaClicks++;
    refreshScreen();
  });
}

function refreshScreen() {
  takeOneAndShowChoice();
  showChart();
}

//
//
//
function log(something) {
  if (DEBUG) console.log(something);
}

//
// Data
//

function voteImage(name, location) {
  this.name = name;
  this.location = location;
}

var food = [
  new voteImage("foodApple.jpg", "images/foodApple.jpg"),
  new voteImage("foodCupTea.jpg", "images/foodCupTea.jpg"),
  new voteImage("foodHamburgers.jpg", "images/foodHamburgers.jpg"),
  new voteImage("foodHappyCandy.jpg", "images/foodHappyCandy.jpg"),
  new voteImage("foodHappyEggs.jpg", "images/foodHappyEggs.jpg"),
  new voteImage("foodHappyTofu.jpeg", "images/foodHappyTofu.jpeg"),
  new voteImage("foodMarshmallows.jpg", "images/foodMarshmallows.jpg"),
  new voteImage("foodMoreMarshmallows.jpg", "images/foodMoreMarshmallows.jpg"),
  new voteImage("foodPenguins.jpg", "images/foodPenguins.jpg"),
  new voteImage("foodStackMarshmallows.jpg", "images/foodStackMarshmallows.jpg")
];

var pandas = [
  new voteImage("axolotlPanda.jpg", "images/axolotlPanda.jpg"),
  new voteImage("blepPanda.jpg", "images/blepPanda.jpg"),
  new voteImage("curlyPanda.jpg", "images/curlyPanda.jpg"),
  new voteImage("happyPanda.jpg", "images/happyPanda.jpg"),
  new voteImage("laughyPandajpg", "images/laughyPanda.jpg"),
  new voteImage("sadPanda.jpg", "images/sadPanda.jpg"),
  new voteImage("sleepyPanda.jpg", "images/sleepyPanda.jpg"),
  new voteImage("smirkyPanda.jpg", "images/smirkyPanda.jpg"),
  new voteImage("stalkyPanda.jpg", "images/stalkyPanda.jpg"),
  new voteImage("surprisePanda.jpg", "images/surprisePanda.jpg"),
];
