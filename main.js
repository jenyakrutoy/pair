import Card from './card.js'
import { startGameForm } from './game-form.js'

// * создание замыкания для переменной startGame и функции newGame
(() => {

  let timer

  function start() {

    clearTimeout(timer)
    
    // * заносим объект функции startGameForm - в переменную
    let startGame = startGameForm();
    
    // * старт игры по клику на кнопку "Начать игру"
    startGame.form.addEventListener('submit', function (e) {


      // * добавление таймера
      timer = setTimeout(() => {
        alert('Время вышло')
        game.innerHTML = ''
        start()
      }, '60000');

      e.preventDefault();

      // * удаляем из DOM форму
      startGame.form.innerHTML = ''

      // * переводим значение инпута в числовое
      let cardsCount = parseInt(startGame.input.value)

      // * создаем условия четности ввода в инпут + ограничение от 2 до 10
      if (cardsCount < 2 || cardsCount > 10 || cardsCount % 2 == 0 == false) {
        cardsCount = 4
      }

      // * запуск игры
      function createGameArea(cardsCount) {
        let cardsNumberArray = [],
          cardsArray = [],
          firstCard = null,
          secondCard = null

        // * пушим в массив парные числа
        for (let i = 1; i <= cardsCount / 2; i++) {
          cardsNumberArray.push(i, i)
        }

        // * делаем числа в случайном порядке
        function sort() {
          let j
          let temp
          for (let i = cardsNumberArray.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = cardsNumberArray[j];
            cardsNumberArray[j] = cardsNumberArray[i];
            cardsNumberArray[i] = temp;
          }
          return cardsNumberArray;
        }
        sort();


        // * из массива cardsNumberArray, пушим рандомные числа в каждую карточку
        for (let cardNumber of cardsNumberArray) {
          cardsArray.push(new Card(game, cardNumber, open))
        }

        // * функция call-back открития карточки
        function open(card) {
          if (firstCard !== null && secondCard !== null) {

            if (firstCard.number != secondCard.number) {
              firstCard.open = false
              secondCard.open = false
              firstCard = null
              secondCard = null
            }
          }

          if (firstCard == null) {
            firstCard = card
          } else {
            if (secondCard == null) {
              secondCard = card
            }
          }

          if (firstCard !== null && secondCard !== null) {
            if (firstCard.number == secondCard.number) {
              firstCard.sucsess = true
              secondCard.sucsess = true
              firstCard = null
              secondCard = null
            }
          }

          if (document.querySelectorAll('.card.sucsess').length == cardsNumberArray.length) {
            setTimeout(() => {
              if (confirm("Сыграть еще раз?")) {
                game.innerHTML = ''
              }

              else {
                game.innerHTML = ''
              }

              start()
            }, '500');
          }
        }
      }
      createGameArea(cardsCount)
    })
  }

  start()

})();
