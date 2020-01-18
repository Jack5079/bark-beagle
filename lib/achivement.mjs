/* global localStorage */
import list from './list.mjs'
const add = list('achivements', 'Achivements')

class Achivement {
  constructor (title = 'Missing title', desc = 'Missing description') {
    this.bar = document.createElement('progress')
    this.title = title
    this.desc = desc

    const information = document.createElement('article')
    const h1 = document.createElement('h2')
    h1.innerText = title
    information.appendChild(h1)

    const description = document.createElement('p')
    description.innerText = desc
    information.appendChild(description)
    this.bar.max = 100
    this.bar.value = localStorage.getItem(title.replace(/ /g, '')) || 0
    information.appendChild(this.bar)
    add(information)
  }

  get progress () {
    return +this.bar.value
  }

  set progress (amount) {
    if (amount === this.progress) return
    if (amount === 100) this.complete()
    this.bar.value = amount
    localStorage.setItem(this.title.replace(/ /g, ''), amount)
  }

  complete () {
    const snack = document.createElement('article')
    snack.classList.add('achivement')
    const name = document.createElement('h3')
    name.innerText = this.title
    snack.appendChild(name)

    const desc = document.createElement('small')
    desc.innerText = this.desc
    snack.appendChild(desc)

    document.body.appendChild(snack)
  }
}

export default Achivement
