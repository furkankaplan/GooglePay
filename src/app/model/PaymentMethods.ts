
export class PaymentMethods {
  type: string;
  parameters: {
    allowedCardNetworks: Array<string>,
    allowedAuthMethods: Array<string>
  };
}
