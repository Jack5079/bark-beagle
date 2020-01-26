/* global SpeechSynthesisUtterance, speechSynthesis */
import Upgrade from '../lib/upgrade.mjs'

const date = new Date()

export default (() => {
  if (date.getDate() === 1 && date.getMonth() === 0) {
    return new Upgrade({
      name: "It's " + date.getFullYear(),
      desc: 'Happy new year!',
      startprice: 0
    }).addEventListener('buy', () =>
      speechSynthesis.speak(
        new SpeechSynthesisUtterance(
          `Happy new year! Have a great ${date.getFullYear()}!`
        )
      )
    )
  } else return undefined
})()
