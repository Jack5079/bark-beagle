/* global localStorage */
import Counter from './counter.mjs'
const counter = (_ => {
  if (document.getElementById('counter')) return document.getElementById('counter') // if it's there, just return it
  const counter = new Counter('assets/speaker.webp', 'Bruh count', ' bruhs') // make a new counter
  counter.html.id = 'counter' // set its id
  return counter.html // return it
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
  counter.innerText = +counter.innerText + (+amount) // Add to the beagle count
  localStorage.setItem('beagleSave', +counter.innerText) // Save the counter
  return +counter.innerText // so it can be used by other stuff
}

export default inc
