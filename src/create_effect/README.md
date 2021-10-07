# SomeHooks

## CreateEffect

CreateEffect manages side effects.

Typescript and Javascript:

```ts
const myEffect = createEffect()

myEffect(() => {
  const resizeCallback = () => { console.log("resized!"); };

  window.addEventListener("resize", resizeCallback);

  return () => {
    window.removeEventListener("resize", resizeCallback);
  }
}, ["remove", "listener", "when", "identities", "change"])
```

### More Passive Hooks

Checkout some more
[passive hooks](https://github.com/taylor-vann/somehooks#passive-hooks)
