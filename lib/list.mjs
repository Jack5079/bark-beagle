export default class {
  constructor (id, html) {
    if (document.getElementById(id)) return document.getElementById(id)
    this.html = document.createElement('details')
    const summary = document.createElement('summary')
    summary.innerHTML = html
    this.html.appendChild(summary)
    this.html.id = 'list'
    document.getElementById('expandables').appendChild(this.html)
  }

  add (element) {
    this.html.appendChild(element)
  }
}
