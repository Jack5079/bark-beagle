import Upgrade from '../lib/upgrade.mjs'

class Ending extends Upgrade {
  onbuy () {
    const credits = document.createElement('div')
    credits.style = 'backdrop-filter: blur(50px)'
    credits.style.color = 'white'
    credits.style.display = 'inline-block'
    credits.style.borderRadius = '1em'
    credits.innerText = 'made by jack5079 - haha beagle funny'

    credits.style.padding = '1em'
    const exit = document.createElement('button')
    exit.innerText = 'Close'
    exit.style.float = 'right'
    exit.addEventListener('click', _ => credits.remove())
    credits.appendChild(exit)
    document.body.appendChild(credits)
  }
}

export default new Ending({
  name: 'See the credits',
  desc: 'You win!',
  startprice: 69420
})
