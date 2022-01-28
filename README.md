# Fave Tailwind Presets

Fave Tailwind Presets provides a set of preset css styling inlcuding primary color that default uses by Fave. 

## Presets

- Font Family - ```inter```
- Primary Color -  ```primary-pink ```
- Theme Color
    -  ```white ```
    -  ```slate-100,700```
    -  ```neutral-100,300,400,500,700```
    -  ```yellow-400```
    -  ```green-400```
- BoxShadow ```BoxShadow-sm,md,lg,xl,2xl,inner```
- Element Class ```.h1,.h2.h3,.body,.caption,.title```

## Installation

Fave-Preset requires tailwinds css to run.

Install the dependencies and devDependencies and start connect the presets package.

```sh
cd Your Project 
```

Install Package

```sh
npm install --Fave-Preset
```
or
```sh
yarn install --Fave-Preset
```

Open ```Tailwind.Config.Js``` in your project root and include the package into your config.

```sh
  presets: [
    require('./fave-preset'),
  ],
```

Congratulation, your have already include the Fave Preset into your project.
