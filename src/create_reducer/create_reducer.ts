/**
 * @license
 * Copyright (c) 2021 The SomeHooks Project Authors. All rights reserved.
 */

type RequestUpdate = () => void;
type Reducer<S, A> = (state: S, action: A) => S;
type Dispatcher<A> = (action: A) => void;

type ReduceState<S, A> =
    (reducer: Reducer<S, A>, initialValue: S) => [S, Dispatcher<A>];
type CreateReducer = <S, A>(requestUpdate: RequestUpdate) => ReduceState<S, A>;

const createReducer: CreateReducer = <S, A>(requestUpdate: RequestUpdate) => {
  let hasSetInitialValue = false;
  let state: S;
  let reducer: Reducer<S, A>;

  const dispatch: Dispatcher<A> = (action: A) => {
    state = reducer(state, action);
    requestUpdate();
  };

  const reduceState: ReduceState<S, A> =
      (reducerDelta: Reducer<S, A>, initialValue: S) => {
        if (!hasSetInitialValue) {
          hasSetInitialValue = true;
          state = initialValue;
        }

        reducer = reducerDelta;

        return [state, dispatch];
      };

  return reduceState;
};

export type{Reducer, Dispatcher};

export {createReducer};
