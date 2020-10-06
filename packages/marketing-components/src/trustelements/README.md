## Static Images

Static images should be uploaded to the [static assets](https://github.com/transferwise/marketing-components/tree/main/packages/marketing-components/src/trustelements) repo and referenced in the component.

example:

```
    <TrustElement
        src="https://transferwise.com/public-resources/assets/marketing-components/illustrations/FCA.svg"
        title={title}
        linkText={linkText}
        href={href}
    />
```

---

## Animated Svgs

In case of Animated Svgs create the Svg illustration as a react component and pass the same as src. `shouldAnimate` flag **should** be true in order to render the Svg as React component.

example:

```
    <TrustElement
        src={YourReactComponent}
        title={title}
        linkText={linkText}
        href={href}
        shouldAnimate
    />
```

## Hiding illustration

There might be cases where you just want to have `TrustElement` with title and link and no illustration. In that case you can pass in `useIllustration` and set it to `false`.

example:

```
    <TrustElement
        src={YourReactComponent}
        title={title}
        linkText={linkText}
        href={href}
        shouldAnimate
        useIllustration={false}
    />
```
