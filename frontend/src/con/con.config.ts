import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './con.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from '../environment/environment';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({ "projectId": `${environment.projectId}`, "appId": `${environment.appId}`, "storageBucket": `${environment.storageBucket}`, "apiKey": `${environment.apiKey}`, "authDomain": `${environment.authDomain}`, "messagingSenderId": `${environment.messagingSenderId}` })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({ "projectId": `${environment.projectId}`, "appId": `${environment.appId}`, "storageBucket": `${environment.storageBucket}`, "apiKey": `${environment.apiKey}`, "authDomain": `${environment.authDomain}`, "messagingSenderId": `${environment.messagingSenderId}` })), provideFirestore(() => getFirestore())]
};

