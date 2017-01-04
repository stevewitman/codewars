// https://www.codewars.com/kata/sum-the-tree/train/javascript

function sumTheTreeValues(root){
  if (root === null) {
    return 0;
  } else {
    return parseInt(root.value) + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
  }
}

sumTheTreeValues({value: 11, left: {value: 0, left: null, right: null}, right: {value: 0, left: null, right: {value: 1, left: null, right: null}}})


// 11
// |  \
// 0    0
// |\   |\
// n n  n 1
//        |\
//        n n

// sumTheTreeValues({value: 10, left: {value: 1, left: null, right: null}, right: {value: 2, left: null, right: null}})
