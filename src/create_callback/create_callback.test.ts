/**
 * @license
 * Copyright (c) 2021 The SomeHooks Project Authors. All rights reserved.
 */

import {createCallback} from './create_callback.js';

describe('createCallback', () => {
  it('returns new callback with empty arguments', () => {
    const useCallback = createCallback();

    const callback = useCallback(() => {});
    const updatedCallback = useCallback(() => {});

    expect(callback).not.toBe(updatedCallback);
  });

  it('returns same callback with empty array', () => {
    const useCallback = createCallback();

    const callback = useCallback(() => {}, []);
    const updatedCallback = useCallback(() => {}, []);

    expect(callback).toBe(updatedCallback);
  });

  it('returns same callback with an unsimilar array', () => {
    const useCallback = createCallback();

    const callback = useCallback(() => {}, ['you', 'are', 'amazing']);
    const updatedCallback = useCallback(() => {}, ['you', 'are', 'amazing']);

    expect(callback).toBe(updatedCallback);
  });

  it('returns same callback with an unsimilar array', () => {
    const useCallback = createCallback();

    const callback = useCallback(() => {}, ['you', 'are', 'amazing']);
    const updatedCallback =
        useCallback(() => {}, ['you', 'are', 'so', 'amazing']);

    expect(callback).not.toBe(updatedCallback);
  });
});
