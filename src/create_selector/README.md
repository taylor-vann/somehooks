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

### Custom Comparators

```ts
const comparator: Comparator<ReturnType> = (setA, setB) => {
  // returning true wil always register a change

  return true;
}

const mySelector = createSelector<State, ReturnType>(() => getState());

const selected = mySelector((state) => {
  return state.some.nested.property;
}, comparator);
```

Javascript:

```js
const comparator = (setA, setB) => {
  // returning true wil always register a change

  return true;
}

const mySelector = createSelector(() => getState());

const selected = mySelector((state) => {
  return state.some.nested.property;
}, comparator);
```

### More Passive Hooks

Checkout some more
[passive hooks](https://github.com/taylor-vann/somehooks#passive-hooks)
