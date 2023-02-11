import Logo from './logo/Logo';
import MainMenu from './menu/mainMenu/MainMenu';
import SocialIcons from './socialIcons/SocialIcons';
import NavBarStyled from './styledComponents/NavBarStyled';
import ToolBarStyled from './styledComponents/ToolBarStyled';

const NavBar = () => {
  return (
    <NavBarStyled className='start-style'>
      <ToolBarStyled className='toolbar'>
        <Logo />
        <MainMenu />
        <SocialIcons />
      </ToolBarStyled>
    </NavBarStyled>
  );
};

export default NavBar;
