# vue-init
A starting point for vue apps with routing, webpack, gulp, babel, etc.

## What is this?
This is my solution to the problem that is modern web stacks. This should serve as a starting point for most websites I'll need.

## Features:
* Pre-configured gulp tasks:
  * Hot reload node on changes in app/*
  * Automatically babel and webpack on changes in public/assets/js/src/*
* Webpack support for [vue-loader](https://github.com/vuejs/vue-loader)
  * Means single-file vue components for organized front-end routing
  
## How to use:
``` bash
git clone <this repo> <dir>
cd <dir>
yarn install
yarn start
```
  
## Todo: 
* ~~SASS/SCSS support if needed~~
  * not needed - just `yarn add scss-loader` and add lang="scss" to your component :)
* Mongoose boilerplate?
