import NotFound from "features/notFound/NotFound";

import PageStyled from "./styledComponents/PageStyled";

const NotFoundPage = () => {
  return (
    <PageStyled component="main">
      <div className="top-space"></div>
      <NotFound />
    </PageStyled>
  );
};

export default NotFoundPage;
