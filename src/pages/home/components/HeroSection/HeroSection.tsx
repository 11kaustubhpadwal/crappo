import { Box, Button, Grid } from "@mui/material";
import arrowRight from "../../../../assets/Arrow-Right.svg";
import illustration from "../../../../assets/Illustration.svg";
import { iconButtonStyle } from "../../styled";
import { saleOfferWrapper, salePromoTextStyle, saleValueStyle } from "./styles";

const ButtonIcon = () => (
  <img
    src={arrowRight}
    alt="button-try-for-free"
    style={{ marginBottom: "-0.5rem" }}
  />
);

const HeroSection = () => {
  return (
    <Box sx={{ background: "#0F054C", padding: "6rem" }}>
      <Grid container>
        <Grid item sm>
          <Grid container alignItems="center" sx={saleOfferWrapper}>
            <Grid item sx={saleValueStyle}>
              75% SAVE
            </Grid>
            <Grid item sx={salePromoTextStyle}>
              For the Black Friday weekend
            </Grid>
          </Grid>
          <Box
            sx={{ color: "#ffffff", fontSize: "4rem", fontWeight: 700 }}
            mt={4}
          >
            <Box>Fastest & secure</Box>
            <Box>platform to invest</Box>
            <Box>in crypto</Box>
          </Box>
          <Box sx={{ color: "#E0E0E0", lineHeight: "1.75rem" }} mb={4} mt={4}>
            <Box mb={0.25}>
              Buy and sell cryptocurrencies, trusted by 10M wallets
            </Box>
            <Box>with over $30 billion in transactions.</Box>
          </Box>
          <Button sx={iconButtonStyle}>
            <Grid
              container
              alignItems="center"
              gap={2}
              sx={{ padding: ".5rem 1rem" }}
            >
              <Grid item>Try for FREE</Grid>
              <Grid item>
                <ButtonIcon />
              </Grid>
            </Grid>
          </Button>
        </Grid>
        <Grid item sm>
          <img src={illustration} alt="illustration" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
