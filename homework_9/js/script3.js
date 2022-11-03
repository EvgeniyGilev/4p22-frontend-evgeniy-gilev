'use strict';

// третий вариант с IIFE

const fibonacci = (() => {
  let firstValue = 0;
  let secondValue = 1;

  return function getNewValueSwap() {
    console.log(firstValue);

    const newFirstValue = secondValue;
    secondValue = firstValue + secondValue;
    firstValue = newFirstValue;

    return secondValue;
  };
})();

fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
