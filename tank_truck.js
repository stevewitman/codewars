"use strict";
// https://www.codewars.com/kata/55f3da49e83ca1ddae0000ad/train/javascript
// calculate fuel left in tank.

function tankvol(h, d, vt) {
  var r = d/2;
  var a = Math.PI*r*r;
  var l = vt/a;
  var g;
  h<=d/2 ? g = r-h : g = h-r;
  var theta = Math.acos(g/r);
  var f = r*Math.sin(theta);
  var areaTri = f*g;
  var ratio = (theta*2)/(2*Math.PI);
  var areaSlice = a*ratio;
  var areaSliver = areaSlice-areaTri;
  var v = areaSliver*l;
  h<=d/2 ? v = areaSliver*l : v = vt-areaSliver*l;
  return Math.floor(v);
}
// tankvol(5, 7, 3848) // 2940
// tankvol(2, 7, 3848) // 907
