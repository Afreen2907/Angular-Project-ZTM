import { enableProdMode } from '@angular/core'; //turns on production mode
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//loading of platform (JIT) 
//loading of app
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err))


