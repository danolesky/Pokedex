import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  List,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Description from "./Description";

const useStyles = makeStyles({
  card: {
    marginBottom: "1rem",
  },
  desc: {
    marginLeft: "1.3rem",
    marginRight: "1.3rem",
  },
  leftRow: {
    marginLeft: "1.3rem",
    display: "inline-block",
  },
  rightRow: {
    marginRight: "1.3rem",
    display: "inline-block",
    float: "right",
    textTransform: "capitalize",
  },
});

const Species = (props) => {
  const classes = useStyles();

  const eggGroups = () => {
    let groups = "";
    for (let i = 0; i < Object.keys(props.pokemon.egg_groups).length; i++) {
      const { name } = props.pokemon.egg_groups[i];
      if (i + 1 === Object.keys(props.pokemon.egg_groups).length) {
        groups = groups + `${name.replace(/[0-9]/g, "")}`;
      } else {
        groups = groups + `${name.replace(/[0-9]/g, "")}, `;
      }
    }
    return groups;
  };

  return (
    <>
      <Description
        desc={`This is the description component`}
        cardClass={classes.card}
        typographyClass={classes.desc}
      />
    </>
  );
};

export default Species;
