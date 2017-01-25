// https://www.codewars.com/kata/even-or-odd
// TAGS: modulo

function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even"
  } else {
    return "Odd"
  }
}

function even_or_odd(number) {
   return number % 2 === 0 ? 'Even' : 'Odd';
}

function even_or_odd(number) {
  return number & 1 ? 'Odd' : 'Even';
}

even_or_odd = n => n % 2 === 0 ? 'Even' : 'Odd'

// #####################################################################
// https://www.codewars.com/kata/reversing-words-in-a-string
// TAGS: split/join loop/concatenate
// NOTES: test not written ... tricky for beginners

function reverse(string){
  var words = string.split(' ')
  var result = ''
  for (var i=words.length-1; i>=0; i--) {
    result += words[i]
    if (i>0) {
      result += ' '
    }
  }
  return result
}

function reverse(string){
  return string.split(' ').reverse().join(' ')
}

reverse = s => s.split(' ').reverse().join(' ')

/ #####################################################################
// https://www.codewars.com/kata/basic-mathematical-operations
// TAGS: if/else case

function basicOp(operation, value1, value2) {
  if (operation === '+') {
    return value1 + value2
  } else if (operation === '-') {
    return value1 - value2
  } else if (operation === '*') {
    return value1 * value2
  } else if (operation === '/') {
    return value1 / value2
  }
}

function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return 0;
  }
}

/ #####################################################################
// https://www.codewars.com/kata/fake-binary
// TAGS: for/if/else map reduce

function fakeBin(x) {
  var result = ''
  for (var i=0; i<x.length; i++) {
    if (parseInt(x[i]) <5) {
      result += '0'
    } else {
      result += '1'
    }
  }
  return result
}

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

const fakeBin=x=>[...x].reduce((a,b)=>a+(~~(+b/5)),"")

function fakeBin(x){
  return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1')
}

function fakeBin(x){
  return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" )
}
