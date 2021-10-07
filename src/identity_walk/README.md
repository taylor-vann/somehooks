# SomeHooks

## Identity Walk

This module contains the `hasChanged` function.

Identity walks are responsible for detecting whether a list of identities have
changed after a hook is called.

In the example below, any change between `prevSet` and `currSet` will register
as having changed.

```ts
type IdentityWalk = (prevSet?: unknown[], currSet?: unknown[]) => boolean;

const hasChanged: IdentityWalk = (prevSet, currSet) => {
  if (prevSet === undefined || currSet === undefined) {
    return true;
  }
  if (prevSet.length !== currSet.length) {
    return true;
  }

  let index = 0;
  while (index < prevSet.length) {
    if (prevSet[index] !== currSet[index]) {
      return true;
    }
    index += 1;
  }

  return false;
};
```

The function in the example above is intended to detect a delta change of the
same set of identities between executions of a callback.

Hooks use this change to "recognize" when updates should occur. Usually this
results the execution of an expensive memoized function.

### More Hooks

Checkout some more [hooks](https://github.com/taylor-vann/somehooks)
