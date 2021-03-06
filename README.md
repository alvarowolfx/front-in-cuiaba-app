# FrontInCuiaba App
This app was developed for demo purposes for the talk that I gave at Front In Cuiaba event at 2015 ([link for the presentation](http://alvarowolfx.github.io/ionic-present)). So I'm sharing the code for those who are interested in studying Ionic Framework.

## Pre requirements
- Node.js and NPM installed (I recommend to do something like [this](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md) to install global packages without sudo )
- Ionic CLI installed, use this command to install globally the ionic command :
```shell
npm install -g ionic
```

## How to run
- Install required npm packages, run this command on project folder :
```shell
npm install
```
- Start ionic livereload server
```shell
ionic serve
```

## How to run on Simulator/Device
- Basically you choose what platform you want to run, theese commands will configure the platform specific project :
```shell
# For iOS
ionic platform ios
# For Android 
ionic platform android
```
- And to build and run on the platform you choose, run the command :
```shell
ionic run android
# or 
ionic run ios
```

- A more extensive guide can be found [here](http://ccoenraets.github.io/ionic-tutorial/build-ionic-project.html).


## Style guide
The angular style guide followed by this project can be found [here](https://github.com/johnpapa/angular-styleguide)


