import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { ViewOrderInfoComponent } from './view-order-info/view-order-info.component';
import { ViewPaymentInfoComponent } from './view-payment-info/view-payment-info.component';

const routes: Routes = [
  {path : '' , component: ViewOrderInfoComponent},
  {path : 'cardform',component : MakePaymentComponent},
  {path : 'paymentInfo',component : ViewPaymentInfoComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
