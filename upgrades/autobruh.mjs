import Upgrade from '../lib/upgrade.mjs'
import { currency } from '../config.mjs'
import increase from '../lib/inc.mjs'

let bruhs = +localStorage.getItem('autobruhs') || 0

for (let i = 0; i < bruhs; i++) {
  setInterval(() => {
    increase(bruhs)
  }, 1000)
}

const up = new Upgrade({
  name: `Auto ${currency}`,
  desc: `Increases your ${currency} count by one, every second.`,
  startprice: 30n
})

up.addEventListener('buy', function () {
  setInterval(() => {
    increase(bruhs)
  }, 1000)
  bruhs++
  localStorage.setItem('autobruhs', bruhs)
  this.price *= 2n
})
