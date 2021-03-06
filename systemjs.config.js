(function(global){
    var map = {
        app: 'app',
        '@angular/core': 'npm@angular/core/bundles/core.omd.js',
        '@angular/common': 'npm@angular/core/bundles/common.omd.js',
        '@angular/compiler': 'npm@angular/core/bundles/compiler.omd.js',
        '@angular/platform-browser': 'npm@angular/core/bundles/platform-browser.omd.js',
        '@angular/platform-browser-dynamic': 'npm@angular/core/bundles/platform-browser-dynamic.omd.js',
        '@angular/http': 'npm@angular/core/bundles/http.omd.js',
        '@angular/router': 'npm@angular/core/bundles/router.omd.js',
        '@angular/forms': 'npm@angular/core/bundles/forms.omd.js',

        'rxjs': 'npmrxjs',
        'angular-in-memory-web-api': 'npmangular-in-memory-web-api'
    };

    var packages = {
        'app': { main: './main.js',  defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { main:'./index.js' , defaultExtension: 'js' },
    }; 

    System.config(
        {
            paths: {
                'npm':'node_modules/'
            },
            map: map,
            packages: packages
        }
    );
})(this);