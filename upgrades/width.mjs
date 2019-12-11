/* global localStorage */
import Upgrade from '../lib/upgrade.mjs'

const fatBeagle = new class extends Upgrade { // All upgrades extend Upgrade.
  meta () { // Info about your upgrade.
    return {
      name: 'make bruh beagle fat',
      desc: 'working 2013',
      startprice: 10
    }
  }

  constructor () { // when upgrade is added to game
    super()
    const strengthtml = document.createElement('span') // the html counter
    strengthtml.id = 'width' // add the id
    document.body.appendChild(strengthtml) // add to body

    this.width = localStorage.getItem('width') || 1 // load the width
    strengthtml.innerText = this.width // load the strength
    strengthtml.classList.add('counter') // add counter class
    if (this.width >= 24879600) this.hide()
  }

  onbuy () { // When your upgrade is bought
    this.width *= 1.5 // make the beagle fat
    this.price *= 1.1 // increase the price

    if (this.width >= 24879600) this.hide() // if the beagle is gone then hide the upgrade
  }

  get width () {
    const beagle = document.getElementById('beagle')

    const style = beagle.style.transform || 'scaleX(1)'
    return +style
      .replace('scaleX(', '')
      .replace(')', '')
  }

  set width (amount) {
    const beagle = document.getElementById('beagle')

    beagle.style.transform = `scaleX(${+amount})`

    localStorage.setItem('width', +amount)

    document.getElementById('width').innerText = +amount
  }
}()

const vegan = new class extends Upgrade { // All upgrades extend Upgrade.
  meta () { // Info about your upgrade.
    return {
      name: 'go on a vegan diet',
      desc: 'how to make bruh beagle not fat (working 2011)',
      startprice: 10
    }
  }

  onbuy () { // When your upgrade is bought
    fatBeagle.width = 1 // reset width
    fatBeagle.show() // show the upgrade
    this.price *= 1.1 // increase price
  }
}()

export { fatBeagle, vegan }
