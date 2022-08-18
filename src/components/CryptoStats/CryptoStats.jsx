import { Typography } from "@mui/material";
import { React } from "react";
import millify from "millify";
import { Grid } from "@material-ui/core";
import Divider from "@mui/material/Divider";
import { useGetCryptoQuery } from "../../redux/services/cryptoApi";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  titleColor: { color: "grey" },
  valueColor: { color: "lightBlack" },
});

const CryptoStats = () => {
  const { data, isFetching } = useGetCryptoQuery(15);
  const classes = useStyles();

  const stats = data?.data?.stats;

  if (isFetching) return "Loading...";

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 2, mt: 2 }}>
        Global Crypto Stats
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="h6" className={classes.titleColor}>
            Total Crypto Currencies
          </Typography>
          <Typography variant="h6" className={classes.valueColor}>
            {millify(stats.total)}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" className={classes.titleColor}>
            Total Coins
          </Typography>
          <Typography variant="h6">{millify(stats.totalCoins)}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" className={classes.titleColor}>
            Total Exchanges
          </Typography>
          <Typography variant="h6">{millify(stats.totalExchanges)}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" className={classes.titleColor}>
            Total Market Cap
          </Typography>
          <Typography variant="h6">{millify(stats.totalMarketCap)}</Typography>
        </Grid>

        <Divider xs={12} light />
      </Grid>
    </div>
  );
};

export default CryptoStats;
