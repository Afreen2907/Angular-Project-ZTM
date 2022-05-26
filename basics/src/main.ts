import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

//loading of platform (JIT) 
//loading of app
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err))


