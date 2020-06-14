<img src="./src/assets/images/integreat-app-logo-without-text.png" title="Integreat" alt="Integreat">

# coldaid-frontend

Frontend to provide the functionality to request a coldaid assistance

## Prerequisites

- [Node.js](https://nodejs.org/)

## Installation

Install necessary npm modules.

```shell
$ npm install
```

---

## Run

`npm start` runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

---

## Test

`npm test` launches the test runner in the interactive watch mode.

---

## Build

`npm run build` builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

---

## Setup Tooling

Helpful during development

### Editor Config

[Editor Config](https://editorconfig.org/) helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems.

Checkout [here](https://editorconfig.org/#download) if your editor requires a plugin or supports it out of the box.

---

## Built with

This App ist built with

 - [React](https://reactjs.org/)
 - [Unistore](https://github.com/developit/unistore)
 - [Material UI](https://material-ui.com/)

---

## Documentation

A little overview over the project structure

```
/public   // static files for web page, entry point
/src
  /assets // images, translation or other media files
  /components // reusable components, some are more specific than others
    /app    // relevant for the whole app, router, routes, theme config
    /theme  // components that fit the theme, are used in various pages and components
    ...
  /pages  // each page represents a path of the web page
  /store  // global state specific files (unistore), setup and actions
```

---
