# How to make upgrades for Bruh Beagle 2

Upgrades are classes extending `Upgrade`

## Stuff you can get in an upgrade

`this.price`: The current price of the upgrade. Can be changed.

## Requirements

Upgrades must have:

1. `meta` method

The `meta` method returns a object, which stores data like:

- A name
- A description (Optional)
- The starting price

They look something like this:

```js
 meta () {
      return {
        name: 'Reload the page, please!',
        desc: 'This will reload the page.',
        startprice: 10
      }
 }
```

## You probably want these

1. `onbuy` method

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

First, we need to go to bottom of the `upgrades` array in `main.js`.
Add a class to the array. This class should extend `Upgrade`.

```js
const upgrades = [
  class Reload extends Upgrade {
  }
]
```

Now, we need some meta info.

```js
const upgrades = [
  class Reload extends Upgrade {
    meta () { // Info about this upgrade.
      return {
        name: 'Reload the page, please!',
        desc: 'This will reload the page.',
        startprice: 10
      }
    }
  }
]
```

Now, this should add an upgrade to the list. However, nothing happens when you buy it!

We gotta add functionality.

```js
const upgrades = [
  class Reload extends Upgrade {
     meta () { // Info about this upgrade.
      return {
        name: 'Reload the page, please!',
        desc: 'This will reload the page.',
        startprice: 10
      }
    }

    onbuy () { // When the user buys our upgrade with bruhs.
      this.price *= 1.5 // Change the price.
      location.reload() // Reload the page.
    }
  }
]
```

Now, replace the upgrades code with this, and you now have your own upgrade!

### Other things you should try

Try making an autoclicker!
The global `inc` function increases the bruh count. Try using it on an setInterval.

<sup>please send a pull request if you do this, and make it save across sessions (btw `constructor` is pretty useful for loading saves inside an upgrade)</sup>