import Achivement from '../lib/achivement.mjs'
import getBruh from '../lib/inc.mjs'
import { currency } from '../config.mjs'
const firstBruh = new Achivement(
  'First ' + currency,
  'Click the beagle for the first time'
)

document.getElementById('beagle').addEventListener('click', () => {
  if (getBruh(0) === 0) {
    firstBruh.progress = 100
  }
})
export default firstBruh
