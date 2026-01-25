import ImageModel from "shared/models/ImageModel";

export default class TeamMemberModel {
  image: ImageModel = new ImageModel();
  name: string = "";
  description: string = "";

  public constructor(init?: Partial<TeamMemberModel>) {
    Object.assign(this, init);
  }
}
