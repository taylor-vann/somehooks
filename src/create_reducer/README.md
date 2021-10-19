# SomeHooks

## CreateReducer

CreateReducer is similar to `createState` but with a Redux-esque reducer
function.

Typescript:

```ts
interface IncrementAction {
  type: 'INCREMENT';
}

interface DecrementAction {
  type: 'DECREMENT';
}

type Actions = IncrementAction | DecrementAction;

interface State {
  count: number;
}

const defaultState: State = Object.freeze({
  count: 0,
});

const reducer = (state: State = defaultState, action: Actions) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    default:
      return {...state};
  }
};

const myReducer = createReducer<State, Actions>(() => requestUpdate());

const [state, dispatch] = myReducer(reducer, defaultState);
```

Javascript:

```js
const defaultState: State = Object.freeze({
  count: 0,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    default:
      return {...state};
  }
};

const myReducer = createReducer(() => requestUpdate());

const [state, dispatch] = myReducer(reducer, defaultState);
```

### More Reactive Hooks

Checkout some more
[reactive hooks](https://github.com/taylor-vann/somehooks#reactive-hooks)
