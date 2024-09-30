import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './con/app.config';
import { AppComponent } from './con/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
