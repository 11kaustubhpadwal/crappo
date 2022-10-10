import { Box, Button, Grid } from "@mui/material";
import arrowUp from "../../../../assets/arrow-up.svg";
import bitcoin from "../../../../assets/bitcoin.svg";
import statsGraph from "../../../../assets/stats-graph.svg";
import { buttonStyles } from "../../../../shared-components/Navbar/styles";
import {
  graphCardWrapper,
  sectionTitleStyle,
  sectionWrapperStyles,
  smallCardsWrapper,
  smallCardsWrapper2,
} from "./styles";

const GraphWithText = () => {
  return (
    <Box sx={sectionWrapperStyles}>
      <Box textAlign="center" sx={sectionTitleStyle}>
        Market sentiments, portfolio, and run the infrastructure of your choice
      </Box>
      <Grid container mt={12} sx={{ padding: "0 6rem" }}>
        <Grid item sm sx={{ color: "#ffffff" }}>
          <Box sx={{ fontSize: 32, fontWeight: 700 }}>Invest Smart</Box>
          <Box mt={4} mb={4} pr={30} sx={{ lineHeight: "1.75rem" }}>
            Get full statistic information about the behaviour of buyers and
            sellers will help you to make the decision.
          </Box>
          <Button sx={buttonStyles}>Learn More</Button>
        </Grid>
        <Grid item sm="auto" pr={3}>
          <Box sx={graphCardWrapper}>
            <Grid container gap={2}>
              <Grid item>
                <img
                  src={bitcoin}
                  alt="bitcoin"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                />
              </Grid>
              <Grid item sm>
                <Box sx={{ fontSize: 24 }} mb={0.5}>
                  Bitcoin{" "}
                  <span
                    style={{
                      fontSize: 16,
                      color: "#CFCFCF",
                    }}
                  >
                    BTC
                  </span>
                </Box>
                <Box sx={{ fontSize: 14 }}>0.00080 BTC</Box>
              </Grid>
              <Grid item sx={{ fontSize: 14, color: "#42FFFF" }}>
                +125%
              </Grid>
            </Grid>
            <img src={statsGraph} alt="stats-graph" />
            <Grid
              container
              gap={12}
              justifyContent="center"
              sx={{ position: "relative" }}
            >
              <Grid item>
                <Box sx={smallCardsWrapper}>
                  <Box sx={{ fontSize: 20, fontWeight: 500 }}>
                    Increase in Trade
                  </Box>
                  <Grid container mt={3} mb={3} gap={1}>
                    <Grid item sx={{ fontSize: 24, fontWeight: 700 }}>
                      +75%
                    </Grid>
                    <Grid item>
                      <img src={arrowUp} alt="arrow-up" />
                    </Grid>
                  </Grid>
                  <Box sx={{ color: "#F2F2F2" }}>Sell option</Box>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={smallCardsWrapper2}>
                  <Box sx={{ fontSize: 24, fontWeight: 700 }} mb={0.5}>
                    $15.32
                  </Box>
                  <Box sx={{ fontSize: 20, fontWeight: 500, color: "#F2F2F2" }}>
                    Price in dollar
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GraphWithText;
