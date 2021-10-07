# SomeHooks

## CreateCallback

CreateCallback caches a function until its identities change.

Typescript and Javascript:

```TS
const myCallback = createCallback()

const updatedCallback = myCallback(() => {
  console.log("updated callback returned");
}, ["update", "when", "identities", "change"])
```