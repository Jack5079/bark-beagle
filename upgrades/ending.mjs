import Upgrade from '../lib/upgrade.mjs'

class Ending extends Upgrade {
  meta () {
    return {
      name: 'See the credits',
      desc: 'You win!',
      startprice: 69420
    }
  }

  onbuy () {
    const credits = document.createElement('div')
    credits.style.background = 'black'
    credits.style.color = 'white'
    credits.style.position = 'fixed'
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

export default new Ending()
