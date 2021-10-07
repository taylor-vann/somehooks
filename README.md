# SomeHooks

A collection of framework agnostic hooks.

## Abstract

*SomeHooks* manages state and side-effects in functional pipelines and works
well with asyncronous and callback-driven environments.

Unlike other hooks, *SomeHooks* do not depend on ordering, location, or scope.

They can be used anywhere.

### Types of Hooks

There are three categories of hooks:

*   passive
*   reactive
*   custom

All hooks are based on the [createMemo]("./create_memo/README.md") pattern.

### Passive hooks

Most Hooks are passive hooks and cache the result of an expensive operation.

SomeHooks includes the following passive hooks:

*   [createCallback]("./create_callback/README.md")
*   [createEffect]("./create_effect/README.md")
*   [createMemo]("./create_memo/README.md")
*   [createSelector]("./create_selector/README.md")

### Reactive Hooks

A reactive hook requests updates from a given call stack.

Keep in mind, reactive hooks can cause infinite loops.

SomeHooks includes the following reactive hooks:

*   [createState]("./create_state/README.md")
*   [createReducer]("./create_reducer/README.md")

### Custom Hooks

Passive and reactive hooks can be combined to create custom hooks.

While other environments leverage incredible feats of transpilation to use hooks
alongside components, *SomeHooks* is scoped to the browser or nodejs and
requires a more declarative and factory-driven approach.

Keep in mind: custom hooks are potentially comprised of reactive hooks,
so custom hooks can cause infinite loops.

In the example below, a custom hooks factory returns a custom hook function.

Typescript:

```ts
import type {RequestUpdate} from "somehooks";

const createClock = (requestUpdate: RequestUpdate) => {
  const clockState = createState<string>(requestUpdate);
  const clockEffect = createEffect();

  return () => {
    const [state, setState] = clockState(new Date().toLocaleTimeString());

    clockEffect(() => {
      const stub = setInterval(() => {
        setState(new Date().toLocaleTimeString());
      }, 1000)

      return () => {
        clearInterval(stub);
      }
    }, []);

    return state;
  }
}
```

Javascript:

```js
const createClock = (requestUpdate) => {
  const clockState = createState(requestUpdate);
  const clockEffect = createEffect();

  return () => {
    const [state, setState] = clockState(new Date().toLocaleTimeString());

    clockEffect(() => {
      const stub = setInterval(() => {
        setState(new Date().toLocaleTimeString());
      }, 1000)

      return () => {
        clearInterval(stub);
      }
    }, []);

    return state;
  }
}
```

### Webcomponents

Here is an example of using Lit with a slightly modified version of the
`createClock` example above:

Typescript:

```ts
import {LitElement, html} from "lit";
import {createState, createEffect} from "somehooks";

import type {RequestUpdate} from "somehooks"

const createClock = (requestUpdate: RequestUpdate) => {
  const clockState = createState<string>(requestUpdate);
  const clockEffect = createEffect();

  return (isConnected: boolean) => {
    const [state, setState] = clockState(new Date().toLocaleTimeString());

    clockEffect(() => {
      if (!isConnected) {
        return;
      }

      const stub = setInterval(() => {
        setState(new Date().toLocaleTimeString());
      }, 1000);

      return () => {
        clearInterval(stub);
      }
    }, [isConnected]);

    return state;
  }
}

class MyClock extends LitElement {
  useClock = createClock(this.requestUpdate);

  render() {
    const timestring = this.useClock(this.isConnected);

    return html`<p>{timestring}</p>`;
  }
}
```

Javascript:

```ts
import {LitElement, html} from "lit";
import {createState, createEffect} from "somehooks";

const createClock = (requestUpdate) => {
  const clockState = createState(requestUpdate);
  const clockEffect = createEffect();

  return ({isConnected}) => {
    const [state, setState] = clockState(new Date().toLocaleTimeString());

    clockEffect(() => {
      if (!isConnected) {
        return;
      }

      const stub = setInterval(() => {
        setState(new Date().toLocaleTimeString());
      }, 1000);

      return () => {
        clearInterval(stub);
      }
    }, [isConnected]);

    return state;
  }
}

class MyClock extends LitElement {
  useClock = createClock(this.requestUpdate);

  render() {
    const timestring = this.useClock({isConnected: this.isConnected});

    return html`<p>{timestring}</p>`;
  }
}
```

## License

*SomeHooks* is released under the Apache License Version 2.0
