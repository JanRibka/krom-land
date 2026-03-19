import Actions from "krom_land/features/actions/Actions";

import PageStyled from "./styledComponents/PageStyled";

const ActionsPage = () => {
  return (
    <PageStyled component="main">
      <div className="top-space"></div>
      <Actions />
    </PageStyled>
  );
};

export default ActionsPage;
