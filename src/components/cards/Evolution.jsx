import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, List } from "@material-ui/core";
import axios from "axios";

const Evolution = (props) => {
  const [card, setCard] = useState();

  useEffect(() => {
    axios
      .get(props.url)
      .then(function (response) {
        const { data } = response;
        const { chain } = data;
        setCard(chain);
      })
      .catch(function (error) {
        setCard(false);
      });
  }, []);

  return (
    <Card className={props.cardClass}>
      <CardContent>
        <List>
          <Typography>{props.url}</Typography>
        </List>
      </CardContent>
    </Card>
  );
};

export default Evolution;
