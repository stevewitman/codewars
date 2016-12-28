// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
/*
You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
*/
"use strict";

function longestConsec(strarr, k) {
  var maxLength = 0;
  var index = 0;
  for (var i=0; i<=strarr.length-k; i++) {
    var currentLength = 0;
    for (var j=0; j<k; j++) {
      currentLength += strarr[i+j].length;
    }
    if (currentLength > maxLength) {
      maxLength = currentLength;
      index = i;
    }
  }
  var result = '';
  if (strarr.length >= k) {
    for (var j=0; j<k; j++) {
      result += strarr[index+j];
    }
  }
  return result;
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) // "abigailtheta"
// longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)
// "oocccffuucccjjjkkkjyyyeehh"
// longestConsec([], 3) //  ""
// longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) // "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
// longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) // "wlwsasphmxxowiaxujylentrklctozmymu")
// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) // "")
// longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) // "ixoyx3452zzzzzzzzzzzz"
// longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) // "")
// longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0)// "")
