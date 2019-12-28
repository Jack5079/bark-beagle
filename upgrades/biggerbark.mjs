/* global localStorage */
import Upgrade from '../lib/upgrade.mjs'
import inc from '../lib/inc.mjs'
import Counter from '../lib/counter.mjs'
import { currency, currencyPlural } from '../config.mjs'

class BiggerBark extends Upgrade {
  // A bigger bark.
  constructor (...args) {
    // Runs on load.
    super(...args) // MUST PUT SUPER FOR UPGRADES TO WORK
    this.count = new Counter(
      'assets/bark.webp',
      `${currencyPlural} on click`,
      ` ${currency}/click`
    )
    this.strength = localStorage.getItem('beagleStr') || 1 // load the strengthadd to body

    document.getElementById('beagle').addEventListener('click', () => {
      // Add the actual upgrade; this gives you the bigger bark.
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

  onbuy () {
    // when they buy it
    this.price *= 1.5 // almost double the price
    this.strength++ // add to the strength
  }
}

export default new BiggerBark({
  name: `Bigger ${currency}`,
  desc: `Increases your ${currency} strength (${currencyPlural} on click) by one.`,
  startprice: 30
})
