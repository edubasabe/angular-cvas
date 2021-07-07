import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HighlightPlusModule } from 'ngx-highlightjs/plus';

import { BillingInfoUnnestedComponent } from './components/billing-info-unnested/billing-info-unnested.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { AddressInfoComponent } from './components/address-info/address-info.component';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    AppComponent,
    BillingInfoUnnestedComponent,
    BasicInfoComponent,
    AddressInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HighlightPlusModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js')
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
