/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      'angular2-highcharts': 'npm:angular2-highcharts',
      'highcharts': 'npm:highcharts',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      '@angular2-material/core': 'npm:@angular2-material/core/core.umd.js',
      '@angular2-material/card': 'npm:@angular2-material/card/card.umd.js',
      '@angular2-material/button': 'npm:@angular2-material/button/button.umd.js',
      '@angular2-material/icon': 'npm:@angular2-material/icon/icon.umd.js',
      '@angular2-material/button-toggle': 'npm:@angular2-material/button-toggle/button-toggle.umd.js',
      '@angular2-material/tabs': 'npm:@angular2-material/tabs/tabs.umd.js',
      'material2animation': 'npm:material2animation',
      'ng-sidebar': 'node_modules/ng-sidebar',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'ng-sidebar': {
        main: 'lib/index',
        defaultExtension: 'js'
      },
      'angular2-highcharts': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'material2animation': {
        main: './material2animation.js',
        defaultExtension: 'js'
      },
      'highcharts': {
        // NOTE: You should set './highcharts.src.js' here
        // if you are not going to use <chart type="StockChart"
        main: './highcharts.src.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);