import { Box } from "@mui/material";
import Footer from "../../shared-components/Footer";
import Navbar from "../../shared-components/Navbar";
import CheckYourEarnings from "./components/CheckYourEarnings";
import CryptoCurrencies from "./components/CryptoCurrencies";
import DetailedStats from "./components/DetailedStats";
import EarningsCalculator from "./components/EarningsCalculator";
import GraphWithText from "./components/GraphWithText";
import HeroSection from "./components/HeroSection";
import Investments from "./components/Investments";
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
      <DetailedStats />
      <Investments />
      <Footer />
    </Box>
  );
};

export default Home;
