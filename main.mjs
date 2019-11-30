/* global localStorage, Audio */

import load from './lib/inc.mjs'

load((+localStorage.getItem('beagleSave')) || 0) // Load the counter

// Import the upgrades
import './upgrades/width.mjs' // make bruh beagle fat & vegan diet
import './upgrades/strength.mjs' // bigger bark
import './upgrades/autobruh.mjs' // auto bruh

// Import the achivements
import './achivements/firstBruh.mjs'
import './achivements/bagel.mjs'

// onclick
document.getElementById('beagle').addEventListener('click', () => { // When the user clicks
  if ('aud' in window) aud.pause()
  window.aud = new Audio('sound.mp3') // play a bruh sound
  aud.play()
  aud.onended = () =>  document.getElementById('beagle').src = './beg.png' // Switch to the begging picture (the default)
  load(1) // add 1 to the bruh count
  if ((Math.floor(Math.random() * 500) + 1) === 20) // 1 in 50 chance
    document.getElementById('beagle').src = './bagel.jpg' // Switch to the bagel picture
  else document.getElementById('beagle').src = './bark.png' // Switch to the barking picture if it wasn't the bagel
})
