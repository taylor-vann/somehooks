/**
 * @license
 * Copyright (c) 2021 The SomeHooks Project Authors. All rights reserved.
 */

import {hasChanged} from '../identity_walk/identity_walk';

type ComposedCallback<C extends Function> =
    (composition: C, identities?: unknown[]) => C;

type CreateCallback = <C extends Function>() => ComposedCallback<C>;

const createCallback: CreateCallback = <C extends Function>() => {
  let identities: unknown[]|undefined;
  let callback: C;

  return (updatedCallback: C, identityDelta) => {
    if (hasChanged(identityDelta, identities)) {
      identities = identityDelta;
      callback = updatedCallback;
    }

    return callback;
  };
};

export {createCallback};
