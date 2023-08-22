import { SharedModule } from './shared/shared.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Configuración del locale de la app
//=========================================================
import localeEsAR from "@angular/common/locales/es-AR";
import localeFrCA from "@angular/common/locales/fr-CA";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEsAR);
registerLocaleData(localeFrCA);
//=========================================================

@NgModule({
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        SharedModule,
    ],
    providers: [
        // para poner todo en español en la aplicacion
        { provide: LOCALE_ID, useValue: 'es-AR' }
    ],
})
export class AppModule { }
