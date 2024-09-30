import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './con/app.component';
import { config } from './con/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
