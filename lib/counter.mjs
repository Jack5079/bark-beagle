var addRule = (style => {
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

export default class {
  /**
   *
   * @param logo {String} The URL of the image at the left of the counter. URL has the scope of index.html
   * @param label {String} What users will see if they hover over the counter.
   * @param suffix {String} What appears after the number.
   * @param overwriteid {String} Optional ID for the element.
   */
  constructor (logo, label, suffix, overwriteid) {
    this.suffix = suffix
    this.html = document.createElement('span')
    this.html.id = (Math.random().toString(36) + Math.random().toString(36))
      .replace(/\./g, '')
      .replace(/[0-9]/g, '')
    if (overwriteid) this.html.id = overwriteid
    addRule(`#${this.html.id}::before`, {
      'background-size': 'cover',
      'background-image': `url("${logo}")`
    })

    this.html.classList.add('counter')
    this.html.innerText = 0 + suffix
    this.html.title = label || ''
    document.body.appendChild(this.html)
  }

  set count (amount) {
    this.html.innerText = amount + this.suffix
  }

  get count () {
    return this.html.innerText.split``.filter(e => !isNaN(e)).join``
  }
}
