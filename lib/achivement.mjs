/* global localStorage */
import newList from './list.mjs'
const container = newList('achivements', 'Achivements')

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
    container.appendChild(information)
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
    const snack = document.createElement('div')

    snack.style = `
      background: darkslategray;
      color: white;
      text-align: center;
      border-radius: 3em;
      box-shadow: 0 0 1em lightslategray;
      position: fixed;
      overflow: hidden;
      width: 50%;
      bottom: 50%;
    `
    const name = document.createElement('h3')
    name.innerText = this.title
    snack.appendChild(name)

    const desc = document.createElement('small')
    desc.innerText = this.desc
    snack.appendChild(desc)

    document.body.appendChild(snack)

    snack.animate(
      [
        { right: '-50%', filter: 'blur(30px)' },
        { right: '1em', filter: 'blur(0)' }
      ],
      {
        duration: 2000,
        easing: 'ease-out',
        fill: 'forwards'
      }
    ).onfinish = _ => {
      // After it finishes opening
      snack.animate(
        [
          { right: '1em', filter: 'blur(0)' },
          { right: '-50%', filter: 'blur(30px)' }
        ],
        {
          delay: 5000, // After 5 seconds
          duration: 2000,
          easing: 'ease-in',
          fill: 'forwards'
        }
      ).onfinish = _ => snack.remove() // After the closing is done, delete the snackbar
    }
  }
}

export default Achivement
