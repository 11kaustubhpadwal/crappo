import { Box, Button, Grid } from "@mui/material";
import illustrations from "../../../../assets/Illustrations.svg";
import { learnButtonStyle, whyWrapper } from "./styles";

const Why = () => {
  return (
    <Grid container sx={whyWrapper} gap={3}>
      <Grid item sm>
        <img src={illustrations} alt="why-illustrations" />
      </Grid>
      <Grid item sm>
        <Box sx={{ fontSize: 40, fontWeight: 700 }}>Why you should choose</Box>
        <Box sx={{ fontSize: 40, fontWeight: 700 }} mb={5}>
          CRAPPO
        </Box>
        <Box mb={1.5}>Experience the next generation cryptocurrency</Box>
        <Box mb={1.5}>platform. No financial borders, extra fees, and fake</Box>
        <Box mb={5}>reviews.</Box>
        <Button sx={learnButtonStyle}>Learn More</Button>
      </Grid>
    </Grid>
  );
};

export default Why;
