import { ReactNode } from 'react';

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
    </LayoutStyled>
  );
};

export default Layout;
