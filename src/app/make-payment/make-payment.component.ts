import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css'] 
})

export class MakePaymentComponent {
  nameRegex = /^[a-zA-Z]+(([',.-][a-zA-Z])?{a-zA-Z}*)*$/;
  cardRegex = /^[0-9]{16}(?:[0-9]{0})?$/;
   CVVRegex =  /^[0-9]{3}(?:[0-9]{0})?$/;
   submitted = false;
   nameTouched = false;
   constructor(){}
  ngOnInit(){
    this.getDate();
  }
   CreditCardForm =new FormGroup({
     nameoncard:new FormControl('',[Validators.required,Validators.pattern(this.nameRegex),Validators.maxLength(15),Validators.minLength(4)]),
     CreditCardNumber:new FormControl('',[Validators.required,Validators.pattern(this.cardRegex),Validators.minLength(16),Validators.maxLength(16)]),
     CVV:new FormControl('',[Validators.required,Validators.pattern(this.CVVRegex),Validators.minLength(3),Validators.maxLength(3)]),
     expiry:new FormControl('',[Validators.required])
   })
   getControl(name:any):AbstractControl |null{
     return this.CreditCardForm.get(name)
   }

  onSubmit() {
    let isFormValid = true;
    Object.keys(this.CreditCardForm.controls).forEach(field => {
        const control = this.CreditCardForm.get(field);
        if (control) {
            control.setValue(control.value);
        // if all fields are not filled form is invalid
            if (control.invalid) {
                isFormValid = false;
            }
            if (!control.touched) {
                control.markAsTouched();
            }
        }
    });
    if (isFormValid) {
        console.log(this.CreditCardForm.value);
        alert("Form is Submitted Successfully");
    }
}
 
   minDate:any ='';
   getDate(){
     var date:any =new Date();
   
     // var toDate:any
     var month:any= date.getMonth()+2;
     if(month<10){
         month='0'+month; 
        } 
        var year:any =date.getFullYear();
        this.minDate= year + '-' +month;
        console.log(this.minDate)
      }
}
