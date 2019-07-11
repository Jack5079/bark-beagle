/* global localStorage, Audio */

var beagleCount = 0 // Init the counter
if (localStorage.getItem('beagleSave')) { // If there's a save
  beagleCount = JSON.parse(localStorage.getItem('beagleSave')) // Change the count to the save
  document.getElementById('counter').innerText = 'Bruh count: ' + beagleCount // Show that count to the user
}

function inc () { // When the user clicks
  var a = new Audio('sound.mp3') // Init the sound
  a.play() // Play that sound
  beagleCount++ // Add to the beagle count
  localStorage.setItem('beagleSave', beagleCount) // Save the counter
  document.getElementById('counter').innerText = 'Bruh count: ' + beagleCount // Update the displayed count
  document.getElementById('beagle').style.transform = 'rotate(180deg)' // Because the barking picture is rotated in-file, we must update the rotation to account for this.
  document.getElementById('beagle').src = './bark.jpg' // Switch to the barking picture
  setTimeout(function () {
    document.getElementById('beagle').style.transform = 'rotate(90deg)' // Revert the rotation
    document.getElementById('beagle').src = './beg.jpg' // Switch to the begging picture (the default)
  }, 1000)
}
