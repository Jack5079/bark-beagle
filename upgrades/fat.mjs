import Counter from '../lib/counter.mjs'
import Upgrade from '../lib/upgrade.mjs'

const fatBeagle = new class extends Upgrade {
  // All upgrades extend Upgrade.
  constructor (...args) {
    // when upgrade is added to game
    super(...args)
    this.count = new Counter('assets/width.webp', 'Beagle width', 'x')
    this.width = BigInt(localStorage.getItem('width')) || 1n // load the width
    this.count.count = this.width // load the strength
    if (this.width <= 1) {
      this.count.hide()
    }
    if (this.width >= 24879600) {
      this.hide()
    }
  }

  get width () {
    const beagle = document.getElementById('beagle')

    const style = beagle.style.transform || 'scaleX(1)'
    return +style.replace('scaleX(', '').replace(')', '')
  }

  set width (amount) {
    const beagle = document.getElementById('beagle')

    beagle.style.transform = `scaleX(${amount})`

    localStorage.setItem('width', BigInt(amount))

    this.count.count = Math.round(amount)
  }
}({
  name: 'make bark beagle fat',
  desc: 'working 2013',
  startprice: 10n
})

fatBeagle.addEventListener('buy', function () {
  // When your upgrade is bought
  this.width *= BigInt(2)// make the beagle fat
  this.price *= 2n // increase the price
  this.count.show()
  if (this.width >= 24879600n) {
    this.hide()
  } // if the beagle is gone then hide the upgrade
})

const vegan = new Upgrade({
  name: 'go on a  vegan diet',
  desc: 'how to make bark beagle not fat (working 2011)',
  startprice: 10
})
vegan.addEventListener('buy', function () {
  // When your upgrade is bought
  fatBeagle.width = 1 // reset width
  fatBeagle.show() // show the upgrade
  this.price *= 1.1 // increase pric
})
export { fatBeagle, vegan }
