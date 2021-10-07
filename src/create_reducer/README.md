# SomeHooks

## CreateReducer

CreateReducer is similar to `createState` but with a Redux-esque reducer function.

Typescript:

```TS
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

const initialState: State = Object.freeze({
  count: 0,
});

const reducer = (state: State = initialState, action: Actions) => {
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

const [state, dispatch] = myReducer(initialState);
```

Javascript:

```JS
const initialState: State = Object.freeze({
  count: 0,
});

const reducer = (state = initialState, action) => {
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

const [state, dispatch] = myReducer(initialState);
```