import { ReactNode } from 'react';

import Footer from './footer/Footer';
import NavBar from './navBar/NavBar';
import LayoutStyled from './styledComponents/LayoutStyled';

interface IProps {
  children: ReactNode;
}

const Layout = (props: IProps) => {
  return (
    <LayoutStyled>
      <NavBar />
      {props.children}
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
