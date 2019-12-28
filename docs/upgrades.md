# How to make upgrades for Bruh Beagle 2

_Go to [Bruh Beagle Upgrade Maker](https://jack5079.github.io/bruh-beagle-upgrade-maker) if you don't want to learn all of this_

Upgrades are classes extending `Upgrade`

## Properties of an upgrade

`this.price`: The current price of the upgrade. Can be changed.

`this.html`: The `<div>` containing the upgrade.

## Requirements

Upgrades must have:

### `meta` argument

The `meta` argument is an object, which stores data like:

- A name
- A description (Optional)
- The starting price

They look something like this:

```js
new MyUpgrade({
  name: 'Reload the page, please!',
  desc: 'This will reload the page.',
  startprice: 10
})
```

### `onbuy` method

`onbuy` is called whenever the upgrade is bought.

This is probably where you will activate your effects, and change `this.price`.

They look like this:

```js
    onbuy () {
      this.price *= 1.5 // Change the price.
      location.reload() // Reload the page.
    }
```

`onbuy` will only be called when all these conditions are met:

- The user has enough bruhs to buy your upgrade at your price
- They press the buy button

## Your first upgrade

Right click the background, and press "Inspect". Click console.

Before we start, we need to import Upgrade:

```js
import('./lib/upgrade.mjs').then(mod => {
  globalThis.Upgrade = mod.default
})
```

Now, let's define a new class.
This class should extend `Upgrade`.

```js
new (class Reload extends Upgrade {})()
```

Now, we need some meta info.

```js
new (class Reload extends Upgrade {})({
  name: 'Reload the page, please!',
  desc: 'This will reload the page.',
  startprice: 10
})
```

Now, this should add an upgrade to the list. However, nothing happens when you buy it!

We gotta add functionality.

```js
new (class Reload extends Upgrade {
  onbuy () {
    // When the user buys our upgrade with bruhs.
    this.price *= 1.5 // Change the price.
    location.reload() // Reload the page.
  }
})({
  name: 'Reload the page, please!',
  desc: 'This will reload the page.',
  startprice: 10
})
```

Now, run this in the console, and you now have your own upgrade!
