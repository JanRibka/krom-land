import { MouseEvent, useEffect, useRef, useState } from 'react';

import NavLinks from '../navLinks/NavLinks';
import HamburgerIcon from './hamburgerIcon/HamburgerIcon';
import NavLinksStyled from './navLinks/styledComponents/NavLinksStyled';
import MobileMenuStyled from './styledComponents/MobileMenuStyled';

interface IProps {
  // onClickAction: (event: MouseEvent<HTMLLIElement> | undefined) => void;
  // seldTab: number;
}

const MobileMenu = (props: IProps) => {
  // References
  const refMobileMenu = useRef<HTMLDivElement>(null);
  const refNavLinksWrapper = useRef<HTMLDivElement>(null);
  const refNavLinks = useRef<HTMLDivElement>(null);
  const effectRan = useRef<boolean>(false);

  // State
  const [isOpnd, setIsOpnd] = useState<boolean>(false);

  // Other
  useEffect(() => {
    if (
      process.env.REACT_APP_INSTANCE_NAME === "Prod" ||
      effectRan.current === true
    ) {
      SetOpndClsd(isOpnd);
    }

    return () => {
      effectRan.current = true;
    };
  }, [isOpnd]);

  const SetOpndClsd = (isOpnd: boolean) => {
    if (
      !!refMobileMenu.current &&
      !!refNavLinksWrapper.current &&
      !!refNavLinks.current
    ) {
      if (isOpnd) {
        refMobileMenu.current.classList.add("is-opened");
        refNavLinksWrapper.current.classList.add("is-opened");
        refNavLinks.current.classList.add("is-opened");
      } else {
        refMobileMenu.current.classList.remove("is-opened");
        refNavLinksWrapper.current.classList.remove("is-opened");
        refNavLinks.current.classList.remove("is-opened");
      }
    }
  };

  const HandleIsOpnd = () => {
    setIsOpnd(!isOpnd);
  };

  // const HandleOnClickAction = (
  //   event: MouseEvent<HTMLLIElement> | undefined
  // ) => {
  //   setIsOpnd(false);
  //   setTimeout(() => {
  //     props.onClickAction(event);
  //   }, 800);
  // };

  return (
    <MobileMenuStyled
      ref={refMobileMenu}
      display={{ xs: "flex", md: "none" }}
      className='mobile-menu'
    >
      {/* Hamburger icon */}
      <HamburgerIcon handleOnClick={HandleIsOpnd} isOpnd={isOpnd} />
      {/* Navigation */}
      <NavLinksStyled ref={refNavLinksWrapper}>
        <NavLinks
          ref={refNavLinks}
          // handleOnClick={HandleOnClickAction}
          // seldTab={props.seldTab}
        />
      </NavLinksStyled>
    </MobileMenuStyled>
  );
};

export default MobileMenu;
