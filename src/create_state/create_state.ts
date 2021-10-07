/**
 * @license
 * Copyright (c) 2021 The SomeHooks Project Authors. All rights reserved.
 */

type RequestUpdate = () => void;
type SetState<T> = (value: T) => void;
type UpdateState<T> = (updatedState: T) => [T, SetState<T>];
type CreateState = <T>(requestUpdate: RequestUpdate) => UpdateState<T>;

const createState: CreateState = <T>(requestUpdate: RequestUpdate) => {
  let hasSetInitialValue = false;
  let state: T;

  const setState: SetState<T> = (updatedState: T) => {
    state = updatedState;
    requestUpdate();
  };

  const updateState: UpdateState<T> = (initialState: T) => {
    if (!hasSetInitialValue) {
      hasSetInitialValue = true;
      state = initialState;
    }

    return [state, setState];
  };

  return updateState;
};

export {createState};

export type{RequestUpdate};
