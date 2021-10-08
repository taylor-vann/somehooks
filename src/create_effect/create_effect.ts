/**
 * @license
 * Copyright (c) 2021 The SomeHooks Project Authors. All rights reserved.
 */

import {hasChanged} from '../identity_walk/identity_walk.js';

type ComposeEffect = (onTeardown: Function, identities?: unknown[]) => void;
type CreateEffect = () => ComposeEffect;

const createEffect: CreateEffect = () => {
  let teardown: Function;
  let identities: unknown[]|undefined;

  return (composeEffect, identityDelta) => {
    if (!hasChanged(identityDelta, identities)) {
      return;
    }

    if (teardown !== undefined) {
      teardown();
    }

    teardown = composeEffect();
    identities = identityDelta;
  };
};

export {createEffect};
