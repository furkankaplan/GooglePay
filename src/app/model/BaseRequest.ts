import { PaymentMethods } from './PaymentMethods';

export class BaseRequest {
  apiVersion: number;
  apiVersionMinor: number;
  allowedPaymentMethods: Array<PaymentMethods>;
}
