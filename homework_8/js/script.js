"use strict";

var button = document.getElementById("calculate-button");
button.addEventListener("click", function (e) {
  let value1 = document.getElementById("value1").value;
  let value2 = document.getElementById("value2").value;
  let operator = document.getElementById("operator").value;

  console.log(`${value1}`);
  console.log(`${value2}`);
  console.log(`${operator}`);
  console.log(`${value1}${operator}${value2}`);
  document.getElementById("result").value = value1 + value2;
});
