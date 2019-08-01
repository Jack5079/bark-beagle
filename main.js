import J from 'https://jack5079.github.io/jay/jay.mjs' // import my funny library

let beagleCount = 0 // Init the counter
if (window.localStorage.getItem('beagleSave')) { // If there's a save
  beagleCount = JSON.parse(window.localStorage.getItem('beagleSave')) // Change the count to the save
  document.getElementById('counter').innerText = 'Bruh count: ' + beagleCount // Show that count to the user
}

let randomnum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

J('#beagle').click(function () { // When the user clicks
  if (randomnum(0, 200) === 50) {
    let dog = document.createElement('dialog')
    dog.innerText = 'SUPER RARE BRUH: +100 BRUHS!'
    dog.open = true
    dog.style.zIndex = '100'
    document.body.appendChild(dog)
    setTimeout(function () { dog.remove() }, 5000)
    beagleCount += 100 // Add 100 to the beagle count
  } else {
    beagleCount++ // Add to the beagle count
  }
  new window.Audio('sound.mp3').play()
  window.localStorage.setItem('beagleSave', beagleCount) // Save the counter
  J('#counter').innerText = 'Bruh count: ' + beagleCount // Update the displayed count
  clearTimeout(window.revert)
  J('#beagle').style.transform = 'rotate(180deg)' // Because the barking picture is rotated in-file, we must update the rotation to account for this.
  J('#beagle').src = './bark.jpg' // Switch to the barking picture
  window.revert = setTimeout(function () {
    J('#beagle').style.transform = 'rotate(90deg)' // Revert the rotation
    J('#beagle').src = './beg.jpg' // Switch to the begging picture (the default)
  }, 1000)
})
