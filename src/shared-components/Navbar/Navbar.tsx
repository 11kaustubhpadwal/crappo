import { Button, Grid } from "@mui/material";
import logo from "../../assets/Logo.svg";
import { navbarItems } from "./constants";
import {
  buttonStyles,
  loginLinkStyles,
  navbarWrapperStyles,
  navLinkItemStyle,
} from "./styles";

const Navbar = () => {
  return (
    <Grid container sx={navbarWrapperStyles} alignItems="center" gap={2}>
      <Grid item>
        <img src={logo} alt="logo" />
      </Grid>
      <Grid item xs>
        CRAPPO
      </Grid>
      {navbarItems.map((item, index) => (
        <Grid
          item
          key={`navbar-link-item-${index}`}
          mr={2}
          sx={navLinkItemStyle}
        >
          {item.name}
        </Grid>
      ))}
      <Grid item pl={6} pr={3} sx={loginLinkStyles}>
        Login
      </Grid>
      <Grid item pl={1}>
        <Button sx={buttonStyles}>Register</Button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
