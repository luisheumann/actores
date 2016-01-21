# Blank Foundation 6 - October CMS Theme

A boilerplate theme for [OctoberCMS](https://octobercms.com) based around [Foundation 6](http://foundation.zurb.com/sites/docs/)(v6.0.0) accompanied by jQuery, SCSS and Gulp to get you on your way.

## Installation

`$ php artisan theme:install dannyweeks.blank-foundation-6 <theme-dir>`

Replace `<theme-dir>` with whatever fits the site you're building.

## Activating the theme

`$ php artisan theme:use <name>`

Where `<name>` is whatever you specified in `theme:install`.


## Compiling the SCSS

The theme comes with the basic pre-compiled Foundation CSS but you can customise as just like you would with a normal Foundation project. 

Navigate to `<theme-dir>/assets` and run `npm install` to install the required node modules for building with [Gulp](http://gulpjs.com/).

Head back to the theme's root and run `gulp` to start watching for changes.
