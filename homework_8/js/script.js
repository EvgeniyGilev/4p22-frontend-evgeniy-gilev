const button = document.getElementById('calculate-button');
button.addEventListener('click', (e) => {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  const operator = document.getElementById('operator').value;
  let result;

  document.getElementById('result').value = '';

  if (value1 === '') {
    console.log('Первое число не указано');
    document.getElementById('message-error').innerText =
      'Первое число не указано';
  } else if (value2 === '') {
    console.log('Второе число не указано');
    document.getElementById('message-error').innerText =
      'Второе число не указано';
  } else if (operator === '') {
    console.log('Не введён знак');
    document.getElementById('message-error').innerText = 'Не введён знак';
  } else if (
    typeof +value1 !== 'number' ||
    typeof +value2 !== 'number' ||
    Number.isNaN(+value1 * +value2) === true
  ) {
    console.log('Некорректный ввод чисел');
    document.getElementById('message-error').innerText =
      'Некорректный ввод чисел';
  } else {
    switch (operator) {
      case '-':
        result = value1 - value2;
        document.getElementById('message-error').innerText = 'Выполнено!';
        break;
      case '+':
        result = +value1 + +value2;
        document.getElementById('message-error').innerText = 'Выполнено!';
        break;
      case '*':
        result = value1 * value2;
        document.getElementById('message-error').innerText = 'Выполнено!';
        break;
      case '/':
        result = value1 / value2;
        document.getElementById('message-error').innerText = 'Выполнено!';
        break;
      default:
        console.log('Программа не поддерживает такую операцию');
        document.getElementById('message-error').innerText =
          'Программа не поддерживает такую операцию';
        result = '';
        break;
    }

    if (
      result === Number.POSITIVE_INFINITY ||
      result === Number.NEGATIVE_INFINITY ||
      Number.isNaN(+value1 / +value2) === true
    ) {
      console.log('Операция некорректна');
      document.getElementById('message-error').innerText =
        'Операция некорректна';
      document.getElementById('result').value = '';
    } else {
      document.getElementById('result').value = result;
      console.log(result);
    }
  }
});
