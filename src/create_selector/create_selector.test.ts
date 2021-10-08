/**
 * @license
 * Copyright (c) 2021 The SomeHooks Project Authors. All rights reserved.
 */

import {createSelector} from './create_selector.js';

interface State {
  count: number;
}

const customComparator = (fakeResult: boolean) => () => {
  return fakeResult;
};

describe('createSelector', () => {
  const defaultState: State = {
    count: 13,
  };

  it('returns new default value', () => {
    const useSelector = createSelector<State, number>(() => {
      return defaultState;
    });

    defaultState.count = 13;

    const count = useSelector((state) => {
      return state.count;
    });

    expect(count).toBe(13);
  });

  it('returns updated value', () => {
    const useSelector = createSelector<State, number>(() => {
      return defaultState;
    });

    defaultState.count = 17;

    const count = useSelector((state) => {
      return state.count;
    });

    expect(count).toBe(17);
  });

  it('uses custom comparators', () => {
    const useSelector = createSelector<State, number>(() => {
      return defaultState;
    });

    defaultState.count = 19;

    let count = useSelector((state) => {
      return state.count;
    }, customComparator(false));

    defaultState.count = 17;

    count = useSelector((state) => {
      return state.count;
    }, customComparator(true));

    expect(count).toBe(19);
  });
});
