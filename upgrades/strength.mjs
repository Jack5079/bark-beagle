import Upgrade from '../lib/upgrade.mjs'
import inc from '../lib/inc.mjs'

let BiggerBark = new class extends Upgrade { // A bigger bark.

  constructor() { // Runs on load.
    super() // MUST PUT SUPER FOR UPGRADES TO WORK
    let strengthtml = document.createElement('span') // the html counter
    strengthtml.id = 'strength' // add the id
    strengthtml.innerText = localStorage.getItem('beagleStr') || 1 // load the strength
    strengthtml.classList.add('counter') // add counter class
    document.body.appendChild(strengthtml) // add to body

    document.getElementById('beagle').addEventListener('click', () => { // Add the actual upgrade; this gives you the bigger bark.
      inc(this.strength - 1) // add strength - 1 to the bruh count (- 1 is so we can account for the builtin onclick)
    })
  }

  onbuy (price) { // when they buy it
    this.price *= 1.5 // almost double the price
    this.strength++ // add to the strength
  }

  meta () { // info about bigger bark
    return {
      name: 'Bigger Bark',
      desc: 'Increases your bruh strength ( bruhs on click ) by one.',
      startprice: 30
    }
  }


  get strength () {
    return +document.getElementById('strength').innerText // return the bruh strength innertext
  }

  set strength (amount) {
    document.getElementById('strength').innerText = +amount // set the innertext
    localStorage.setItem('beagleStr', +amount) // save it
  }
}

export default BiggerBark