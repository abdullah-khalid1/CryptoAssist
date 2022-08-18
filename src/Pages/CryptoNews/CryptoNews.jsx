import { Box, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import CryptoNewsItem from "../../components/CryptoNews/CryptoNewsItem";
import { useGetCryptoNewsQuery } from "../../redux/services/newsApi";

const CryptoNews = () => {
  const { data: newsList, loading, error } = useGetCryptoNewsQuery("crypto");
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsList?.articles);
  }, [newsList]);

  if (loading) return <p>Loading...</p>;

  console.log(news);

  return (
    <Box sx={{ width: "80%", margin: "auto" }}>
      <Grid container rowSpacing={1} columnSpacing={4}>
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
