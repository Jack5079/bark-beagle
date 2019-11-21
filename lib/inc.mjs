/**
 * Increases the bruh counter.
 * @author Jack5079
 *
 * @param {number} The amount of bruhs you want to add
 * 
 * @returns {number} The amount of bruhs the counter has.
 */
function inc (amount = 0) {
  if (isNaN(+document.getElementById('counter').innerText)) document.getElementById('counter').innerText = '0'
  document.getElementById('counter').innerText = +document.getElementById('counter').innerText + (+amount) // Add to the beagle count
  localStorage.setItem('beagleSave', +document.getElementById('counter').innerText) // Save the counter
  return +document.getElementById('counter').innerText // so it can be used by other stuff
}

export default inc