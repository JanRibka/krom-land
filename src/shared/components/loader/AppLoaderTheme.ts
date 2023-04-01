import { createTheme } from '@mui/system';

const appLoaderTheme = createTheme({
  components: {
    CircleStyled: {
      variants: [
        {
          props: { order: "first" },
          style: {
            left: "15%",
          },
        },
        {
          props: { order: "second" },
          style: {
            left: "44.286%",
            animationDelay: "200ms",
          },
        },
        {
          props: { order: "third" },
          style: {
            left: "auto",
            right: "15%",
            animationDelay: "300ms",
          },
        },
      ],
    },
    ShadowStyled: {
      variants: [
        {
          props: { order: "first" },
          style: {
            left: "15%",
          },
        },
        {
          props: { order: "second" },
          style: {
            left: "44.286%",
            animationDelay: "200ms",
          },
        },
        {
          props: { order: "third" },
          style: {
            left: "auto",
            right: "15%",
            animationDelay: "300ms",
          },
        },
      ],
    },
  },
});

export default appLoaderTheme;
