// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(str) {
var result = [];
  var tempArr = str.split(' ');
  for (var i=0; i<tempArr.length; i++) {
    var tempStr = '';
    for (var j=tempArr[i].length-1; j>=0; j--) {
      tempStr += tempArr[i][j];
    }
    result.push(tempStr);
  }
  return result.join(' ');
}
