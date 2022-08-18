import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { CardActionArea, Grid } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import Image from "material-ui-image";
import millify from "millify";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  cardSpacing: {
    padding: 10,
  },
  descriptionSpacing: {
    marginTop: 20,
  },
  titleColor: { color: "grey" },
});

const CryptoCurrencyItem = ({
  title,
  change,
  price,
  marketCap,
  imgUrl,
  currencyID,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className="App">
      <Card onClick={() => navigate("/crypto", { state: { id: currencyID } })}>
        <CardActionArea>
          <Grid container direction="column" xs={12}>
            <Grid
              container
              direction="row"
              xs={12}
              className={classes.cardSpacing}
            >
              <Grid item xs={6} alignItems="center">
                <Typography>{title}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.titleColor}>
                  <Image src={imgUrl} />
                </Typography>
              </Grid>
            </Grid>
            <Divider light />
            <Grid item xs={12}>
              <CardContent>
                <Typography variant="p">Price {millify(price)}</Typography>
                <Typography variant="p">
                  Market Cap: {millify(marketCap)}
                </Typography>
                <br />
                <Typography variant="p" className={classes.descriptionSpacing}>
                  Daily Change: {change}
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CryptoCurrencyItem;
