// https://www.codewars.com/kata/5714eb80e1bf814e53000c06/train/javascript

"use strict";
function fisHex(name) {
  var result = 0;
  var nameNew = name.split(/[g-z]|\s/).join('');
  for (var i=0; i<nameNew.length; i++) {
    result = result ^ parseInt(nameNew[i], 16);
  }
  return result;
}

// fisHex("pufF erfish") //, 1)
// fisHex("puffers") //, 14)
// fisHex("balloonfish") //, 14)
