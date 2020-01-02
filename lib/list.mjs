export default (id, html) => {
  if (document.getElementById(id)) {
    return document
      .getElementById(id)
      .appendChild.bind(document.getElementById(id))
  }
  const details = document.createElement('details')
  const summary = document.createElement('summary')
  summary.innerHTML = html
  details.appendChild(summary)
  details.id = id
  document.getElementById('expandables').appendChild(details)
  return details.appendChild.bind(details)
}
