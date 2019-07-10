/* global localStorage, Audio */

var beagleCount = 0 // Init the counter
if (localStorage.getItem('beagleSave')) { // If there's a save
  beagleCount = JSON.parse(localStorage.getItem('beagleSave')) // Change the count to the save
  document.getElementById('counter').innerText = 'Bruh count: ' + beagleCount // Show that count to the user
}

document.body.onmouseup = () => { // When the user clicks
  var a = new Audio('sound.mp3') // Init the sound
  a.play() // Play that sound
  beagleCount++ // Add to the beagle count
  localStorage.setItem('beagleSave', beagleCount) // Save the counter
  document.getElementById('counter').innerText = 'Bruh count: ' + beagleCount // Update the displayed count
}
