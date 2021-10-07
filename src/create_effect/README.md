# SomeHooks

## CreateEffect

CreateEffect manages side effects.

Typescript and Javascript:

```TS
const myEffect = createEffect()

myEffect(() => {
  const resizeCallback = () => { console.log("resized!"); };

  window.addEventListener("resize", resizeCallback);

  return () => {
    window.removeEventListener("resize", resizeCallback);
  }
}, ["remove", "listener", "when", "identities", "change"])
```
