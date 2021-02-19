import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import makeStyles from "./styles";
const NewsCards = ({ articles }) => {
  const classes = makeStyles();
  return (
    <Grow in>
      <Grid container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid
            className={classes.container}
            key={i}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: "flex" }}
          >
            <NewsCard article={article} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
