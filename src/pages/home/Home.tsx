import { Box } from "@mui/material";
import Navbar from "../../shared-components/Navbar";
import CheckYourEarnings from "./components/CheckYourEarnings";
import CryptoCurrencies from "./components/CryptoCurrencies";
import EarningsCalculator from "./components/EarningsCalculator";
import GraphWithText from "./components/GraphWithText";
import HeroSection from "./components/HeroSection";
import Statistics from "./components/Statistics";
import Why from "./components/Why";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <Statistics />
      <Why />
      <CheckYourEarnings />
      <EarningsCalculator />
      <CryptoCurrencies />
      <GraphWithText />
    </Box>
  );
};

export default Home;
