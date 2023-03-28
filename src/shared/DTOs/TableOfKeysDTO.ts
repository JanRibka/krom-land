export default class TableOfKeysDTO {
  Id: number | null = null;
  GroupKey: string | null = null;
  Key: string | null = null;
  Name: string | null = null;
  Enabled: boolean | null = null;

  public constructor(init?: Partial<TableOfKeysDTO>) {
    Object.assign(this, init);
  }
}
