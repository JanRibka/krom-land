import NavLinks from "../navLinks/NavLinks";
import MainMenuStyled from "./styledComponents/MainMenuStyled";

const MainMenu = () => {
  return (
    <MainMenuStyled sx={{ display: { xs: "none", md: "flex" } }}>
      <NavLinks innerWrapperName='nav-links-inner-wrapper' />
    </MainMenuStyled>
  );
};

export default MainMenu;
