import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const Description = (props) => {
  return (
    <Card className={props.cardClass}>
      <CardContent>
        <Typography className={props.typographyClass}>{props.desc}</Typography>
      </CardContent>
    </Card>
  );
};

export default Description;
