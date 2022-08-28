import { Box, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import CryptoNewsItem from "../../components/CryptoNews/CryptoNewsItem";
import { useGetCryptoNewsQuery } from "../../redux/services/newsApi";

const CryptoNews = () => {
  const { data: newsList, loading } = useGetCryptoNewsQuery("crypto");
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsList?.articles);
  }, [newsList]);

  if (loading) return <p>Loading...</p>;

  console.log(news);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={3} columnSpacing={2}>
        {news?.map((newsItem) => (
          <CryptoNewsItem
            title={newsItem.title}
            description={newsItem?.description}
            urlToImage={newsItem.urlToImage}
            author={newsItem.author}
            source={newsItem.source.name}
            publishedAt={newsItem.publishedAt}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default CryptoNews;
