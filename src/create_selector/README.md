# SomeHooks

## CreateSelector

CreateSelector returns the most recent targeted value of a store.

Typescript:

```ts
const mySelector = createSelector<State, ReturnType>(() => getState());

const selected = mySelector((state) => {
  return state.some.nested.property;
});
```

Javascript:

```js
const mySelector = createSelector(() => getState());

const selected = mySelector((state) => {
  return state.some.nested.property;
});
```

### More Passive Hooks

Checkout some more
[passive hooks](https://github.com/taylor-vann/somehooks#passive-hooks)
