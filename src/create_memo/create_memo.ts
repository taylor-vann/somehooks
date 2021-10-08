/**
 * @license
 * Copyright (c) 2021 The SomeHooks Project Authors. All rights reserved.
 */

import {hasChanged} from '../identity_walk/identity_walk.js';

type ComposeMemo<T> = () => T;
type DispatchMemo<T> = (composeMemo: ComposeMemo<T>, identities?: unknown[]) =>
    T;

// generic type entrypoint
type CreateMemo = <T>() => DispatchMemo<T>;

const createMemo: CreateMemo = <T>() => {
  let identities: unknown[]|undefined;
  let memo: T;

  return (composeMemo: ComposeMemo<T>, identityDelta) => {
    // update cached memo
    if (hasChanged(identityDelta, identities)) {
      identities = identityDelta;
      memo = composeMemo();
    }

    return memo;
  };
};

export {createMemo};
