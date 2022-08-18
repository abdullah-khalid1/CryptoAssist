import { React } from "react";
import CryptoCurrency from "../CryptoCurrency/CryptoCurrency";
import CryptoStats from "../../components/CryptoStats/CryptoStats";
import { Grid } from "@material-ui/core";

const Home = () => {
  return (
    <div>
      <Grid container direction="column">
        <Grid item xs={9}>
          <CryptoStats />
        </Grid>

        <Grid item xs={9}>
          <CryptoCurrency isActive={true} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
