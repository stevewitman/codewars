// https://www.codewars.com/kata/even-or-odd
// tags: modulo
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
// split/join 
function reverse(string){
  return string.split(' ').reverse().join(' ')
}

reverse = s => s.split(' ').reverse().join(' ')
