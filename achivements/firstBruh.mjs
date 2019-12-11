import Achivement from '../lib/achivement.mjs'
import getBruh from '../lib/inc.mjs'

const firstBruh = new Achivement('First bruh', 'Click the beagle for the first time')

document.getElementById('beagle').addEventListener('click', () => {
  if (getBruh(0) === 0) {
    firstBruh.progress = 100
  }
})
export default firstBruh
