# SomeHooks

## CreateMemo

All hooks are based on the *memo* pattern.

Typescript:

```ts
const myMemo = createMemo<number>()

const myCachedValue = myMemo(() => {
  return calculateExpensiveNumber();
}, ["when", "identities", "change"])
```

Javascript:

```js
const myMemo = createMemo()

const myCachedValue = myMemo(() => {
  return calculateExpensiveNumber();
}, ["when", "identities", "change"])
```

### More Passive Hooks

Checkout some more
[passive hooks](https://github.com/taylor-vann/somehooks#passive-hooks)
