/**
 * @license
 * Copyright (c) 2021 The SomeHooks Project Authors. All rights reserved.
 */

import {createMemo} from './create_memo.js';

describe('createMemo', () => {
  it('returns new value with empty arguments', () => {
    const useMemo = createMemo<string>();

    const memoizedValue = useMemo(() => {
      return 'apples';
    });
    const updatedValue = useMemo(() => {
      return 'oranges';
    });

    expect(memoizedValue).not.toBe(updatedValue);
    expect(updatedValue).toBe('oranges');
  });

  it('returns same value with empty array', () => {
    const useMemo = createMemo<string>();

    const memoizedValue = useMemo(() => {
      return 'apples';
    }, []);
    const updatedValue = useMemo(() => {
      return 'oranges';
    }, []);

    expect(memoizedValue).toBe(updatedValue);
    expect(updatedValue).toBe('apples');
  });

  it('returns same value with a similar array', () => {
    const useMemo = createMemo<string>();

    const memoizedValue = useMemo(() => {
      return 'apples';
    }, ['you', 'are', 'amazing']);
    const updatedValue = useMemo(() => {
      return 'oranges';
    }, ['you', 'are', 'amazing']);

    expect(memoizedValue).toBe(updatedValue);
    expect(updatedValue).toBe('apples');
  });

  it('returns same value with an unsimilar array', () => {
    const useMemo = createMemo<string>();

    const memoizedValue = useMemo(() => {
      return 'apples';
    }, ['you', 'are', 'amazing']);
    const updatedValue = useMemo(() => {
      return 'oranges';
    }, ['you', 'are', 'so', 'amazing']);

    expect(memoizedValue).not.toBe(updatedValue);
    expect(updatedValue).toBe('oranges');
  });
});
