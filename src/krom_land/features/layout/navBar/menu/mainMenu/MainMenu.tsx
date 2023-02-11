import NavLinks from '../navLinks/NavLinks';
import MainMenuStyled from './styledComponents/MainMenuStyled';

const MainMenu = () => {
  return (
    <MainMenuStyled sx={{ display: { xs: "none", md: "flex" } }}>
      <NavLinks />
    </MainMenuStyled>
  );
};

export default MainMenu;
