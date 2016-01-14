// used in voteScripts.js
function takeOne(arr) {
  var deletedItems = arr.splice(randomIndex(arr), 1);
  return deletedItems[0];
}

// used by takeOne()
function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}


// Configuration
if (typeof exports !== 'undefined') {
  exports._test = {
    takeOne: takeOne
  };
}
