import { React } from "react";
import CryptoCurrency from "../CryptoCurrency/CryptoCurrency";
import CryptoStats from "../../components/CryptoStats/CryptoStats";
import { Grid } from "@material-ui/core";

const Home = () => {
  return (
    <>
      <Grid container direction="column">
        <Grid item xs={12}>
          <CryptoStats />
        </Grid>

        <Grid item xs={12}>
          <CryptoCurrency isActive={true} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
