/**
 * @license
 * Copyright (c) 2021 The SomeHooks Project Authors. All rights reserved.
 */

import {hasChanged} from './identity_walk.js';

describe('hasChanged', () => {
  it('returns false with empty arguments', () => {
    const result = hasChanged();
    expect(result).toBe(true);
  });

  it('returns false with only one empty array', () => {
    const result = hasChanged([], undefined);
    expect(result).toBe(true);

    const anotherResult = hasChanged(undefined, []);
    expect(anotherResult).toBe(true);
  });

  it('returns true with two empty arrays', () => {
    const result = hasChanged([], []);
    expect(result).toBe(false);
  });

  it('returns false with one empty array and one non-empty array', () => {
    const result = hasChanged([], ['hello!']);
    expect(result).toBe(true);

    const anotherResult = hasChanged(['hello!'], []);
    expect(anotherResult).toBe(true);
  });

  it('returns false with unsimilar arrays', () => {
    const result = hasChanged(['hey there'], ['sunshine!']);
    expect(result).toBe(true);

    const anotherResult = hasChanged(['you are'], ['super awesome!']);
    expect(anotherResult).toBe(true);
  });

  it('returns true with similar arrays', () => {
    const result = hasChanged(
        ['hey there', 'A', 1, undefined], ['hey there', 'A', 1, undefined]);
    expect(result).toBe(false);

    const anotherResult =
        hasChanged(['you are', 'super awesome'], ['you are', 'super awesome']);
    expect(anotherResult).toBe(false);
  });
});
