import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "f5741b80627ea9205b2edf940b2e8dc62e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewArticles(articles);
        }
      },
    });
  }, []);
  return (
    <div>
      <h1>Voice Controller App</h1>
    </div>
  );
};

export default App;
