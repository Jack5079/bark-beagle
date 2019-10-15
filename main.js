/* global localStorage, Audio */
let beagleCount = ( +localStorage.getItem( 'beagleSave' ) ) || 0 // Load the beagle count

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


inc( 0 ) // Load the counter

class Upgrade {
  constructor () {
    this.html = document.createElement( 'div' )

    let title = document.createElement( 'h2' )
    title.innerText = this.meta().name
    this.html.appendChild( title )

    let desc = document.createElement( 'p' )
    desc.innerText = this.meta().desc
    this.html.appendChild( desc )

    let price = document.createElement( 'span' )
    if ( this.meta().name.replace( / /g, '' ) in localStorage ) price.innerText = +localStorage.getItem( this.meta().name.replace( / /g, '' ) )
    price.innerText = this.meta().startprice

    price.classList.add( 'price' )
    this.html.appendChild( price )

    let button = document.createElement( 'button' )
    button.innerText = 'Buy'
    button.addEventListener( 'click', () => {
      if ( beagleCount >= price.innerText ) {
        inc( -parseInt( price.innerText ) )
        this.onbuy()

      }
    } )
    this.html.appendChild( button )
    document.querySelector( 'details' ).appendChild( this.html )
    this.html = this.html
  }

  get price () {
    return +this.html.querySelector( 'span' ).innerText
  }

  set price ( amount ) {
    this.html.querySelector( 'span' ).innerText = +amount
  }
}

let upgrades = [ // A list of upgrades.
  class BiggerBark extends Upgrade {

    constructor () { // Runs on load.
      super() // MUST PUT SUPER FOR UPGRADES TO WORK
      this.strength = parseInt( localStorage.getItem( 'beagleStr' ) ) || 1 // Load strength
      document.getElementById( 'strength' ).innerText = `Bruh strength: ${ this.strength }` // Display strength
      document.getElementById( 'beagle' ).addEventListener( 'click', () => { inc( this.strength - 1 ) } )
    }
    onbuy ( price ) {
      this.price *= 1.5
      this.strength++
      document.getElementById( 'strength' ).innerText = 'Bruh strength: ' + this.strength
      localStorage.setItem( 'beagleStr', this.strength )
    }

    meta () {
      return {
        name: 'Bigger Bark',
        desc: 'Increases your bruh strength ( bruhs on click ) by one.',
        startprice: 30
      }
    }
  }
]

upgrades = upgrades.map( cl => new cl ) // Load all of the upgrades.


document.getElementById( 'beagle' ).addEventListener( 'click', e => { // When the user clicks

  new Audio( 'sound.mp3' ).play()
  inc( 1 )
  clearTimeout( window.revert )
  if ( ( Math.floor( Math.random() * 50 ) + 1 ) === 20 ) {
    document.getElementById( 'beagle' ).src = './bagel.jpg' // Switch to the bagel picture
  } else document.getElementById( 'beagle' ).src = './bark.png' // Switch to the barking picture
  window.revert = setTimeout( () => {
    document.getElementById( 'beagle' ).src = './beg.png' // Switch to the begging picture (the default)
  }, 1000 )
} )
