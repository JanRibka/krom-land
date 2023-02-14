import { useRef } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

import Action from '../action/Action';
import ActionFirstImage from '../img/img_4-copyright.png';
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
              name='Akce na květen'
              description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Maecenas aliquet accumsan leo. Integer imperdiet lectus quis justo. Integer tempor. Suspendisse nisl. Integer malesuada. Aenean placerat. Suspendisse nisl. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. In convallis.'
              backgroundColor={theme.palette.secondary.main}
              image={ActionFirstImage}
              imageAlt='Alt'
              videoUrl='https://www.youtube.com/watch?v=YSHDBB6id4A'
              kdy='13.10.-14.10.2023'
              kde='Hradec nad Moravicí'
              cena='3 333'
            />
            <Action
              ref={refTabSecond}
              name='Akce na červen'
              description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Maecenas aliquet accumsan leo. Integer imperdiet lectus quis justo. Integer tempor. Suspendisse nisl. Integer malesuada. Aenean placerat. Suspendisse nisl. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. In convallis.'
              backgroundColor={theme.palette.primary.main}
              image={ActionFirstImage}
              imageAlt='Alt2'
              videoUrl='https://www.youtube.com/watch?v=3fnPwj1AMpo'
              kdy='Zítra'
              kde='Kobeřice'
              cena='555'
            />
            <Action
              ref={refTabThird}
              name='Akce na červenec'
              description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Maecenas aliquet accumsan leo. Integer imperdiet lectus quis justo. Integer tempor. Suspendisse nisl. Integer malesuada. Aenean placerat. Suspendisse nisl. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. In convallis.'
              backgroundColor={theme.palette.common.purple.main}
              image={ActionFirstImage}
              imageAlt='Alt3'
              kdy='ZítraKobeřice'
              kde='Kobeřice'
              cena='555'
            />
          </Box>
        </>
      </Stack>
    </ActionSelectStyled>
  );
};

export default ActionSelect;
