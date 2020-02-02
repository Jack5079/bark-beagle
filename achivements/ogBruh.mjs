/* global localStorage */

import Achivement from '../lib/achivement.mjs'

const achivement = new Achivement(
  'Bruh Beagle',
  'Play Bruh Beagle (The first one)'
)

if ('bruh' in localStorage) {
  achivement.progress = 100
}

export default achivement
