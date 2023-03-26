import { useEffect, useRef } from 'react';

import HamburgerIconLineStyled from './styledComponents/HamburgerIconLineStyled';
import HamburgerIconStyled from './styledComponents/HamburgerIconStyled';

interface IProps {
  handleOnClick: () => void;
  isOpnd: boolean;
}

const HamburgerIcon = (props: IProps) => {
  // Refrences
  const effectRan = useRef<boolean>(false);
  const refMobileMenuIcon = useRef<HTMLDivElement>(null);

  // Other
  useEffect(() => {
    if (
      process.env.REACT_APP_INSTANCE_NAME === "Prod" ||
      effectRan.current === true
    ) {
      SetOpndClsd(props.isOpnd);
    }

    return () => {
      effectRan.current = true;
    };
  }, [props.isOpnd]);

  const SetOpndClsd = (isOpnd: boolean) => {
    if (!!refMobileMenuIcon.current) {
      if (isOpnd) {
        refMobileMenuIcon.current.classList.add("is-opened");
      } else {
        refMobileMenuIcon.current.classList.remove("is-opened");
      }
    }
  };
  // TODO: Nejprve se zav5e menu a potom se skrokluje na sekci
  return (
    <HamburgerIconStyled ref={refMobileMenuIcon} onClick={props.handleOnClick}>
      <HamburgerIconLineStyled className='line-1'></HamburgerIconLineStyled>
      <HamburgerIconLineStyled className='line-2'></HamburgerIconLineStyled>
      <HamburgerIconLineStyled className='line-3'></HamburgerIconLineStyled>
    </HamburgerIconStyled>
  );
};

export default HamburgerIcon;
