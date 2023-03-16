import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Payment } from './payment/payment.module';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

 
//   getPayments(): Observable<Payment[]> {
//     return this.http.get<Payment[]>('http://localhost:3000/payment')
//     .pipe(
//       map(data => data.map(item => new Payment(
        
// item.NameOnCard,
// item.creditCardNumber,
// item.ExpMonthAndYear,
// item.orderNo,
// item.CVV,
// item.id
//       ))
//     )
//     );
//     }

getPaymentData(){
  return this.http.get("http://localhost:3000/payment")
}
}




