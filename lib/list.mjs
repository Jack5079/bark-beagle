export default function (id, html) {
  if (document.getElementById(id)) return document.getElementById(id)
  const list = document.createElement('details')
  const summary = document.createElement('summary')
  summary.innerHTML = html
  list.appendChild(summary)
  list.id = 'list'
  document.getElementById('expandables').appendChild(list)
  return list
}
