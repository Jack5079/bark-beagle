/* global localStorage */
import Upgrade from '../lib/upgrade.mjs'
import increase from '../lib/inc.mjs'
import { currency } from '../config.mjs'
class AutoBruh extends Upgrade {
  constructor (...args) {
    super(...args)
    for (let i = 0; i < this.bruhs; i++) {
      setInterval(() => {
        increase(this.bruhs)
      }, 1000)
    }
  }

  onbuy () {
    setInterval(() => {
      increase(this.bruhs)
    }, 1000)
    this.bruhs++
    this.price *= 1.5
  }

  get bruhs () {
    return +localStorage.getItem('autobruhs') || 0
  }

  set bruhs (amount) {
    localStorage.setItem('autobruhs', +amount)
  }
}

export default new AutoBruh({
  name: `Auto ${currency}`,
  desc: `Increases your ${currency} count by one, every second.`,
  startprice: 30
})
