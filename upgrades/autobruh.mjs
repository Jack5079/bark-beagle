/* global localStorage */
import Upgrade from '../lib/upgrade.mjs'
import increase from '../lib/inc.mjs'
import { currency } from '../config.mjs'

let bruhs = +localStorage.getItem('autobruhs') || 0

for (let i = 0; i < bruhs; i++) {
  setInterval(() => {
    increase(bruhs)
  }, 1000)
}

const up = new Upgrade({
  name: `Auto ${currency}`,
  desc: `Increases your ${currency} count by one, every second.`,
  startprice: 30
})

up.addEventListener('buy', function () {
  setInterval(() => {
    increase(bruhs)
  }, 1000)
  bruhs++
  localStorage.setItem('autobruhs', bruhs)
  this.price *= 1.5
})
