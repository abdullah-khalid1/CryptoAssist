import React from "react";
import { Box, Divider, Grid, Typography } from "@material-ui/core";
import Image from "material-ui-image";
import { useLocation } from "react-router-dom";
import { width } from "@mui/system";

const CryptoNewsDetail = ({
  title,
  description,
  urlToImage,
  author,
  source,
  publishedAt,
}) => {
  const location = useLocation();
  const mTitle = location.state.title;
  const mDescription = location.state.description;
  const mUrlToImage = location.state.urlToImage;
  const mAuthor = location.state.author;
  const mSource = location.state.source;
  const mpublishedAt = location.state.publishedAt;
  return (
    <Box sx={{ width: "80%", margin: "auto" }}>
      <Typography variant="h2">{mTitle}</Typography>
      <Divider />
      <Grid container rowSpacing={1} columnSpacing={4}>
        <Grid item xs={3} direction="row">
          <Typography variant="body1">{mSource}</Typography>
        </Grid>
        <Grid item xs={4} direction="row">
          <Typography variant="body1">{mAuthor}</Typography>
        </Grid>
        <Grid item xs={5} direction="row">
          <Typography variant="body1">
            Published {new Date(mpublishedAt).toLocaleDateString()}
          </Typography>
        </Grid>
      </Grid>

      <Image
        src={mUrlToImage}
        style={{ width: "100%", height: "500px", paddingTop: "0px" }}
        //   imageStyle={{ width: "1000px", height: "500px" }}
      />

      <Typography variant="body1">{mDescription}</Typography>
    </Box>
  );
};

export default CryptoNewsDetail;
