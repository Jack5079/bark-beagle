/* global localStorage, Audio, BigInt */

// Import the achivements
import './achivements/bagel.mjs'
import './achivements/firstBruh.mjs'
import './achivements/ogBruh.mjs'

import load from './lib/inc.mjs' // Load the counter increase

// Load upgrades
import './upgrades/autobruh.mjs' // auto bruh
import './upgrades/biggerbark.mjs' // bigger bark
import './upgrades/credits.mjs'
import './upgrades/fat.mjs' // make bruh beagle fat & vegan diet
import './upgrades/happynewyear.mjs' // Happy new year!!!

const sound = './assets/sound.mp3' // Path to the "Bruh!" sound
/**
 * @param {number} chance
 */
function chance (chance) {
  return () => Math.floor(Math.random() * chance) + 1 === 1
}
const bruhchance = chance(500)
load(BigInt(localStorage.getItem('beagleSave') || 0))

const audio = new Audio(sound) // play a bark sound
/**
 * @type {HTMLImageElement}
 */
const dog = document.querySelector('img#beagle')
// onclick
dog.addEventListener('click', () => {
  // When the user clicks
  audio.currentTime = 0 // Go back to the start
  audio.play() // Play the sound
  audio.onplay = () => {
    // When it starts
    if (bruhchance()) {
      // 1 in 50 chance
      dog.src = './assets/bagel.webp'
    } else {
      dog.src = './assets/bark.webp'
    } // Switch to the barking picture if it wasn't the bagel
  }
  audio.onended = _ => {
    dog.src = './assets/beg.webp'
  } // Switch to the begging picture (the default)
  load(1) // add 1 to the bruh count
})
