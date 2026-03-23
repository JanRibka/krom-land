export class RentingRequestModel {
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  phone: string = "+420";
  rentingDate: string | null = null;
  rentedItems: string[] = [];
  decorationThemes: string[] = [];
  termsAndConditionsConsent: boolean = false;
  totalPrice: number = 0;
  remark: string = "";
}
