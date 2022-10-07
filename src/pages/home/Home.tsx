import { Box } from "@mui/material";
import Navbar from "../../shared-components/Navbar";
import CheckYourEarnings from "./components/CheckYourEarnings";
import EarningsCalculator from "./components/EarningsCalculator";
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
    </Box>
  );
};

export default Home;
