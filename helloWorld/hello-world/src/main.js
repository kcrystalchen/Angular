// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
// if (environment.production) {
//   enableProdMode();
// }
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
function doSomething() {
    for (var x = 0; x < 5; x += 1) {
        console.log(x);
    }
    console.log("finally: " + x);
}
doSomething();
