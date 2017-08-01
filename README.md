# React Simple Boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of its documentation [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Description

The idea behind this scaffold is to provide a really simple starting point for small web pages.

It's very similar to the create-react-app scaffold but with a few changes. It makes use of Sass + CSS Modules to handle the styles. It's integrated with the react-css-modules babel
plugin in order to make it even easier to read and write styles. React Helmet and React Snapshot are also being used. Bulma was added to the project, although only the Modal Component
is being pulled in, you can add more modules as you need them.

There are examples for using all of the stuff I'm talking about, you can remove them when you find it convenient.

## Technologies

- React
- Sass
- CSS Modules (react-css-modules babel plugin)
- React Helmet
- React Snapshot

## How can I start a project using this ?

1. `git clone https://github.com/gianlucacandiotti/react-simple-boilerplate.git PROJECT_NAME`.
2. `cd PROJECT_NAME && yarn` (or `npm install` if that suites you better).
3. `cp .env-example .env` (This is in order to run an example, you can skip this if you don't need env variables in your client).

You are all set to go. Now you may just run the commands below to start developing!

## Tasks

These are the tasks included in the template. I'll just list them with a brief description since you can find most of them (`yarn serve` is the only one added by me) with full descriptions in the [create-react-app](https://github.com/facebookincubator/create-react-app) documentation.

- `yarn start`:
  - Runs the app on port 3000.
  - Hot Reloading enabled.
  - Errors and linting warnings in console.

- `yarn build`:
  - Builds the app for production to the build folder.
  - The build is minified and the filenames include the hashes.

- `yarn serve`:
  - Launches an http server on port 8080 to server the dist folder.

- `yarn test`
  - Runs the test watcher in an interactive mode.
  - By default, runs tests related to files changes since the last commit.

## So, anything else ?

Not really. I'd just want to thank you for giving it a try or at least reading through. If you have any feedback it'd be greatly appreciated. I bet a lot of things could be improved and I'm open to discussion, so open an issue, send a pull request or message me to gianluca.prwlr@gmail.com.
