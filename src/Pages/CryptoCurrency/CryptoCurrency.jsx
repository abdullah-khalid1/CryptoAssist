import { React, useState, useEffect } from "react";
import { useGetCryptoQuery } from "../../redux/services/cryptoApi";
import CryptoCurrencyItem from "../../components/CryptoCurrency/CryptoCurrencyItem";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./CryptoCurrency.css";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  width: { display: "flex", width: "100%", justifyContent: "space-around" },
});

const CryptoCurrency = ({ isActive }) => {
  const { data: cryptosList, isFetching } = useGetCryptoQuery(15);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const classes = useStyles();

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const searchResults = cryptosList?.data?.coins?.filter((item) =>
      item?.name?.toLowerCase().includes(searchTerm)
    );

    setCryptos(searchResults);
  }, [cryptosList, searchTerm]);

  if (isFetching) return "Loading...";

  return (
    <Box
      sx={{
        width: "80%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {isActive ? null : (
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      )}

      <Box className={classes.width}>
        <Grid container rowSpacing={3} columnSpacing={2}>
          {cryptos?.map((currency) => (
            <CryptoCurrencyItem
              onClick={() => {
                console.log("hello");
              }}
              title={currency?.name}
              imgUrl={currency?.iconUrl}
              description={currency?.name}
              price={currency?.price}
              marketCap={currency?.marketCap}
              change={currency?.change}
              currencyID={currency?.uuid}
              key={currency?.uuid}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CryptoCurrency;
