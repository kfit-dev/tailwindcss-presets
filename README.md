# Fave Tailwindcss Presets

A plugin provides a set of tailwindcss presets that uses by Fave. 

## Presets

- Font Family - `inter`
- Primary Color - `primary-pink`
- Theme Colors
    -  `white`
    -  `slate: 100, 700`
    -  `neutral: 100, 300, 400, 500, 700`
    -  `yellow: 400`
    -  `green: 400`
- Box Shadow `sm, md, lg, xl, 2xl, inner`
- Element Class `.h1, .h2, .h3, .body, .caption, .title`

## Installation

Install the plugin from npm

```sh
# Using npm
npm install -D fave-tailwindcss-presets

# Using yarn
yarn add -D fave-tailwindcss-presets
```

Then add the plugin to your `tailwind.config.js` file:

```sh
// tailwind.config.js
module.exports = {
  presets: [
    require('fave-tailwindcss-presets'),
  ],
	...
}
```

Congratulation, your have already included the Fave Tailwindcss Preset into your project.
