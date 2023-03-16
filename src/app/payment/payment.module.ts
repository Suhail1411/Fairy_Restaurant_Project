import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class Payment {
  // NameOnCard: any;
  constructor(
    @Inject(Number) public NameOnCard: string,
    @Inject(Number) public creditCardNumber: number,
    @Inject(Number) public ExpMonthAndYear: number,
    @Inject(Number) public orderNo: number,
    @Inject(Number) public CVV: number,
    @Inject(Number) public id: number,

    ) {}
}
