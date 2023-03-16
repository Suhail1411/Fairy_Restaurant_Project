import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order/order.module';
import { HttpClient } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-order-info',
  templateUrl: './view-order-info.component.html',
  styleUrls: ['./view-order-info.component.css']
})
export class ViewOrderInfoComponent implements OnInit {
  orders!: any;
  data: any;
  
  constructor(private api: OrderService,private http: HttpClient
    // private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.api.getData().subscribe(result =>{
      this.data = result
    })
    // this.orderService.getOrders().subscribe((data:any) => {
    //   console.log(data);
    //   this.data = data;
    // });
  }
}
