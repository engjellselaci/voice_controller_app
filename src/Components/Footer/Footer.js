import React from "react";
import makeStyles from "./styles";
const Footer = () => {
  const classes = makeStyles();
  return (
    <div
      className={`${classes.display} ${classes.justifyContent} ${classes.marginTop}`}
    >
      <p className={classes.fontSize}>
        Created By{" "}
        <a
          className={classes.link}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/engjellselaci"
        >
          Engjell Selaci
        </a>
      </p>
    </div>
  );
};

export default Footer;
