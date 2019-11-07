/* global localStorage, Audio */
let beagleCount = (+localStorage.getItem('beagleSave')) || 0 // Load the beagle count

/**
 * Increases the bruh counter.
 * @author Jack5079
 *
 * @param Number amount
 */
function inc (amount) {
  beagleCount += amount // Add to the beagle count
  localStorage.setItem('beagleSave', beagleCount) // Save the counter
  document.getElementById('counter').innerText = beagleCount // Show that count to the user
}


inc(0) // Load the counter

class Upgrade {
  constructor() {
    this.html = document.createElement('div') // the main div. where the upgrade is stored

    let title = document.createElement('h2') // the title. this is where users will see the name
    title.innerText = this.meta().name // add the title from meta
    this.html.appendChild(title) // add it to the div

    let desc = document.createElement('p') // the description. this is where users will see what it does
    desc.innerText = this.meta().desc // add the desc from meta
    this.html.appendChild(desc) // add it to the div

    let price = document.createElement('span') // the price span. this is very important; changing this will change the actual price.
    price.innerText = this.meta().startprice // add the price

    price.classList.add('price') // add a class to it so it puts 'Costs ' before it and ' bruhs' after it
    this.html.appendChild(price) // add it to the div

    let button = document.createElement('button') // the button. this is where they actually buy it
    button.innerText = 'Buy' // make it say "buy"
    button.addEventListener('click', () => { // when the user clicks it
      if (beagleCount >= this.price) { // if they can buy it
        inc(-this.price) // remove the price from the bruh count
        this.onbuy() // activate onbuy
      }
    })
    this.html.appendChild(button) // add the button to the div

    document.querySelector('details').appendChild(this.html) // add the upgrade to the list
  }

  get price () { // this is where upgrades can see the price
    return +this.html.querySelector('span').innerText // return the price innerText
  }

  set price (amount) { // this is how upgrades change the price
    this.html.querySelector('span').innerText = +amount // change the innerText to a number
  }

  toString () { // stuff like ''+upgrade
    return `${this.meta().name}
${this.meta().desc}
Costs ${this.price} bruhs`
  }


  // Now, for the fallbacks:
  meta () { // when the upgrade doesn't provide meta()
    return {
      name: 'Error!',
      desc: 'The creator of this upgrade forgot to fill in the meta info.',
      startprice: 0
    }
  }

  onbuy () { // when the upgrade doesn't provide onbuy()
    alert('The creator of this upgrade forgot to make onbuy code.')
  }
}


let BiggerBark = new class extends Upgrade { // A bigger bark.

  constructor() { // Runs on load.
    super() // MUST PUT SUPER FOR UPGRADES TO WORK
    let strengthtml = document.createElement('span') // the html counter
    strengthtml.id = 'strength' // add the id
    strengthtml.innerText =  +localStorage.getItem('beagleStr') || 1 // load the strength
    strengthtml.classList.add('counter') // add counter class
    document.body.appendChild(strengthtml) // add to body
    
    document.getElementById('beagle').addEventListener('click', () => { // Add the actual upgrade; this gives you the bigger bark.
      inc(this.strength - 1) // add strength - 1 to the bruh count (- 1 is so we can account for the builtin onclick)
    }) 
  }

  onbuy (price) { // when they buy it
    this.price *= 1.5 // almost double the price
    this.strength++ // add to the strength
  }

  meta () { // info about bigger bark
    return {
      name: 'Bigger Bark',
      desc: 'Increases your bruh strength ( bruhs on click ) by one.',
      startprice: 30
    }
  }


  get strength () {
    return +document.getElementById('strength').innerText // return the bruh strength innertext
  }

  set strength (amount) {
     document.getElementById('strength').innerText = +amount // set the innertext
     localStorage.setItem('beagleStr', +amount) // save it
  }
}

new class extends Upgrade { // All upgrades extend Upgrade.
    meta () { // Info about your upgrade.
      return {
    "name": "make bruh beagle fat",
    "desc": "working 2012",
    "startprice": 10
}
    }
    onbuy () { // When your upgrade is bought
      let beagle = document.getElementById('beagle')
beagle.style.transform = 'scaleX(4)'
    }
  }

document.getElementById('beagle').addEventListener('click', e => { // When the user clicks
  new Audio('sound.mp3').play() // play a bruh sound
  inc(1) // add 1 to the bruh count
  clearTimeout(window.revert) // remove the timeout if it's there
  if ((Math.floor(Math.random() * 50) + 1) === 20) { // 1 in 50 chance
    document.getElementById('beagle').src = './bagel.jpg' // Switch to the bagel picture
  } else document.getElementById('beagle').src = './bark.png' // Switch to the barking picture if it wasn't the bagel
  window.revert = setTimeout(() => { // 1 second later
    document.getElementById('beagle').src = './beg.png' // Switch to the begging picture (the default)
  }, 1000)
})
