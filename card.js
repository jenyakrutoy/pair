export default
  
  // * создание класса карточки
  class Card {

  _open = false
  _sucsess = false

  constructor(container, number, action) {
    this.card = document.createElement('li')
    this.card.classList.add('card')
    this.card.textContent = number
    this.number = number

    this.card.addEventListener('click', () => {
      if (this.open == false && this.sucsess == false) {
        this.open = true
        action(this)
      }
    })
    container.append(this.card)
  }

  set open(value) {
    this._open = value
    value ? this.card.classList.add('open') : this.card.classList.remove('open')
  }

  get open() {
    return this._open
  }

  set sucsess(value) {
    this._sucsess = value
    value ? this.card.classList.add('sucsess') : this.card.classList.remove('sucsess')
  }

  get sucsess() {
    return this._sucsess
  }
}