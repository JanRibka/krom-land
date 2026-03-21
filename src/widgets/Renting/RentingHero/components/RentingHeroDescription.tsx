import { Box, Grid } from "@mui/material";

import { RENTING_FEATURES } from "../constants/rentingFeatures";
import { FeatureCard } from "./FeatureCard";

export const RentingHeroDescription = () => {
  return (
    <Box
      sx={{
        maxWidth: { xs: "100%", md: "1200px" },
        margin: "0 auto",
        marginTop: { xs: "40px", md: "80px" },
        paddingX: { xs: 2, md: 4 },
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {RENTING_FEATURES.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

RentingHeroDescription.displayName = "RentingHeroDescription";
