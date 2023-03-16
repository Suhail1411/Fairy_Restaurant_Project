
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Order } from './order/order.module';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  data: any;
  url = "http://localhost:3000"
  constructor(private http: HttpClient) { }

//   getOrders(): Observable<Order[]> {
//     return this.http.get<Order[]>('http://localhost:3000/Orders')
//       .pipe(
//         map(data => data.map(item => new Order(
//           item.orderNo,
//           item.contactName,
//           item.orderDate,
//           item.itemsOrdered,
//           item.orderTotal,
//           item.taxTotal,
//           item.grandTotal
//         ))
//       )
//     );
// }

// to get tha data by perticular id
// getById(id:any){
//   return this.http.get('https://prickly-knickers-boa.cyclic.app/Orders/'+id)
// }

getData(){
  return this.http.get(this.url+"/Orders")
}
}
