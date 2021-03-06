# AZPrototype for TailwindCSS

## Architecture

```code
src
  index.html
  blog.html
  styles
    main.scss
    home.scss
  js
    main.js
    home.js
    blog.js
  assets
    fonts
    images
docs
  assets
    images
    fonts
  main.js
  home.js
  blog.js
  main.css
  home.css
  blog.css
  index.html
  blog.html
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

```bash
yarn add html-webpack-plugin -D
```

```bash
yarn add html-loader -D
```

```html
<%= require('html-loader!./partials/header.html').default %>
```

## Google Fonts

```css
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap");
```

## Google Material Icons

- https://developers.google.com/fonts/docs/material_icons

```css
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
```

```html
<span class="material-icons">face</span>
```

- [Playground](https://mui.com/components/material-icons/)

## References

- [Materialize](https://materializecss.com/color.html)
- [Assets Management](https://webpack.js.org/guides/asset-management/#loading-fonts)
