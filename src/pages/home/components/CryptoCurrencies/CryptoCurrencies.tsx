import { Box, Button, Grid, IconButton } from "@mui/material";
import { useState } from "react";
import arrowButton from "../../../../assets/arrow-button.svg";
import arrowRight from "../../../../assets/Arrow-Right.svg";
import bitcoin from "../../../../assets/bitcoin.svg";
import ethereum from "../../../../assets/ethereum.svg";
import litecoin from "../../../../assets/litecoin.svg";
import { iconButtonStyle } from "../../styled";
import {
  cardAbbreviationStyle,
  cardActiveStyle,
  cardInactiveStyle,
  sectionHeadingStyle,
  sectionWrapperStyle,
} from "./styles";

const ButtonIcon = () => (
  <img
    src={arrowRight}
    alt="button-start-mining"
    style={{ marginBottom: "-0.5rem" }}
  />
);

const IconButtonArrowIcon = () => (
  <img
    src={arrowButton}
    alt="button-start"
    style={{ marginBottom: "-0.5rem" }}
  />
);

const CryptoCurrencies = () => {
  const [isSelected, setIsSelected] = useState("1");

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsSelected(e.currentTarget.id);
  };

  const getCardStyle = (cardId: string) => {
    return isSelected === cardId ? cardActiveStyle : cardInactiveStyle;
  };

  const getCardButtonStyle = (cardId: string) => {
    return isSelected === cardId ? (
      <Button sx={iconButtonStyle}>
        <Grid
          container
          alignItems="center"
          gap={2}
          sx={{ padding: ".5rem 1rem" }}
        >
          <Grid item>Start mining</Grid>
          <Grid item>
            <ButtonIcon />
          </Grid>
        </Grid>
      </Button>
    ) : (
      <IconButton sx={{ ":hover": {}, padding: "0" }}>
        <IconButtonArrowIcon />
      </IconButton>
    );
  };

  return (
    <Box sx={sectionWrapperStyle}>
      <Box sx={sectionHeadingStyle} mb={13}>
        Trade securely and market the high growth cryptocurrencies.
      </Box>
      <Grid container textAlign="center" sx={{ padding: "0 6rem" }} gap={6}>
        <Grid item sm sx={{ cursor: "pointer" }}>
          <Box sx={getCardStyle("1")} onClick={handleClick} id="1">
            <img src={bitcoin} alt="bitcoin" />
            <Grid container justifyContent="center" mt={6} gap={1}>
              <Grid item sx={{ fontSize: 32, fontWeight: 700 }}>
                Bitcoin
              </Grid>
              <Grid item sx={cardAbbreviationStyle}>
                BTC
              </Grid>
            </Grid>
            <Box mt={4} mb={4} sx={{ lineHeight: "1.8rem" }}>
              Digital currency in which a record of transactions is maintained.
            </Box>
            {getCardButtonStyle("1")}
          </Box>
        </Grid>
        <Grid item sm sx={{ cursor: "pointer" }}>
          <Box sx={getCardStyle("2")} onClick={handleClick} id="2">
            <img src={ethereum} alt="ethereum" />
            <Grid container justifyContent="center" mt={6} gap={1}>
              <Grid item sx={{ fontSize: 32, fontWeight: 700 }}>
                Ethereum
              </Grid>
              <Grid item sx={cardAbbreviationStyle}>
                ETH
              </Grid>
            </Grid>
            <Box mt={4} mb={4} sx={{ lineHeight: "1.8rem" }}>
              Blockchain technology to create and run decentralized digital
              applications.
            </Box>
            {getCardButtonStyle("2")}
          </Box>
        </Grid>
        <Grid item sm sx={{ cursor: "pointer" }}>
          <Box sx={getCardStyle("3")} onClick={handleClick} id="3">
            <img src={litecoin} alt="litecoin" />
            <Grid container justifyContent="center" mt={6} gap={1}>
              <Grid item sx={{ fontSize: 32, fontWeight: 700 }}>
                Litecoin
              </Grid>
              <Grid item sx={cardAbbreviationStyle}>
                LTC
              </Grid>
            </Grid>
            <Box mt={4} mb={4} sx={{ lineHeight: "1.8rem" }}>
              Cryptocurrency that enables instant payments to anyone in the
              world.
            </Box>
            {getCardButtonStyle("3")}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CryptoCurrencies;
