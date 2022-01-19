// lev1_1
let num = document.getElementById('num');
let result = document.getElementById('result');

function double() {
  result.innerHTML = (num.value * 2);
}

// lev1_2
let birthYear = document.getElementById('birthYear');
let result2 = document.getElementById('result2');
const now = new Date();

function age() {
  result2.innerHTML = (now.getFullYear() - birthYear.value);
}

// lev1_3
function calc() {
  let age1 = parseInt(document.getElementById('age1').value);
  let age2 = parseInt(document.getElementById('age2').value);
  let result3 = document.getElementById('result3');

  if(age1 > age2) {
    result3.innerHTML = (age1 - age2);
  } else {
    result3.innerHTML = (age2 - age1);
  }
}