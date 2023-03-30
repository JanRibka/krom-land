import ImageModel from "shared/models/ImageModel";

export default class ActionDetailDTO {
  Id: number = 0;
  ActionOrder: number = 0;
  MonthName: string = "";
  Image: ImageModel = new ImageModel();
  ActionName: string = "";
  ActionDescritption: string = "";
  VideoLink: string = "";
  Price: string = "";
  IsPriceRemark: boolean = false;
  PriceRemark: string = "";
  Place: string = "";
  Date: string = "";
  CapacityFull: boolean = false;

  public constructor(init?: Partial<ActionDetailDTO>) {
    Object.assign(this, init);
  }
}
