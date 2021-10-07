# SomeHooks

## CreateCallback

CreateCallback caches a function until its identities change.

Typescript and Javascript:

```ts
const myCallback = createCallback()

const updatedCallback = myCallback(() => {
  console.log("updated callback returned");
}, ["update", "when", "identities", "change"])
```

### More Passive Hooks

Checkout some more
[passive hooks](https://github.com/taylor-vann/somehooks#passive-hooks)
