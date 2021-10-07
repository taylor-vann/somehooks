# SomeHooks

## CreateMemo

All hooks are based on the _memo_ pattern.

Typescript:

```TS
const myMemo = createMemo<number>()

const myCachedValue = myMemo(() => {
  return calculateExpensiveNumber();
}, ["when", "identities", "change"])
```

Javascript:

```JS
const myMemo = createMemo()

const myCachedValue = myMemo(() => {
  return calculateExpensiveNumber();
}, ["when", "identities", "change"])
```