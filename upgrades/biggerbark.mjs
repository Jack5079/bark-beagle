import Counter from '../lib/counter.mjs'
import Upgrade from '../lib/upgrade.mjs'
import { currency, currencyPlural } from '../config.mjs'
import inc from '../lib/inc.mjs'
let strength = BigInt(localStorage.getItem('beagleStr')) || 1n

const up = new Upgrade({
  name: `Bigger ${currency}`,
  desc: `Increases your ${currency} strength (${currencyPlural} on click) by one.`,
  startprice: 30n
})

const count = new Counter(
  'assets/bark.webp',
  `${currencyPlural} on click`,
  ` ${currency}/click`
)
count.count = strength
document.getElementById('beagle').addEventListener('click', () => {
  // Add the actual upgrade; this gives you the bigger bark.
  inc(+strength - 1) // add strength - 1 to the bruh count (- 1 is so we can account for the builtin onclick)
})

up.addEventListener('buy', function () {
  // when they buy it
  this.price *= 2n // almost double the price
  strength *= 2n
  count.count = strength
  localStorage.setItem('beagleStr', +strength)
})

export default up
