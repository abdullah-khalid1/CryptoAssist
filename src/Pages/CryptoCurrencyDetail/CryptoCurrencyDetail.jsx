import { React, useState } from "react";
import { Typography } from "@mui/material";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { useGetCryptoHistoryQuery } from "../../redux/services/cryptoApi";
import Chart from "../../components/Chart";
import { useGetCryptoDetailsQuery } from "../../redux/services/cryptoApi";
import { useLocation } from "react-router-dom";
import TimeToggle from "../../components/TimeToggle";

const CryptoCurrencyDetail = ({ name, price }) => {
  const location = useLocation();
  const coinId = location.state.id;
  const [timeperiod, setTimeperiod] = useState("1d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod,
  });
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return "Loading...";

  return (
    <Grid container direction="column">
      <TimeToggle setTimeperiod={setTimeperiod} />
      <Chart
        coinHistory={coinHistory}
        currentPrice={cryptoDetails?.price}
        coinName={cryptoDetails?.name}
      />
      {console.log(coinHistory)}

      <Typography variant="h3"> Value statistics</Typography>
      <Typography variant="h5">
        An overview showing the statistics of ¢{name}, such as the base and
        quote currency, the rank, and trading volume.
      </Typography>

      <Grid container direction="row">
        <Grid item xs={12}>
          Price to USD
        </Grid>

        <Grid item xs={12}>
          {price}
        </Grid>

        <Divider />
      </Grid>

      <Grid container direction="row">
        <Grid item xs={12}>
          Price to USD
        </Grid>

        <Grid item xs={12}>
          {price}
        </Grid>

        <Divider />
      </Grid>

      <Grid container direction="row">
        <Grid item xs={12}>
          Price to USD
        </Grid>

        <Grid item xs={12}>
          {price}
        </Grid>

        <Divider />
      </Grid>
    </Grid>
  );
};
export default CryptoCurrencyDetail;
