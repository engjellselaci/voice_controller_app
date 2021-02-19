import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./Components/NewsCards/NewsCards";
import useStyles from "./styles";
const alanKey =
  "f5741b80627ea9205b2edf940b2e8dc62e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);
  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          src="https://ak.picdn.net/shutterstock/videos/7613365/thumb/1.jpg"
          className={classes.alanLogo}
          alt="alan logo"
        />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
