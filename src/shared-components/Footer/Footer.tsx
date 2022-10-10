import { Box, Grid } from "@mui/material";
import bitcoinCurrency from "../../assets/BItcoinCurrency.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import logo from "../../assets/Logo.svg";
import mastercard from "../../assets/Mastercard.svg";
import twitter from "../../assets/twitter.svg";
import visa from "../../assets/Visa.svg";
import youtube from "../../assets/youtube.svg";
import { quickLinkItems, resourcesItems } from "./constants";
import {
  cardPaymentsIconsStyle,
  footerLinkStyle,
  footerWrapper,
  socialIconsStyle,
} from "./styles";

const Footer = () => {
  return (
    <Box sx={footerWrapper}>
      <Grid container>
        <Grid item sm>
          <Grid container alignItems="center" gap={1.5}>
            <Grid item>
              <img src={logo} alt="logo" />
            </Grid>
            <Grid item xs sx={{ fontSize: 18, fontWeight: 500 }}>
              CRAPPO
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm>
          <Box sx={{ fontSize: 20, fontWeight: 500 }} mb={5}>
            Quick Link
          </Box>
          <Box>
            {quickLinkItems.map((item, index) => (
              <Box
                key={`footer-quick-link-item-${index}`}
                mb={2}
                sx={footerLinkStyle}
              >
                {item.name}
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item sm>
          <Box sx={{ fontSize: 20, fontWeight: 500 }} mb={5}>
            Resources
          </Box>
          <Box>
            {resourcesItems.map((item, index) => (
              <Box
                key={`footer-resources-link-item-${index}`}
                mb={2}
                sx={footerLinkStyle}
              >
                {item.name}
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item sm>
          <Box sx={{ fontSize: 32, fontWeight: 500 }} mb={5}>
            We accept following payment systems
          </Box>
          <Grid container gap={3}>
            <Grid item sx={cardPaymentsIconsStyle}>
              <img src={visa} alt="visa" />
            </Grid>
            <Grid item sx={cardPaymentsIconsStyle}>
              <img src={mastercard} alt="mastercard" />
            </Grid>
            <Grid item sx={cardPaymentsIconsStyle}>
              <img src={bitcoinCurrency} alt="bitcoin-currency" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container mt={12}>
        <Grid item sm>
          <Box sx={{ fontSize: 16 }}>©2021 CRAPPO. All rights reserved</Box>
        </Grid>
        <Grid item>
          <Grid container gap={4}>
            <Grid item sx={socialIconsStyle}>
              <img src={facebook} alt="facebook" />
            </Grid>
            <Grid item sx={socialIconsStyle}>
              <img src={instagram} alt="instagram" />
            </Grid>
            <Grid item sx={socialIconsStyle}>
              <img src={youtube} alt="youtube" />
            </Grid>
            <Grid item sx={socialIconsStyle}>
              <img src={twitter} alt="twitter" />
            </Grid>
            <Grid item sx={socialIconsStyle}>
              <img src={linkedin} alt="linkedin" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
