import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: "150px",
  },
});

const CryptoNewsItem = ({
  title,
  description,
  urlToImage,
  author,
  source,
  publishedAt,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Card
      className={classes.root}
      onClick={() =>
        navigate("/newsDetail", {
          state: {
            title,
            description,
            urlToImage,
            author,
            source,
            publishedAt,
          },
        })
      }
    >
      <CardActionArea>
        <CardMedia className={classes.media} image={urlToImage} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CryptoNewsItem;
