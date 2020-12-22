import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  CardContent,
  Divider,
  Grid,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import axios from "axios";
import PokeImageCard from "./PokeImageCard";
import PokeBase from "./cards/PokeBase";
import { ArrowRight } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#D32F2F",
  },
  drawer: {
    width: "25%",
    minWidth: 350,
    maxWidth: 800,
  },
  drawerPaper: {
    width: "25%",
    minWidth: 350,
    maxWidth: 800,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    padding: theme.spacing(3),
    width: "100%",
    alignContent: "center",
  },
  // Card container styles below
  sprite: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  cardContent: {
    display: "block",
    verticalAlign: "middle",
    //border: "1px solid red",
  },
  pokeName: {
    display: "inline-block",
    textTransform: "capitalize",
    verticalAlign: "middle",
    marginLeft: "3%",
    fontSize: "1.2rem",
  },
  pokeId: {
    display: "inline-block",
    float: "right",
    fontSize: "2rem",
    color: "lightgrey",
  },
}));

const PokedexDrawer = (props) => {
  const [pokemonList, setPokemonList] = useState({});
  const [pokemon, setPokemon] = useState();
  const classes = useStyles();

  useEffect(() => {
    axios.get("./assets/data/base.json").then((response) => {
      const { data } = response;
      const { pokedex } = data;
      const pokemonList = {};
      pokedex.forEach((pokemon, index) => {
        pokemonList[index + 1] = {
          id: index + 1,
          name: pokemon.name,
          url: pokemon.url,
          sprite: pokemon.sprite,
          art: pokemon.art,
          types: pokemon.types,
          baseStats: pokemon.base_stats,
        };
      });
      setPokemonList(pokemonList);
    });
  }, []);

  const handleClick = (pokemon) => {
    setPokemon(pokemon);
  };

  const getPokemonCardOld = (pokemonId) => {
    const { id, name, sprite } = pokemonList[pokemonId];
    return (
      <>
        <CardContent
          className={classes.cardContent}
          onClick={() => {
            handleClick(pokemonList[pokemonId]);
          }}
        >
          <img
            src={sprite}
            className={classes.sprite}
            alt={`pokémon sprite for ${name}`}
          />
          <Typography className={classes.pokeName}>{name}</Typography>
          <Typography className={classes.pokeId}>{id}</Typography>
        </CardContent>
        <Divider variant="middle" />
      </>
    );
  };

  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite, types } = pokemonList[pokemonId];
    return (
      <>
        <ListItem
          onClick={() => {
            handleClick(pokemonList[pokemonId]);
          }}
        >
          <ListItemAvatar>
            <Avatar
              alt={`pokémon sprite for ${name}`}
              src={sprite}
              className={classes.sprite}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="h6" style={{ textTransform: "capitalize" }}>
                {name}
              </Typography>
            }
            secondary={types.map((type) => {
              return (
                <Typography
                  style={{
                    display: "inline-block",
                    paddingRight: "0.2rem",
                    textTransform: "capitalize",
                  }}
                  variant="body2"
                >
                  {type}
                </Typography>
              );
            })}
          />
          <Typography
            style={{ color: "lightgrey", paddingRight: "1rem" }}
            variant="h4"
          >
            {id}
          </Typography>
        </ListItem>
        <Divider variant="middle" />
      </>
    );
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" noWrap>
            Pokédex
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {Object.keys(pokemonList).map((pokemonId) =>
              getPokemonCard(pokemonId)
            )}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {pokemon ? (
          <Grid justify="center" container spacing={3}>
            <Grid item xs={4} style={{ minWidth: "450px" }}>
              <PokeImageCard pokemon={pokemon} />
            </Grid>
            <Grid item xs={4} style={{ minWidth: "450px" }}>
              <PokeBase pokemon={pokemon} />
            </Grid>
          </Grid>
        ) : (
          <Typography>Select a Pokemans</Typography>
        )}
      </main>
    </div>
  );
};

export default PokedexDrawer;
