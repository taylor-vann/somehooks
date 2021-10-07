# SomeHooks

## CreateState

CreateState retains a slice of state and requests updates to a given function stack.

Typescript:

```TS
const myState = createState<number>(requestUpdate);

const [state, setState] = myState(0);
```

Javascript:

```JS
const myState = createState(requestUpdate);

const [state, setState] = myState(0);
```
