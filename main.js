/* global localStorage, Audio */
let beagleCount = 0 // Init the counter
let strength = 1
let biggerBarkCost = 30
if ( 'beagleSave' in localStorage ) beagleCount = JSON.parse( localStorage.getItem( 'beagleSave' ) )
if ( 'beagleStr' in localStorage ) strength = JSON.parse( localStorage.getItem( 'beagleStr' ) )
if ( 'biggerBarkCost' in localStorage ) biggerBarkCost = JSON.parse( localStorage.getItem( 'biggerBarkCost' ) )

document.getElementById( 'counter' ).innerText = 'Bruh count: ' + beagleCount // Show that count to the user
document.querySelector( '#biggerBarkCost' ).innerText = `${ biggerBarkCost } bruhs`
document.querySelector( '#strength' ).innerText = `Bruh strength: ${ strength }`

/**
 * Increases the bruh counter.
 * @author Jack5079
 *
 * @param Number amount
 */
function inc ( amount ) {
  beagleCount += amount // Add to the beagle count
  localStorage.setItem( 'beagleSave', beagleCount ) // Save the counter
  document.getElementById( 'counter' ).innerText = `Bruh count: ${ beagleCount }` // Show that count to the user
}

document.querySelector( '#beagle' ).onclick = function () { // When the user clicks

  new Audio( 'sound.mp3' ).play()
  inc( strength )
  clearTimeout( window.revert )
  if ( ( Math.floor( Math.random() * 50 ) + 1 ) === 20 ) {
    document.getElementById( 'beagle' ).src = './bagel.jpg' // Switch to the bagel picture
  } else document.getElementById( 'beagle' ).src = './bark.png' // Switch to the barking picture
  window.revert = setTimeout( () => {
    document.getElementById( 'beagle' ).src = './beg.png' // Switch to the begging picture (the default)
  }, 1000 )
}

document.querySelector( '#biggerBark' ).onclick = () => {
  if ( beagleCount >= biggerBarkCost ) {
    beagleCount -= biggerBarkCost
    strength++
    document.querySelector( '#strength' ).innerText = `Bruh strength: ${ strength }`
    biggerBarkCost *= 2
    document.getElementById( 'counter' ).innerText = `Bruh count: ${ beagleCount }` // Show that count to the user
    document.querySelector( '#biggerBarkCost' ).innerText = `${ biggerBarkCost } bruhs`
    localStorage.setItem( 'beagleStr', strength )
    localStorage.setItem( 'beagleSave', beagleCount ) // Save the counter
    localStorage.setItem( 'biggerBarkCost', biggerBarkCost )
  }
}
