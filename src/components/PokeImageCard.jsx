import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    marginBottom: ".5rem",
  },
  pokeId: {
    position: "absolute",
    display: "inline-block",
    float: "left",
    fontSize: "4rem",
    color: "lightgrey",
  },
  art: {
    display: "block",
    padding: "2rem 2rem .5rem 2rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
  pokeName: {
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: "2rem",
  },
  types: {
    textAlign: "center",
  },
  type: {
    display: "inline-block",
    textTransform: "capitalize",
    padding: ".2rem",
  },
});

const PokeImageCard = (props) => {
  const classes = useStyles();
  const pokemon = props.pokemon;

  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.pokeId}>{pokemon.id}</Typography>
          <img
            className={classes.art}
            src={pokemon.art}
            alt={`pokémon sprite for ${pokemon.name}`}
          />
          <Typography className={classes.pokeName}>{pokemon.name}</Typography>
          <div className={classes.types}>
            {pokemon.types.map((type) => {
              return (
                <Typography key={type} className={classes.type}>
                  {type}
                </Typography>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PokeImageCard;
