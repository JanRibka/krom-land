import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Box
      className="card-box"
      sx={{
        p: { xs: 3, md: 4 },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        borderRadius: 4,
        bgcolor: "background.paper",
        boxShadow: "0 10px 40px -10px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 14px 50px -10px rgba(0,0,0,0.15)",
        },
      }}
    >
      <Box
        sx={{
          mb: 3,
          width: 72,
          height: 72,
          borderRadius: "50%",
          bgcolor: (theme) => `${theme.palette.primary.main}1A`, // 10% opacity primary color
          color: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease-in-out",
          ".card-box:hover &": {
            transform: "scale(1.1)",
            bgcolor: "primary.main",
            color: "primary.contrastText",
          },
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h6"
        component="h3"
        sx={{ mb: 2, fontWeight: 600, fontSize: "1.25rem" }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="text.primary.light"
        sx={{ lineHeight: 1.7 }}
      >
        {description}
      </Typography>
    </Box>
  );
};
