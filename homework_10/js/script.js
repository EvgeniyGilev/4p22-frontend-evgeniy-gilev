'use strict';

const button = document.getElementById('buttonForTestAPI');
button.addEventListener('click', (event) => {
  fetch('https://reqres.in/api/users?per_page=12')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Ошибка при получении данных с сайта!');
    })
    .then((result) => {
      const listUsers = result.data;
      console.log('-----------');
      console.log('Пункт №1 - Получить все данные:');
      console.log('-----------');
      console.log(result.data);

      console.log('-----------');
      console.log('Пункт №2 - Выводим в консоль фамилии:');
      console.log('-----------');
      const arrayLastNameStartsWithF = [];
      for (let user of listUsers) {
        console.log(user.last_name);
        if (user.last_name[0] === 'F') {
          arrayLastNameStartsWithF.push(user);
        }
      }

      console.log('-----------');
      console.log(
        'Пункт №3 - Вывести все данные всех пользователей, фамилия которых начинается на F:'
      );
      console.log('-----------');
      for (let user of arrayLastNameStartsWithF) {
        Object.keys(user).forEach((key) => {
          console.log(key + ':' + user[key]);
        });
        console.log('-----------');
      }

      console.log('Пункт №4 - Использовать метод reduce:');
      console.log('-----------');
      const resultString = listUsers.reduce((acc, user) => {
        if (acc === '') {
          acc = `Наша база содержит данные следующих пользователей: ${user.first_name}  ${user.last_name}`;
          return acc;
        }
        acc = `${acc}, ${user.first_name} ${user.last_name}`;
        return acc;
      }, '');
      console.log(resultString);

      console.log('-----------');
      console.log('Пункт №5 - Вывести названия ключей пользователя:');
      console.log('-----------');

      let keysNames = '';
      Object.keys(listUsers[0]).forEach((key) => {
        keysNames === ''
          ? (keysNames = `${key}`)
          : (keysNames = `${keysNames}, ${key}`);
      });
      console.log(keysNames);
    })
    .catch((error) => {
      console.log(error);
    });
});
