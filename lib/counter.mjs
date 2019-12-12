var addRule = (style => {
  var sheet = document.head.appendChild(style).sheet
  return (selector, css) => {
    var propText = typeof css === 'string' ? css : Object.keys(css).map(function (p) {
      return `${p}:${p === 'content' ? `'${css[p]}'` : css[p]}`
    }).join`;`
    sheet.insertRule(`${selector}{${propText}}`, sheet.cssRules.length)
  }
})(document.createElement('style'))

export default class {
  constructor (logo, label) {
    this.html = document.createElement('span')
    this.html.id = (Math.random().toString(36) + Math.random().toString(36)).replace(/\./g, '').replace(/[0-9]/g, '')
    addRule(`#${this.html.id}::before`, {
      'background-size': 'cover',
      'background-image': `url("${logo}")`
    })
    this.html.classList.add('counter')
    this.html.innerText = 0
    this.html.title = label || ''
    this.html.setAttribute('aria-label', label || '')
    document.body.appendChild(this.html)
  }

  set count (amount) {
    this.html.innerText = amount
  }

  get count () {
    return this.html.innerText
  }
}
