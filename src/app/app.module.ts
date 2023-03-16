import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewOrderInfoComponent } from './view-order-info/view-order-info.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ViewPaymentInfoComponent } from './view-payment-info/view-payment-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewOrderInfoComponent,
    MakePaymentComponent,
    ViewPaymentInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    // TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
