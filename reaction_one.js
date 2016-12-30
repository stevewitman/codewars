// 
"use strict"
function listSquared(m, n) {
  var result = [];
  for (var i=m; i<=n; i++) {
    var next = [];
    var sumDivisorsSquared = divisors(i).map(function(n) {
      return n*n;
    }).reduce(function(total, n) {
      return total + n
    });
    if (Number.isInteger(Math.sqrt(sumDivisorsSquared))) {
      next.push(i);
      next.push(sumDivisorsSquared)
      result.push(next);
    }
  }
  return result;

  function divisors(n) {
    var result = [];
    var half = n/2;
    for (var i=1; i<=half; i++) {
      if (n % i === 0) {
        result.push(i);
      }
    }
    result.push(n);
    return result;
  }
}

// listSquared(1, 250) // [[1, 1], [42, 2500], [246, 84100]])
// listSquared(42, 250) // [[42, 2500], [246, 84100]])
// listSquared(250, 500) // [[287, 84100]])
