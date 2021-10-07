/**
 * @license
 * Copyright (c) 2021 The SomeHooks Project Authors. All rights reserved.
 */

type IdentityWalk = (setA?: unknown[], setB?: unknown[]) => boolean;

const hasChanged: IdentityWalk = (setA, setB) => {
  if (setA === undefined || setB === undefined) {
    return true;
  }
  if (setA.length !== setB.length) {
    return true;
  }

  let index = 0;
  while (index < setA.length) {
    if (setA[index] !== setB[index]) {
      return true;
    }
    index += 1;
  }

  return false;
};

export {hasChanged};
