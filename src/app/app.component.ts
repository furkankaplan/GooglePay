import { Component } from '@angular/core';
import { PaymentMethods } from './model/PaymentMethods';
import { BaseRequest } from './model/BaseRequest';
import { PaymentOptions } from './model/PaymentOptions';
import { debug } from 'util';

declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GooglePay';

  googlePayClient: PaymentOptions;

  baseCardPaymentMethod: PaymentMethods = {
    type: 'CARD',
    parameters: {
      allowedCardNetworks: ['VISA', 'MASTERCARD'],
      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS']
    }
  };

  googlePayBaseConfiguration: BaseRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [this.baseCardPaymentMethod]
  };

  constructor() {

    this.googlePayClient = new PaymentOptions();

    let fakeClient: any = new google.payments.api.PaymentsClient({
      environment: 'TEST'
    });

    this.googlePayClient = (JSON.parse(JSON.stringify(fakeClient.gc)) as PaymentOptions);
    console.log(this.googlePayClient.environment);
    fakeClient.__proto__.isReadyToPay(this.baseCardPaymentMethod);

  }

}
