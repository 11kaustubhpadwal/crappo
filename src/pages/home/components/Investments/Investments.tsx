import { Box, Button, Grid } from "@mui/material";
import table from "../../../../assets/Table.svg";
import { buttonStyles } from "../../../../shared-components/Navbar/styles";

const Investments = () => {
  return (
    <Grid container sx={{ background: "#2D1C6F" }} pl={13} pr={13} pb={12}>
      <Grid item sm sx={{ color: "#ffffff" }}>
        <Box sx={{ fontSize: 32, fontWeight: 700 }}>
          Grow your profit and track your investments
        </Box>
        <Box mt={4} mb={4} pr={15} sx={{ lineHeight: "1.75rem" }}>
          Use advanced analytical tools. Clear TradingView charts let you track
          current and historical profit investments.
        </Box>
        <Button sx={buttonStyles}>Learn More</Button>
      </Grid>
      <Grid item sm sx={{ marginLeft: "auto" }}>
        <img src={table} alt="table" />
      </Grid>
    </Grid>
  );
};

export default Investments;
