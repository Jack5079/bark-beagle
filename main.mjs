/* global localStorage, Audio */

import load from './lib/inc.mjs' // Load the counter

// Import the upgrades
import './upgrades/width.mjs' // make bruh beagle fat & vegan diet
import './upgrades/strength.mjs' // bigger bark
import './upgrades/autobruh.mjs' // auto bruh
import './upgrades/ending.mjs'

// Import the achivements
import './achivements/firstBruh.mjs'
import './achivements/bagel.mjs'

load((+localStorage.getItem('beagleSave')) || 0)

const audio = new Audio('./assets/sound.mp3') // play a bruh sound
// onclick
document.getElementById('beagle').addEventListener('click', () => { // When the user clicks
  audio.currentTime = 0 // Go back to the start
  audio.play() // Play the sound
  audio.onplay = () => { // When it starts
    if ((Math.floor(Math.random() * 500) + 1) === 20) { // 1 in 50 chance
      document.getElementById('beagle').src = './assets/bagel.webp'
    } else document.getElementById('beagle').src = './assets/bark.webp' // Switch to the barking picture if it wasn't the bagel
  }
  audio.onended = _ => { document.getElementById('beagle').src = './assets/beg.webp' } // Switch to the begging picture (the default)
  load(1) // add 1 to the bruh count
})
