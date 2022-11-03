'use strict';

// второй вариант с замыканием

function makeFibonacciFunctuon() {
  let firstValue = 0;
  let secondValue = 1;

  return function getNewValueSwap() {
    console.log(firstValue);

    const newFirstValue = secondValue;
    secondValue = firstValue + secondValue;
    firstValue = newFirstValue;

    return secondValue;
  };
}

const fibonacci = makeFibonacciFunctuon();

fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
