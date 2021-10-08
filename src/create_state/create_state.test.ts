/**
 * @license
 * Copyright (c) 2021 The SomeHooks Project Authors. All rights reserved.
 */

import {createState} from './create_state.js';

describe('createState', () => {
  let updatedCount: number = 0;

  const reflectStateChange = () => {
    updatedCount += 1;
  };

  beforeEach(() => {
    updatedCount = 0;
  });

  it('returns state and updateState', () => {
    const useState = createState<number>(reflectStateChange);

    let [state, updateState] = useState(0);

    expect(state).toBe(0);
    expect(updatedCount).toBe(0);

    updateState(state + 1);
    [state, updateState] = useState(12345);

    updateState(state + 1);
    [state, updateState] = useState(67890);

    expect(state).toBe(2);
    expect(updatedCount).toBe(2);

    updateState(state - 1);
    [state, updateState] = useState(-42);

    expect(state).toBe(1);
    expect(updatedCount).toBe(3);
  });
});
