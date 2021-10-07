/**
 * @license
 * Copyright (c) 2021 The SomeHooks Project Authors. All rights reserved.
 */

import {createReducer} from './create_reducer';

interface IncrementAction {
  type: 'INCREMENT';
}

interface DecrementAction {
  type: 'DECREMENT';
}

type Actions = IncrementAction|DecrementAction;

interface State {
  count: number;
}

describe('createReducer', () => {
  let updatedCount: number = 0;

  const reflectStateChange = () => {
    updatedCount += 1;
  };

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
        return {...defaultState};
    }
  };

  it('returns state and dispatch', () => {
    const useReducer = createReducer<State, Actions>(reflectStateChange);

    let [state, dispatch] = useReducer(reducer, defaultState);

    expect(state.count).toBe(0);
    expect(updatedCount).toBe(0);

    dispatch({type: 'INCREMENT'});
    dispatch({type: 'INCREMENT'});

    [state, dispatch] = useReducer(reducer, defaultState);

    expect(state.count).toBe(2);
    expect(updatedCount).toBe(2);

    dispatch({type: 'DECREMENT'});
    dispatch({type: 'DECREMENT'});
    dispatch({type: 'DECREMENT'});

    [state, dispatch] = useReducer(reducer, defaultState);

    expect(state.count).toBe(-1);
    expect(updatedCount).toBe(5);
  });
});
