import { forwardRef, HTMLAttributes, Ref } from 'react';

import ActionStyled from './styledComponents/ActionStyled';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  backgroundColor: string;
}

const Action = forwardRef((props: IProps, ref: Ref<HTMLDivElement>) => {
  // Constants
  const { name, backgroundColor, ...restProps } = props;
  return (
    <ActionStyled
      sx={{ backgroundColor: props.backgroundColor }}
      ref={ref}
      {...restProps}
    >
      {props.name}
    </ActionStyled>
  );
});

export default Action;
