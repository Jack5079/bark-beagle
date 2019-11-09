/**
 * Increases the bruh counter.
 * @author Jack5079
 *
 * @param Number amount
 */
function inc (amount) {
  document.getElementById('counter').innerText = +document.getElementById('counter').innerText + (+amount) // Add to the beagle count
  localStorage.setItem('beagleSave', +document.getElementById('counter').innerText) // Save the counter
  return +document.getElementById('counter').innerText // so it can be used by other stuff
}

export default inc