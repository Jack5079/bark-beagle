# Bruh Beagle 2 Auto clickers

How about we do something like:

```js
import clicker from './auto.mjs'

class AutoClick extends clicker {
  constructor () {
    super()
    // idk
  }

  onbuy (costhtml) {
    costhtml.innerText = parseInt(costhtml.innerText) * 1.5
  }

  meta () {
    return {
      name: 'Auto clicker',
      desc: 'A cool new clicker',
      startprice: 30
    }
  }
}

export AutoClick
```

btw, auto.mjs would be a class that makes html with a title, button, and description (maybe even triggers onbuy when the button is pressed)
