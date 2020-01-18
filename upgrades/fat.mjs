/* global localStorage */
import Counter from '../lib/counter.mjs'
import Upgrade from '../lib/upgrade.mjs'

const fatBeagle = new (class extends Upgrade {
  // All upgrades extend Upgrade.
  constructor (...args) {
    // when upgrade is added to game
    super(...args)
    this.count = new Counter('assets/width.webp', 'Beagle width', 'x')
    this.width = localStorage.getItem('width') || 1 // load the width
    this.count.count = this.width // load the strength
    if (this.width >= 24879600) this.hide()
  }

  onbuy () {
    // When your upgrade is bought
    this.width *= 1.5 // make the beagle fat
    this.price *= 1.1 // increase the price

    if (this.width >= 24879600) this.hide() // if the beagle is gone then hide the upgrade
  }

  get width () {
    const beagle = document.getElementById('beagle')

    const style = beagle.style.transform || 'scaleX(1)'
    return +style.replace('scaleX(', '').replace(')', '')
  }

  set width (amount) {
    const beagle = document.getElementById('beagle')

    beagle.style.transform = `scaleX(${amount})`

    localStorage.setItem('width', +amount)

    this.count.count = Math.round(amount)
  }
})({
  name: 'make bark beagle fat',
  desc: 'working 2013',
  startprice: 10
})

const vegan = new (class extends Upgrade {
  // All upgrades extend Upgrade.
  onbuy () {
    // When your upgrade is bought
    fatBeagle.width = 1 // reset width
    fatBeagle.show() // show the upgrade
    this.price *= 1.1 // increase price
  }
})({
  name: 'go on a vegan diet',
  desc: 'how to make bark beagle not fat (working 2011)',
  startprice: 10
})

export { fatBeagle, vegan }
