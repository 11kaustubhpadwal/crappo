import { Box } from "@mui/material";
import { sectionTitleStyle, sectionWrapperStyles } from "./styles";

const GraphWithText = () => {
  return (
    <Box sx={sectionWrapperStyles}>
      <Box textAlign="center" sx={sectionTitleStyle}>
        Market sentiments, portfolio, and run the infrastructure of your choice
      </Box>
    </Box>
  );
};

export default GraphWithText;
