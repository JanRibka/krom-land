import { useSelector } from "react-redux";
import GridContainer from "shared/components/gridContainer/GridContainer";
import GridItem from "shared/components/gridItem/GridItem";
import SectionTitle from "shared/components/sectionTitle/SectionTitle";
import { selectHomeTeamMembers } from "shared/infrastructure/store/home/homeSlice";

import TeamMemberModel from "../models/TeamMemberModel";
import Member from "./member/Member";
import OurTeamStyled from "./styledComponents/OurTeamStyled";

const OurTeam = () => {
  // Store
  const homeTeamMembers = useSelector(selectHomeTeamMembers);

  // Other
  const renderMembers = () => {
    let result: JSX.Element[] = [];
    let members: JSX.Element[] = [];
    let teamMembers: TeamMemberModel[] = [...(homeTeamMembers ?? [])];

    teamMembers.forEach((member, index) => {
      if (
        (index === 0 || index % 4 !== 0) &&
        index + 1 !== teamMembers.length
      ) {
        members.push(
          <GridItem xs={12} sm={6} lg={3}>
            <Member
              image={member.Image}
              name={member.Name}
              description={member.Description}
            />
          </GridItem>,
        );
      } else if (index + 1 === teamMembers.length) {
        members.push(
          <GridItem xs={12} sm={6} lg={3}>
            <Member
              image={member.Image}
              name={member.Name}
              description={member.Description}
            />
          </GridItem>,
        );

        result.push(<GridContainer>{members}</GridContainer>);
      } else {
        result.push(<GridContainer>{members}</GridContainer>);
        members = [
          <GridItem xs={12} sm={6} lg={3}>
            <Member
              image={member.Image}
              name={member.Name}
              description={member.Description}
            />
          </GridItem>,
        ];
      }
    });

    return result;
  };

  return (
    <OurTeamStyled>
      <SectionTitle mainText="Náš tým" secondaryText="Rodina je základ všeho" />
      {renderMembers()}
    </OurTeamStyled>
  );
};

export default OurTeam;
