import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './con.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { env } from '../environments/environment';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(),
    provideFirebaseApp(() => initializeApp(
      {
        "projectId": `${env.projectId}`,
        "appId": `${env.appId}`,
        "storageBucket": `${env.storageBucket}`,
        "apiKey": `${env.apiKey}`,
        "authDomain": `${env.authDomain}`,
        "messagingSenderId": `${env.messagingSenderId}`
      })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    provideFirebaseApp(() => initializeApp({
      "projectId": `${env.projectId}`,
      "appId": `${env.appId}`,
      "storageBucket": `${env.storageBucket}`,
      "apiKey": `${env.apiKey}`,
      "authDomain": `${env.authDomain}`,
      "messagingSenderId": `${env.messagingSenderId}`
    })),
    provideFirestore(() => getFirestore())
  ]
};

