import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React from "react";

const EarningsCalculator = () => {
  const [crypto, setCrypto] = React.useState("TH");

  const handleChange = (event: SelectChangeEvent) => {
    setCrypto(event.target.value);
  };

  return (
    <Box
      sx={{
        boxShadow: "0 1.25rem 12.5rem 0 #3917770D",
        padding: "3rem",
        position: "relative",
        width: "50%",
        zIndex: 1000,
        margin: "-11rem auto",
        background: "#ffffff",
        borderRadius: "1.5rem",
      }}
    >
      <Grid container alignItems="end" gap={5} mb={12}>
        <Grid item xs={6}>
          <TextField
            label="Enter your hash rate"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs>
          <Select
            value={crypto}
            onChange={handleChange}
            label="Crypto"
            fullWidth
            variant="standard"
          >
            <MenuItem value={"TH"}>TH/s</MenuItem>
            <MenuItem value={"BTC"}>BTC/s</MenuItem>
            <MenuItem value={"ETH"}>ETH/s</MenuItem>
          </Select>
        </Grid>
        <Grid item textAlign="center" xs>
          <Button
            sx={{
              background: "#3671E9",
              color: "#ffffff",
              textTransform: "none",
              borderRadius: "2rem",
              padding: ".7rem 1.5rem",
              ":hover": {
                background: "#3671E9",
              },
            }}
          >
            Calculate
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ fontWeight: 500, color: "#3671E9" }} mb={3}>
        ESTIMATED 24 HOUR REVENUE:
      </Box>
      <Box sx={{ fontSize: "2rem", fontWeight: 700 }} mb={1}>
        0.055 130 59 ETH <span style={{ color: "#3671E9" }}>($1275)</span>
      </Box>
      <Box sx={{ color: "#828282" }}>
        Revenue will change based on mining difficulty and Ethereum price.
      </Box>
    </Box>
  );
};

export default EarningsCalculator;
