import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      projectId: "bennytha-utilities",
      appId: "1:435359242068:web:9f41317d454e5c8ffbdac1",
      storageBucket: "bennytha-utilities.firebasestorage.app",
      apiKey: "AIzaSyDygVN22Ta-Y4E8bb3dZ0rRf2CJlpoQWx4",
      authDomain: "bennytha-utilities.firebaseapp.com",
      messagingSenderId: "435359242068",
      measurementId: "G-C70RYNBJME"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};
