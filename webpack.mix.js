const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.copy([
  'resources/angular/dist/favicon.ico',
  'resources/angular/dist/main-es5.js',
  'resources/angular/dist/main-es2015.js',
  'resources/angular/dist/polyfills-es5.js',
  'resources/angular/dist/polyfills-es2015.js',
  'resources/angular/dist/runtime-es5.js',
  'resources/angular/dist/runtime-es2015.js'
], 'public');

if (mix.inProduction()) {
  mix.copy([
      'resources/angular/dist/styles.css'
  ], 'public');
} else {
  mix.copy([
    'resources/angular/dist/styles-es5.js',
    'resources/angular/dist/styles-es2015.js',
    'resources/angular/dist/vendor-es5.js',
    'resources/angular/dist/vendor-es2015.js',
  ], 'public');

}
mix.copy([
  'resources/angular/dist/index.html',
], 'resources/views/index.blade.php');
