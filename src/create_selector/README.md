# SomeHooks

## CreateSelector

CreateSelector returns the most recent targeted value of a store.

Typescript:

```TS
const mySelector = createSelector<State, ReturnType>(() => getState());

const selected = mySelector((state) => {
  return state.some.nested.property;
});
```

Javascript:

```JS
const mySelector = createSelector(() => getState());

const selected = mySelector((state) => {
  return state.some.nested.property;
});
```