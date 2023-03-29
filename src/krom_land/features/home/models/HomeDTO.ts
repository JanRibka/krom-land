import TeamMemberDTO from "./TeamMemberDTO";

export default interface HomeDTO {
  Id: number | null;
  Title: string | null;
  Description: string | null;
  PageHeaderTextMain: string | null;
  PageHeaderTextMainColor: string | null;
  PageHeaderTextSecondary: string | null;
  PageHeaderTextSecondaryColor: string | null;
  MainImage: string | null;
  AboutUs: string | null;
  AboutUsImage: string | null;
  PeopleSay1Text: string | null;
  PeopleSay1Name: string | null;
  PeopleSay2Text: string | null;
  PeopleSay2Name: string | null;
  PeopleSay3Text: string | null;
  PeopleSay3Name: string | null;
  TeamMembers: TeamMemberDTO[] | null;
}
