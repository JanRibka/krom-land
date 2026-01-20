import { useSelector } from "react-redux";
import { selectHomeAboutUs } from "shared/infrastructure/store/home/homeSlice";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import SectionTitle from "../../../../shared/components/sectionTitle/SectionTitle";
import AboutUsStyled from "./styledComponents/AboutUsStyled";

const AboutUs = () => {
  // Store
  const homeAboutUs = useSelector(selectHomeAboutUs);

  // Constants
  const theme = useTheme();
  const xlDwn = useMediaQuery(theme.breakpoints.down("xl"));
  const lgDwn = useMediaQuery(theme.breakpoints.down("lg"));
  const pictDescWrapperDirection = lgDwn ? "column" : "row";
  const pictDescWrapperSpacing = lgDwn ? 5 : xlDwn ? 15 : 30;

  return (
    <AboutUsStyled>
      <Stack spacing={5} direction="column" sx={{ width: "100%" }}>
        {/* Obrázek */}
        <Stack
          spacing={pictDescWrapperSpacing}
          direction={pictDescWrapperDirection}
        >
          <Box className="about-us-image-wrapper">
            <Box
              component="img"
              src={homeAboutUs.aboutUsImagePath ?? ""}
              alt={homeAboutUs.aboutUsImageAlt ?? ""}
              loading="lazy"
              className="about-us-image"
            />
          </Box>

          {/* Popis */}
          <Box className="description-wrapper">
            <Box>
              <Box className="description-inner-wrapper">
                <Box>
                  <SectionTitle
                    mainText={"KROM Land"}
                    mainTextVariant="h1"
                    secondaryText="O nás"
                  />
                  {!!homeAboutUs.aboutUs ? (
                    <Box
                      component="span"
                      dangerouslySetInnerHTML={{ __html: homeAboutUs.aboutUs }}
                    />
                  ) : (
                    <Stack spacing={1}>
                      <Skeleton
                        variant="rectangular"
                        className="skeleton-line"
                      />
                      <Skeleton
                        variant="rectangular"
                        className="skeleton-line"
                      />
                      <Skeleton
                        variant="rectangular"
                        className="skeleton-line"
                      />
                      <Skeleton
                        variant="rectangular"
                        className="skeleton-line"
                      />
                      <Skeleton
                        variant="rectangular"
                        className="skeleton-paragraph"
                      />
                    </Stack>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </AboutUsStyled>
  );
};

export default AboutUs;
