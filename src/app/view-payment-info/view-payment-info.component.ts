import { Component } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Payment } from '../payment/payment.module';

@Component({
  selector: 'app-view-payment-info',
  templateUrl: './view-payment-info.component.html',
  styleUrls: ['./view-payment-info.component.css']
})
export class ViewPaymentInfoComponent {
  payments!: Payment[];
  data: any;
  
  constructor(private api: PaymentService) { }

  ngOnInit() {
    this.api.getPaymentData().subscribe(result => {
      this.data = result;
    });
  }
}
