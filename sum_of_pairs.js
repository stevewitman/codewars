// https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript


// var sum_pairs=function(ints, s){
//   var indexes = [0, ints.length];
//   var i = 0;
//   var j = 0;
//   var iMax = ints.length;
//   var jMax = ints.length;
//   while (i < iMax) {
//     j = i + 1;
//     while (j < jMax) {
//       if (ints[i] + ints[j] === s && j < indexes[1]) {
//         indexes = [i, j];
//         iMax = j - 1;
//         jMax = j;
//       }
//       j++;
//     }
//     i++;
//   }
//   if (indexes[1] === ints.length) {
//     return
//   } else {
//     return [ints[indexes[0]], ints[indexes[1]]]
//   }
// }

var sum_pairs=function(ints, s){
  var indexes = [0, ints.length];
  var i = 0;
  var j = ints.length;
  var int;
  var iMax = ints.length;
  var jMax = ints.length;
  while (i < iMax) {
    intsRemaining = ints.slice(i + 1, j);
    console.log(intsRemaining)
    jTest = intsRemaining.indexOf(s - ints[i])
    console.log(jTest)
    if (jTest > 0) {
      console.log(i, j)
      j = jTest + i - 1;
      iMax = j;
      indexes = [i, j]
    }
    // jTest = ints.slice(i,j).indexOf(s - int)
    // console.log(i, jTest)
    // if (jTest > 0 && jTest < jMax) {
    //   j = jTest;
    //   jMax = j;
    //   indexes = [i, j]
    //   // iMax = j;
    // }
    i++;
  }
  if (indexes[1] === ints.length) {
    return
  } else {
    return [ints[indexes[0]], ints[indexes[1]]]
  }
}


// sum_pairs([1, 4, 8, 7, 3, 15], 8) //  [1, 7]
// sum_pairs([1, -2, 3, 0, -6, 1], -6) //  [0, -6]
// sum_pairs([20, -13, 40], -7) // undefined
// sum_pairs([1, 2, 3, 4, 1, 0], 2) // [1, 1]
sum_pairs([10, 5, 2, 3, 7, 5], 10) // [3, 7]
// sum_pairs([4, -2, 3, 3, 4], 8) // [4, 4]
// sum_pairs([0, 2, 0], 0) // [0, 0]
// sum_pairs([5, 9, 13, -3], 10) // [13, -3]
