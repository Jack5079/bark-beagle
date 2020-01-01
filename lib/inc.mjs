/* global localStorage */
import Counter from './counter.mjs'
import { currencyPlural, currency } from '../config.mjs'
const counter = (_ => {
  if (document.getElementById('counter')) {
    return document.getElementById('counter')
  } // if it's there, just return it
  return new Counter(
    'assets/speaker.webp',
    `${currency} count`,
    ` ${currencyPlural}`,
    'counter'
  ) // make a new counter if it isn't there
})()
/**
 * Increases the bruh counter.
 * @author Jack5079
 *
 * @param {number} The amount of bruhs you want to add
 *
 * @returns {number} The amount of bruhs the counter has.
 */
function inc (amount = 0) {
  if (isNaN(+counter.innerText)) counter.innerText = '0'
  counter.count -= -amount // Add to the beagle count
  localStorage.setItem('beagleSave', counter.count) // Save the counter
  return counter.count // so it can be used by other stuff
}

export default inc
