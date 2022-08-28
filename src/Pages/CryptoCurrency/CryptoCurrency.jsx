import { React, useState, useEffect } from "react";
import { useGetCryptoQuery } from "../../redux/services/cryptoApi";

import SearchBar from "../../components/SearchBar/SearchBar";
import CryptoDesignItem from "../../components/CryptoCurrency/CryptoDesignItem";

import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@mui/styles";

const CryptoCurrency = ({ isActive }) => {
  const { data: cryptosList, isFetching } = useGetCryptoQuery(15);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const searchResults = cryptosList?.data?.coins?.filter((item) =>
      item?.name?.toLowerCase().includes(searchTerm)
    );

    setCryptos(searchResults);
  }, [cryptosList, searchTerm]);

  if (isFetching) return "Loading...";

  return (
    <Box style={{ width: "100%" }}>
      {isActive ? null : (
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      )}
      {console.log(cryptos)}

      <Box>
        <Grid container rowSpacing={3} columnSpacing={2}>
          {cryptos?.map((currency) => (
            // <CryptoCurrencyItem
            //   onClick={() => {
            //     console.log("hello");
            //   }}
            //   title={currency?.name}
            //   imgUrl={currency?.iconUrl}
            //   description={currency?.name}
            //   price={currency?.price}
            //   marketCap={currency?.marketCap}
            //   change={currency?.change}
            //   currencyID={currency?.uuid}
            //   key={currency?.uuid}
            // />

            <CryptoDesignItem
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
