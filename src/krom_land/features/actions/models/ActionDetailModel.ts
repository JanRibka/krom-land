export default class ActionDetailDTO {
  ActionOrder: number = 0;
  MonthName: string = "";
  ActionImagePath: string = "";
  ActionImageAlt: string = "";
  ActionName: string = "";
  ActionDescritption: string = "";
  VideoLink: string = "";
  Price: string = "";
  Place: string = "";
  Date: string = "";

  public constructor(init?: Partial<ActionDetailDTO>) {
    Object.assign(this, init);
  }
}
