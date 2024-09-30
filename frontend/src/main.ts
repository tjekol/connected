import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './con/con.config';
import { AppComponent } from './con/con.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
