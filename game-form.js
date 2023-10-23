// * создание формы перед стартом игры
export function startGameForm() {
  const form = document.createElement('form')
  const input = document.createElement('input')

  const button = document.createElement('button')
  form.classList.add('input-group', 'mb-3')

  input.classList.add('form-control')
  input.setAttribute('type', 'number');
  input.placeholder = 'Количество карточек по вертикали/горизонтали';

  game.append(form)
  form.append(input)
  form.append(button)

  button.classList.add('btn', 'btn-primary')
  button.textContent = 'Начать игру'

  return {
    form,
    input,
  }
}