import { Box, Typography } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

interface RentingTotalPriceProps {
  totalPrice: number;
}

export const RentingTotalPrice = ({ totalPrice }: RentingTotalPriceProps) => {
  return (
    <Box className="total-price-container">
      <Box className="label-wrapper">
        <Box className="icon-wrapper">
          <LocalOfferIcon />
        </Box>
        <Box>
          <Typography variant="subtitle2" className="price-label">
            Celková cena
          </Typography>
        </Box>
      </Box>
      <Typography variant="h4" className="price-display">
        {totalPrice.toLocaleString("cs-CZ")}
        <Typography component="span" variant="h6" className="currency">
          Kč
        </Typography>
      </Typography>
    </Box>
  );
};
