export default class VoucherModel {
  voucher_type: number | null = null;
  email: string = "";
  first_name: string = "";
  last_name: string = "";
  street_hn: string = "";
  city: string = "";
  zip_code: string = "";
  gdpr_consent: boolean = false;
}
