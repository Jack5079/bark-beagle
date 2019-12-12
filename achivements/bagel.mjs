import Achivement from '../lib/achivement.mjs'

const bagelAch = new Achivement('Bruh Bagel', 'See the super rare bagel for the first time')

document.getElementById('beagle').addEventListener('click', () => {
  setTimeout(() => {
    if (document.getElementById('beagle').src.includes('bagel')) {
      bagelAch.progress = 100
    }
  })
})

export default bagelAch
