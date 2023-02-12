import { useRef } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

import Action from '../action/Action';
import ActionSelectStyled from './styledComponents/ActionSelectStyled';

const ActionSelect = () => {
  // References
  const refButtonFirst = useRef<HTMLLIElement>(null);
  const refButtonSecond = useRef<HTMLLIElement>(null);
  const refButtonThird = useRef<HTMLLIElement>(null);
  const refTabFirst = useRef<HTMLDivElement>(null);
  const refTabSecond = useRef<HTMLDivElement>(null);
  const refTabThird = useRef<HTMLDivElement>(null);

  // Constants
  const theme = useTheme();

  // Other
  const handleOnCLick = (value: number) => {
    if (value === 0) {
      // MenuButtons
      refButtonFirst.current?.classList.add("active");
      refButtonSecond.current?.classList.remove("active");
      refButtonThird.current?.classList.remove("active");

      // Tabs
      refTabFirst.current?.classList.add("active");
      refTabSecond.current?.classList.remove("active");
      refTabThird.current?.classList.remove("active");
    } else if (value === 1) {
      // MenuButtons
      refButtonSecond.current?.classList.add("active");
      refButtonFirst.current?.classList.remove("active");
      refButtonThird.current?.classList.remove("active");

      // Tabs
      refTabSecond.current?.classList.add("active");
      refTabFirst.current?.classList.remove("active");
      refTabThird.current?.classList.remove("active");
    } else if (value === 2) {
      // MenuButtons
      refButtonThird.current?.classList.add("active");
      refButtonFirst.current?.classList.remove("active");
      refButtonSecond.current?.classList.remove("active");

      // Tabs
      refTabThird.current?.classList.add("active");
      refTabFirst.current?.classList.remove("active");
      refTabSecond.current?.classList.remove("active");
    }
  };

  return (
    <ActionSelectStyled>
      <Stack>
        <>
          <Box component='ul'>
            <Box
              ref={refButtonFirst}
              component='li'
              className='active'
              onClick={() => handleOnCLick(0)}
            >
              <Box component='span'>Květen</Box>
            </Box>
            <Box
              ref={refButtonSecond}
              component='li'
              onClick={() => handleOnCLick(1)}
            >
              <Box component='span'>Červen</Box>
            </Box>
            <Box
              ref={refButtonThird}
              component='li'
              onClick={() => handleOnCLick(2)}
            >
              <Box component='span'>Červenec</Box>
            </Box>
          </Box>
        </>
        <>
          <Box>
            <Action
              ref={refTabFirst}
              className='active'
              name='Květen'
              backgroundColor={theme.palette.secondary.main}
            />
            <Action
              ref={refTabSecond}
              name='Červen'
              backgroundColor={theme.palette.primary.main}
            />
            <Action
              ref={refTabThird}
              name='Červenec'
              backgroundColor={theme.palette.common.purple.main}
            />
          </Box>
        </>
      </Stack>
    </ActionSelectStyled>
  );
};

export default ActionSelect;
