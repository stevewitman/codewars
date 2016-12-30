// https://www.codewars.com/kata/556b85b433fb5e899200003f/train/javascript

"use strict";

function mixedFraction(s){
  var result = '';
  var sign = 1;
  var input = s.split('/');
  var num = parseInt(input[0]);
  var den = parseInt(input[1]);
  if (den === 0) {
    throw 'ZeroDivisionError';
  }
  if (num === 0) {
    return '0';
  }
  if (num < 0) {
    sign = sign * -1;
    num = num * -1;
  }
  if (den < 0) {
    sign = sign * -1;
    den = den * -1;
  }
  if (sign === -1) {
    result += '-';
  }
  var whole = Math.floor(num/den);
  if (whole === num/den) {
    result += whole.toString();
    return result;
  } else if (whole !== 0) {
    num = num - whole * den;
    result += whole + ' ';
  }
  var numFinal = num;
  var denFinal = den;
  for (var i=2; i<=num; i++) {
    if (num % i === 0 && den % i === 0) {
      numFinal = num / i;
      denFinal = den / i;
    }
  }
  result += numFinal + '/' + denFinal;

  return result;
}

// mixedFraction('3/8')
// mixedFraction('42/9') //    '4 2/3'
// mixedFraction('6/3') //     '2'
// mixedFraction('2/2') //     '1'
// mixedFraction('11/11') //   '1'
// mixedFraction('6/9') //     '2/3'
// mixedFraction('0/18891') // '0'
// mixedFraction('-10/7') //   '-1 3/7'
// mixedFraction('-22/-7') //  '3 1/7'
