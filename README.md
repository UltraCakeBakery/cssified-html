# [html-css-attributes](https://just-html.dev) &middot; [![GitHub license](https://img.shields.io/github/license/UltraCakeBakery/html-css-attributes.svg)](#LICENSE) [![npm version](https://img.shields.io/npm/v/html-css-attributes.svg?style=flat)](https://www.npmjs.com/package/html-css-attributes) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

`html-css-attributes` - Add every CSS properties as individual attributes on to your html elements

###### Disclaimer
> 🧪 `html-css-attributes` is not yet **production-ready** Expect breaking changes and complete redesigns in the near future.
> We will update this note once we get closer to a stable v1.0 release.

## Features

Inspired by [UnoCSS](http://github.com/unocss/unocss)

- No parsing, no AST, no scanning, it's **PRACTICALLY INSTANT** (0.617ms generation time on really large components).
- ~2kb min+gzip - Zero dependencies and browser friendly.
<!-- - [100.000+ CSS Icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons/) - easily and performantly add icons to your website  -->
<!-- - [Shortcuts](#shortcuts) - Add your own boolean attributes for quick prototyping -->

<!-- 
###### Benchmark

```
2022/7/2 08:38:12 PM
1656 utilities | x50 runs (min build time)

none                              5.87 ms / delta.      0.00 ms 
unocss       v0.43.0              9.17 ms / delta.      3.30 ms (x1.00)
tailwindcss  v3.1.4             497.24 ms / delta.    491.37 ms (x148.70)
windicss     v3.5.5             869.47 ms / delta.    863.60 ms (x261.35)
``` -->

## Installation

### CDN
TODO

### Vite

```bash
npm install @html-css-attributes/vite --save-dev
yarn add @html-css-attributes/vite --save-dev
pnpm install @html-css-attributes/vite --save-dev
```

```ts
// vite.config.ts
import HTML_CSS_Attributes from '@html-css-attributes/vite'

export default {
  plugins: [
    HTML_CSS_Attributes(),
  ]
}
```

Add `<style html-css-attributes></style>` to your frameworks components for which you want to generate css:

## Configurations

TODO

<!-- UnoCSS is an atomic-CSS engine instead of a framework. Everything is designed with flexibility and performance in mind. There are no core utilities in UnoCSS, all functionalities are provided via presets.

By default, UnoCSS applies [the default preset](https://github.com/unocss/unocss/tree/main/packages/preset-uno), which provides a common superset of the popular utilities-first frameworks Tailwind CSS, Windi CSS, Bootstrap, Tachyons, etc.

For example: `ml-3` (Tailwind), `ms-2` (Bootstrap), `ma4` (Tachyons), and `mt-10px` (Windi CSS) are all valid.

```css
.ma4 { margin: 1rem; }
.ml-3 { margin-left: 0.75rem; }
.ms-2 { margin-inline-start: 0.5rem; }
.mt-10px { margin-top: 10px; }
``` -->

## Acknowledgement

> in alphabet order

- [ACSS](https://acss.io/)
- [Bootstrap Utilities](https://getbootstrap.com/docs/5.1/utilities/flex/)
- [Chakra UI Style Props](https://chakra-ui.com/docs/features/style-props)
- [Semantic UI](https://semantic-ui.com/)
- [Tachyons](https://tachyons.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Twind](https://github.com/tw-in-js/twind)
- [UnoCSS](http://github.com/unocss/unocss)
- [Windi CSS](http://windicss.org/)


## License

[MIT](./LICENSE) License &copy; 2022 [Jack van der Bilt](https://github.com/ultracakebakery)