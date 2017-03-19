function openOrSenior(data){
  var result = [];
  for (var i=0; i<data.length; i++) {
    if (data[i][0] < 55 || data[i][1] <= 7) {
      result.push('Open');
    } else {
      result.push('Senior');
    }
  }
  return result;
}

// function openOrSenior(data){
//   return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }
