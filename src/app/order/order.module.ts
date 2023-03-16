import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
// export class Order {
//   constructor(
//     public orderNo: number,
//     public contactName: string,
//     public orderDate: string,
//     public itemsOrdered: Array<any>,
//     public orderTotal: number,
//     public taxTotal: number,
//     public grandTotal: number
//   ) {}


export class Order {
  constructor(
    @Inject(Number) public orderNo: number,
    @Inject(String) public contactName: string,
    @Inject(String) public orderDate: string,
    @Inject(Array) public itemsOrdered: Array<any>,
    @Inject(Number) public orderTotal: number,
    @Inject(Number) public taxTotal: number,
    @Inject(Number) public grandTotal: number
  ) {}
}

// }

