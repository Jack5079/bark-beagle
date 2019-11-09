/* global localStorage, Audio */

import inc from './lib/inc.mjs'

inc((+localStorage.getItem('beagleSave')) || 0) // Load the counter

// Import the upgrades
import './upgrades/width.mjs'
import './upgrades/strength.mjs'


// onclick
document.getElementById('beagle').addEventListener('click', e => { // When the user clicks
  new Audio('sound.mp3').play() // play a bruh sound
  inc(1) // add 1 to the bruh count
  clearTimeout(window.revert) // remove the timeout if it's there
  if ((Math.floor(Math.random() * 50) + 1) === 20) { // 1 in 50 chance
    document.getElementById('beagle').src = './bagel.jpg' // Switch to the bagel picture
  } else document.getElementById('beagle').src = './bark.png' // Switch to the barking picture if it wasn't the bagel
  window.revert = setTimeout(() => { // 1 second later
    document.getElementById('beagle').src = './beg.png' // Switch to the begging picture (the default)
  }, 1000)
})
