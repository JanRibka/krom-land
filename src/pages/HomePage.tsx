import Home from "krom_land/features/home/Home";

import PageStyled from "./styledComponents/PageStyled";

const HomePage = () => {
  return (
    <PageStyled component="main">
      <div className="top-space"></div>
      <Home />
    </PageStyled>
  );
};

export default HomePage;
