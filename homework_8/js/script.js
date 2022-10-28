const button = document.getElementById('calculate-button');
button.addEventListener('click', (e) => {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  const operator = document.getElementById('operator').value;
  let errorMessage;
  let result;

  document.getElementById('result').value = '';

  if (String(value1).trim() === '') {
    console.log('Первое число не указано');
    errorMessage = 'Первое число не указано';
  } else if (String(value2).trim() === '') {
    console.log('Второе число не указано');
    errorMessage = 'Второе число не указано';
  } else if (operator === '') {
    console.log('Не введён знак');
    errorMessage = 'Не введён знак';
  } else if (
    typeof +value1 !== 'number' ||
    typeof +value2 !== 'number' ||
    Number.isNaN(+value1 * +value2) === true
  ) {
    console.log('Некорректный ввод чисел');
    errorMessage = 'Некорректный ввод чисел';
  } else {
    switch (operator) {
      case '-':
        result = value1 - value2;
        errorMessage = 'Выполнено!';
        break;
      case '+':
        result = +value1 + +value2;
        errorMessage = 'Выполнено!';
        break;
      case '*':
        result = value1 * value2;
        errorMessage = 'Выполнено!';
        break;
      case '/':
        result = value1 / value2;
        errorMessage = 'Выполнено!';
        break;
      default:
        console.log('Программа не поддерживает такую операцию');
        errorMessage = 'Программа не поддерживает такую операцию';
        result = '';
        break;
    }

    if (
      result === Number.POSITIVE_INFINITY ||
      result === Number.NEGATIVE_INFINITY ||
      Number.isNaN(result) === true
    ) {
      console.log('Операция некорректна');
      errorMessage = 'Операция некорректна';
      document.getElementById('result').value = '';
    } else {
      document.getElementById('result').value = result;
      console.log(result);
    }
  }
  document.getElementById('message-error').innerHTML = errorMessage;
});
