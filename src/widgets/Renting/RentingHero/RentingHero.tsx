import Stack from "@mui/material/Stack";

import { RentingHeroDescription } from "./components/RentingHeroDescription";
import { RentingHeroTitle } from "./components/RentingHeroTitle";

export const RentingHero = () => {
  return (
    <Stack direction="column">
      <RentingHeroTitle />
      <RentingHeroDescription />
    </Stack>
  );
};

RentingHero.displayName = "RentingHero";
