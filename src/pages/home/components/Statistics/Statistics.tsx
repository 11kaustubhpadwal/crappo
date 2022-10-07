import { Box, Grid } from "@mui/material";
import globe from "../../../../assets/globe.svg";
import graph from "../../../../assets/graph.svg";
import person from "../../../../assets/person.svg";
import { statisticsWrapper } from "./styles";

const Statistics = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={statisticsWrapper}
      gap={23}
    >
      <Grid item>
        <Grid container alignItems="center" gap={4}>
          <Grid item>
            <img src={graph} alt="graph" />
          </Grid>
          <Grid item>
            <Box sx={{ fontSize: 40, fontWeight: 700, marginBottom: "1rem" }}>
              $30B
            </Box>
            <Box>Digital Currency Exchanged</Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container alignItems="center" gap={4}>
          <Grid item>
            <img src={person} alt="person" />
          </Grid>
          <Grid item>
            <Box sx={{ fontSize: 40, fontWeight: 700, marginBottom: "1rem" }}>
              10M+
            </Box>
            <Box>Trusted Wallets Investor</Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container alignItems="center" gap={4}>
          <Grid item>
            <img src={globe} alt="globe" />
          </Grid>
          <Grid item>
            <Box sx={{ fontSize: 40, fontWeight: 700, marginBottom: "1rem" }}>
              195
            </Box>
            <Box>Countries Supported</Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Statistics;
