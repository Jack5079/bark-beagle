/* global localStorage */
import Upgrade from '../lib/upgrade.mjs'
import inc from '../lib/inc.mjs'
import Counter from '../lib/counter.mjs'
const BiggerBark = new class extends Upgrade { // A bigger bark.
  constructor () { // Runs on load.
    super() // MUST PUT SUPER FOR UPGRADES TO WORK
    this.count = new Counter('assets/bark.webp', 'Bruhs on click', ' bruh/click')
    this.strength = localStorage.getItem('beagleStr') || 1 // load the strengthadd to body

    document.getElementById('beagle').addEventListener('click', () => { // Add the actual upgrade; this gives you the bigger bark.
      inc(this.strength - 1) // add strength - 1 to the bruh count (- 1 is so we can account for the builtin onclick)
    })
  }

  get strength () {
    return +this.count.count // return the bruh strength innertext
  }

  set strength (amount) {
    this.count.count = amount // set the innertext
    localStorage.setItem('beagleStr', +amount) // save it
  }

  onbuy () { // when they buy it
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
}()

export default BiggerBark
