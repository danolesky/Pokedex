import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const NewPokeImage = (props) => {
  const pokemon = props.pokemon;

  return (
    <Card>
      <CardContent align="center">
        <CardMedia
          image={pokemon.art}
          title={`pokémon sprite for ${pokemon.name}`}
          style={{ maxWidth: "300px", maxHeight: "300px" }}
          component="img"
        />
        <div>
          <Typography
            variant="h3"
            align="left"
            color="textSecondary"
            style={{
              position: "absolute",
              paddingLeft: "16px",
            }}
          >
            {pokemon.id}
          </Typography>
          <Typography variant="h5" style={{ textTransform: "capitalize" }}>
            {pokemon.name}
          </Typography>
          {pokemon.types.map((type) => {
            return (
              <Typography
                key={type}
                color="textSecondary"
                style={{
                  paddingLeft: ".075rem",
                  paddingRight: ".075rem",
                  textTransform: "capitalize",
                  display: "inline-block",
                }}
              >
                {type}
              </Typography>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewPokeImage;
