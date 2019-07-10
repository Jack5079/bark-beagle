/* global localStorage, Audio */
var beagleCount = 0
if (localStorage.getItem('beagleSave')) beagleCount = JSON.parse(localStorage.getItem('beagleSave'))
document.body.onclick = () => {
  var a = new Audio('bruh.mp3')
  a.play()
  beagleCount++
  localStorage.setItem('beagleSave', beagleCount)
  document.getElementById('counter').innerText = 'Bruh count: ' + beagleCount
}
