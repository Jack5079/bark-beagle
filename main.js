/* global localStorage, Audio */
let beagleCount = 0 // Init the counter
let strength = 1
let biggerBarkCost = 30
if ( 'beagleSave' in localStorage ) beagleCount = JSON.parse( localStorage.getItem( 'beagleSave' ) )
if ( 'beagleStr' in localStorage ) strength = JSON.parse( localStorage.getItem( 'beagleStr' ) )

document.getElementById( 'counter' ).innerText = 'Bruh count: ' + beagleCount // Show that count to the user
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

document.querySelector( '#beagle' ).addEventListener( 'click', e => { // When the user clicks

  new Audio( 'sound.mp3' ).play()
  inc( strength )
  clearTimeout( window.revert )
  if ( ( Math.floor( Math.random() * 50 ) + 1 ) === 20 ) {
    document.getElementById( 'beagle' ).src = './bagel.jpg' // Switch to the bagel picture
  } else document.getElementById( 'beagle' ).src = './bark.png' // Switch to the barking picture
  window.revert = setTimeout( () => {
    document.getElementById( 'beagle' ).src = './beg.png' // Switch to the begging picture (the default)
  }, 1000 )
} )




class Upgrade {
  constructor () {
    let holder = document.createElement( 'div' )

    let title = document.createElement( 'h2' )
    title.innerText = this.meta().name
    holder.appendChild( title )

    let desc = document.createElement( 'p' )
    desc.innerText = this.meta().desc
    holder.appendChild( desc )

    let price = document.createElement( 'span' )
    if ( this.meta().name in localStorage ) price.innerText = localStorage.getItem( this.meta().name )
    price.innerText = this.meta().startprice

    price.classList.add( 'price' )
    holder.appendChild( price )

    let button = document.createElement( 'button' )
    button.innerText = 'Buy'
    button.addEventListener( 'click', () => {
      if ( beagleCount >= price.innerText ) {
        inc( -parseInt( price.innerText ) )
        this.onbuy( price )

      }
    } )
    holder.appendChild( button )
    document.querySelector( 'details' ).appendChild( holder )
    this.html = holder
  }

}
class BiggerBark extends Upgrade {
  constructor () {
    super()
    // idk
  }

  onbuy ( costhtml ) {
    costhtml.innerText = parseInt( costhtml.innerText ) * 1.5
    strength++
    document.querySelector( '#strength' ).innerText = 'Bruh strength: ' + strength
    localStorage.setItem( 'beagleStr', strength )
    localStorage.setItem( this.meta().name, price.innerText )
  }

  meta () {
    return {
      name: 'Bigger Bark',
      desc: 'Increases your bruh strength ( bruhs on click ) by one.',
      startprice: 30
    }
  }
}

new BiggerBark()