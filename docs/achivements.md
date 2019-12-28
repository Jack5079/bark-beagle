# How to make achivements for Bruh Beagle 2

```js
// If you can't make upgrades, then achivements are for you!
import('./lib/achivement.mjs').then(module => {
  const myAchivement = new module.default('My achivement', "It's epic!")
  // Now, just change myAchivement.progress to something between 0 and 100. Setting it to 100 will do an achivement
}) // Import achivement
```
