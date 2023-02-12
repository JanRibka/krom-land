import { useRef } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import ActionSelectStyled from './styledComponents/ActionSelectStyled';

const ActionSelect = () => {
  // References
  const refButtonFirst = useRef<HTMLLIElement>(null);
  const refButtonSecond = useRef<HTMLLIElement>(null);
  const refButtonThird = useRef<HTMLLIElement>(null);
  const refTabFirst = useRef<HTMLDivElement>(null);
  const refTabSecond = useRef<HTMLDivElement>(null);
  const refTabThird = useRef<HTMLDivElement>(null);

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
          <Box className='tabs-wrapper'>
            <Box ref={refTabFirst} className='action-tab active'>
              Květen
            </Box>
            <Box ref={refTabSecond} className='action-tab'>
              Červen
            </Box>
            <Box ref={refTabThird} className='action-tab'>
              Červenec
            </Box>
          </Box>
        </>
      </Stack>
    </ActionSelectStyled>
  );
};

export default ActionSelect;
