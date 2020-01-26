/* global localStorage, alert, EventTarget, Event */
import increase from './inc.mjs'
import list from './list.mjs'
const add = list(
  'auto',
  `Shop
  <!-- Link to Bruh Beagle Upgrade Maker -->
  <a href="/bruh-beagle-upgrade-maker/">+</a>`
)

class Upgrade extends EventTarget {
  constructor (
    { name, desc, startprice } = {
      name: 'Error!',
      desc: 'The creator of this upgrade forgot to fill in the meta info.',
      startprice: 0
    }
  ) {
    super()
    this.events = {}
    this.html = document.createElement('article') // the main div. where the upgrade is stored
    const title = document.createElement('h2') // the title. this is where users will see the name
    title.innerText = name // add the title from meta
    this.html.appendChild(title) // add it to the div

    const descriptionpara = document.createElement('p') // the description. this is where users will see what it does
    descriptionpara.innerText = desc // add the desc from meta
    this.html.appendChild(descriptionpara) // add it to the div

    const price = document.createElement('span') // the price span. this is very important; changing this will change the actual price.
    price.classList.add('price') // add a class to it so it puts 'Costs ' before it and ' bruhs' after it
    this.html.appendChild(price) // add it to the div
    price.innerText = Math.round(
      +localStorage.getItem(title.innerText.replace(/ /g, '')) || +startprice
    ) // add the price

    const button = document.createElement('button') // the button. this is where they actually buy it
    button.type = 'button'
    button.innerText = 'Buy' // make it say "buy"
    button.addEventListener('click', () => {
      // when the user clicks it
      if (increase() >= this.price) {
        // if they can buy it
        increase(-this.price) // remove the price from the bruh count
        this.dispatchEvent(new Event('buy'))
        localStorage.setItem(title.innerText.replace(/ /g, ''), this.price)
      }
    })
    this.html.appendChild(button) // add the button to the div

    add(this.html) // add the upgrade to the list
  }

  get price () {
    // this is where upgrades can see the price
    return +this.html.querySelector('span').innerText // return the price innerText
  }

  set price (amount) {
    // this is how upgrades change the price
    this.html.querySelector('span').innerText = Math.round(+amount) // change the innerText to a number
  }

  show () {
    // shows it
    this.html.style.display = ''
  }

  hide () {
    // hides the upgrade
    this.html.style.display = 'none'
  }

  onbuy () {
    // when the upgrade doesn't provide onbuy()
    alert('The creator of this upgrade forgot to make onbuy code.')
  }
}

export default Upgrade
