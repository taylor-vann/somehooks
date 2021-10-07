# SomeHooks

## CreateState

CreateState retains a slice of state and requests updates to a given function
stack.

Typescript:

```ts
const myState = createState<number>(requestUpdate);

const [state, setState] = myState(0);
```

Javascript:

```js
const myState = createState(requestUpdate);

const [state, setState] = myState(0);
```

### More Reactive Hooks

Checkout some more
[reactive hooks](https://github.com/taylor-vann/somehooks#reactive-hooks)
