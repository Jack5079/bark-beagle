/* global SpeechSynthesisUtterance, speechSynthesis */
import Upgrade from '../lib/upgrade.mjs'

const date = new Date()

class NewYear extends Upgrade {
  onbuy () {
    // Make it say the year? Idk how though......
    speechSynthesis.speak(
      new SpeechSynthesisUtterance(
        `Happy new year! Have a great ${date.getFullYear()}!`
      )
    )
  }
}

export default (() => {
  if (date.getDate() === 1 && date.getMonth() === 0) {
    return new NewYear({
      name: "It's " + date.getFullYear(),
      desc: 'Happy new year!',
      startprice: 0
    })
  } else return undefined
})()
