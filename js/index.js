var array = [];
document.querySelector(".array").innerHTML = array;
function handleAdd() {
  var number = +document.querySelector("#number").value;
  array.push(number);
  document.querySelector(".array").innerHTML = array;
}
array = array.map(switchPT);
//Bài 1
function tinhTong() {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      total += array[i];
    }
  }
  document.querySelector("#resultTong").innerHTML = `Tổng số dương : ${total}`;
}
//Bài 2
function demSoDuong() {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      count++;
    }
  }
  document.querySelector("#resultDem").innerHTML = `Số dương : ${count}`;
}
//Bài 3
function findMin() {
  var min = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }

  document.querySelector("#resultFindMin").innerHTML = `
    Số nhỏ nhất: ${min}`;
}
//Bài 4
function findMinD() {
  var min = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > 0 && array[i] < min) {
      min = array[i];
    }
  }

  document.querySelector("#resultFindMinD").innerHTML = `
    Số dương nhỏ nhất: ${min}`;
}
//Bài 5
function findChan() {
  for (var i = array.length - 1; i < array.length; i--)
    if (array[i] % 2 == 0) {
      soChanCuoi = array[i];
      break;
    }
  document.querySelector("#resultChan").innerHTML = `
      Số chẵn cuối: ${soChanCuoi}`;
}
//Bài 6
function switchPT() {
  var p1 = +document.querySelector("#p1").value;
  var p2 = +document.querySelector("#p2").value;

  var value1 = array[p1];
  var value2 = array[p2];
  var temp;

  temp = value1;
  value1 = value2;
  value2 = temp;

  array[p1] = value1;
  array[p2] = value2;
  document.querySelector(
    "#resultswitchPT"
  ).innerHTML = `Mảng sau khi đổi: ${array}`;
}
//Bài 7
function sapXep() {
  var result = array.sort(function (a, b) {
    return a - b;
  });
  document.querySelector("#resultsapXep").innerHTML = `
  Mảng sau khi sắp xếp: ${result}`;
}

//Bài 8
function timSNT() {
  var html = "";
  for (var i = 0; i < array.length; i++) {
    var flag = 1;
    if (array[i] < 2) flag = 0;
    for (var j = 2; j < array[i]; j++) {
      if (array[i] % j == 0) {
        flag = 0;
        break;
      }
    }
    if (flag == 1) {
      html = array[i];
      break;
    }
  }
  document.querySelector("#resulttimSNT").innerHTML = `
Số nguyên tố đầu tiên: ${html}`;
}
//Bài 9
var array2 = [];
document.querySelector(".array2").innerHTML = array2;
function handleAdd2() {
  var number2 = +document.querySelector("#number2").value;
  array2.push(number2);
  document.querySelector(".array2").innerHTML = array2;
}
function demSoNguyen() {
  var count2 = 0;
  for (var i = 0; i < array2.length; i++) {
    if (Number.isInteger(array2[i])) count2++;
  }
  document.querySelector(
    "#resultdemSoNguyen"
  ).innerHTML = `Số nguyên : ${count2}`;
}
// Bài 10
function soSanh() {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      count++;
    }
  }
  var count2 = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count2++;
    }
  }
  if (count > count2) html = "Số dương > Số âm";
  else if (count2 > count) html = "Số âm > Số dương";
  else html = "Số âm = Số dương";
  document.querySelector("#resultsoSanh").innerHTML = `${html}`;
}
