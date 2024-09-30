import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './con/con.component';
import { config } from './con/con.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
