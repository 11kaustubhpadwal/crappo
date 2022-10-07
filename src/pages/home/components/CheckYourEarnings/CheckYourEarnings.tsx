import { Box } from "@mui/material";
import wrapperStyle from "./styles";

const CheckYourEarnings = () => {
  return (
    <Box sx={wrapperStyle}>
      <Box sx={{ fontSize: 40, fontWeight: 700 }} mb={4}>
        Check how much you can earn
      </Box>
      <Box mb={1}>
        Let’s check your hash rate to see how much you will earn today,
      </Box>
      <Box>Exercitation veniam consequat sunt nostrud amet.</Box>
    </Box>
  );
};

export default CheckYourEarnings;
