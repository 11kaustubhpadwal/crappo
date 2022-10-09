import { Box, Button, Grid } from "@mui/material";
import detailedStats from "../../../../assets/Statistic.svg";
import { buttonStyles } from "../../../../shared-components/Navbar/styles";

const DetailedStats = () => {
  return (
    <Grid
      container
      sx={{ background: "#2D1C6F" }}
      pt={19}
      pb={14}
      alignItems="center"
      gap={18}
    >
      <Grid item sm>
        <img src={detailedStats} alt="detailed-stats" />
      </Grid>
      <Grid item sx={{ color: "#ffffff" }} sm>
        <Box sx={{ fontSize: 32, fontWeight: 700 }}>Detailed Statistics</Box>
        <Box mt={4} mb={4} pr={25} sx={{ lineHeight: "1.75rem" }}>
          View all mining related information in realtime, at any point at any
          location and decide which polls you want to mine in.
        </Box>
        <Button sx={buttonStyles}>Learn More</Button>
      </Grid>
    </Grid>
  );
};

export default DetailedStats;
