const container = document.getElementById('achivements')
class Achivement {
    bar = document.createElement('progress') // make the bar
  constructor(title = 'Missing title', desc = 'Missing description') {
    this.title = title
    this.desc = desc

    let html = document.createElement('div')

    let h1 = document.createElement('h2')
    h1.innerText = title
    html.appendChild(h1)

    let p = document.createElement('p')
    p.innerText = desc
    html.appendChild(p)
    this.bar.max = 100
    this.bar.value = localStorage.getItem(title.replace(/ /g, '')) || 0
    html.appendChild(this.bar)
    container.appendChild(html)
  }


  get progress () {
    return this.bar.value
  }

  set progress (amount) {
      if (amount == this.progress) return
      if (amount == 100) this.complete()
      this.bar.value = amount
      localStorage.setItem(this.title.replace(/ /g, ''), amount)
  }

  complete() {
    let snack = document.createElement('div')

    snack.style.background = 'darkslategray'
    snack.style.color = 'white'
    snack.style.textAlign = 'center'
    snack.style.borderRadius = '3em'
    snack.style.boxShadow = '0 0 1em lightslategray'
    snack.style.position = 'fixed'
    snack.style.overflow = 'hidden'
    snack.style.width = '50%'
    snack.style.bottom = '50%'
  
    let name = document.createElement('h3')
    name.innerText = this.title
    snack.appendChild(name)

    let desc = document.createElement('small')
    desc.innerText = this.desc
    snack.appendChild(desc)

    document.body.appendChild(snack)


    snack.animate([
      {right: '-50%', filter: 'blur(30px)'},
      {right: '1em', filter: 'blur(0)'}
    ], {
      duration: 2000,
      easing: 'ease-out',
      fill: 'forwards'
    }).onfinish = _=>{
      snack.animate([
        {right: '1em', filter: 'blur(0)'},
        {right: '-50%', filter: 'blur(30px)'}
      ], {
        delay: 5000,
        duration: 2000,
        easing: 'ease-in',
        fill: 'forwards'
      }).onfinish = _=>snack.remove()
    }
  }
}

export default Achivement