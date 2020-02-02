const addRule = (style => {
  var sheet = document.head.appendChild(style).sheet
  return (selector, css) => {
    var propText =
      typeof css === 'string'
        ? css
        : Object.keys(css).map(function (p) {
          return `${p}:${p === 'content' ? `'${css[p]}'` : css[p]}`
        }).join`;\n`
    sheet.insertRule(
      `${selector} {
      ${propText}
    }`,
      sheet.cssRules.length
    )
  }
})(document.createElement('style'))

function random (length) {
  return Array(length)
    .fill()
    .map(() =>
      Math.random()
        .toString(36)
        .replace(/\.|[0-9]/g, '')
        .substr(1, 1)
    )
    .join('')
}

export default class {
  /**
   *
   * @param {String} logo The URL of the image at the left of the counter. URL has the scope of index.html
   * @param {String=} label What users will see if they hover over the counter.
   * @param {String=} suffix What appears after the number.
   * @param {String=} id  Optional ID for the element.
   */
  constructor (logo, label = '', suffix = '', id = random(21)) {
    this.suffix = suffix
    this.html = document.createElement('span')
    this.html.id = id
    addRule(`#${this.html.id}::before`, {
      'background-size': 'cover',
      'background-image': `url("${logo}")`
    })

    addRule(`#${this.html.id}::after`, {
      content: suffix
    })

    this.html.classList.add('counter')
    this.html.innerText = 0 + suffix
    this.html.title = label
    document.body.appendChild(this.html)
  }

  set count (amount) {
    this.html.innerText = amount
  }

  get count () {
    return this.html.innerText
      .split('')
      .filter(e => !isNaN(e))
      .join('')
  }
}
