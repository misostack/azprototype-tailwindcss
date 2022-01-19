# AZPrototype for TailwindCSS

## Architecture

```code
src
  index.html
  sass
    styles.scss
  js
    index.js
  assets
    fonts
    images
docs
  assets
    css
      styles.scss
    images
    fonts
    js
      - index.js
  index.html
```

## Configuration steps

```bash
yarn add webpack webpack-cli -D
```

```bash
yarn add style-loader css-loader postcss-loader postcss sass-loader sass -D
```

```bash
yarn add mini-css-extract-plugin -D
```

```bash
yarn add tailwindcss autoprefixer -D
```

## References

- [Materialize](https://materializecss.com/color.html)
